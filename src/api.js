const LIMITE_POKEMONS = 300;
const API_URL = "https://pokeapi.co/api/v2";

const cachePokemons = new Map();


async function buscarJson(url) {
    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error(
            resposta.status === 404
            ? "Pokémon não encontrado."
            : `A PokéAPI respondeu com erro ${resposta.status}.`,
        );
    }
    return resposta.json();
}

function mensagemErro(erro) {

    if (erro instanceof TypeError) {
        return "Não foi possível conectar à PokéAPI. Verifique sua internet.";
    }
    return erro.message;
}

function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function converterPokemon(dados) {
    const base = {};
    dados.stats.forEach((s) => (base[s.stat.name] = s.base_stat));

    return {
        id: dados.id,
        name: dados.name,
        image:
            dados.sprites.other?.["official-artwork"]?.front_default ||
            dados.sprites.front_default,
          types: dados.types.map((t) => capitalizar(t.type.name)),

          height: dados.height / 10,
          weight: dados.weight /10,
          abilities: dados.abilities.map((a) =>
        capitalizar(a.ability.name)),
          stats: {
            hp: base.hp,
            attack: base.attack,
            defense: base.defense,
            specialAttack: base["special-attack"],
            specialDefense: base["special-defense"],
            speed: base.speed,
            total: Object.values(base).reduce((soma, v) => soma + v, 0), 
          },
    };
}

async function obterPokemon(chave) {
  const k = String(chave).trim().toLowerCase();
  const ehNumero = /^\d+$/.test(k);

  if (ehNumero && (Number(k) < 1 || Number(k) > LIMITE_POKEMONS)) {
    throw new Error(`Só é possível buscar Pokémons de 1 a ${LIMITE_POKEMONS}.`);
  }

  const emCache = ehNumero
    ? cachePokemons.get(Number(k))
    : [...cachePokemons.values()].find((p) => p.name === k);
  if (emCache) return emCache;

  const dados = await buscarJson(`${API_URL}/pokemon/${encodeURIComponent(k)}`);
  const pokemon = converterPokemon(dados);

  // busca por nome: só dá para saber o número depois de baixar
  if (pokemon.id > LIMITE_POKEMONS) {
    throw new Error(`Só é possível buscar Pokémons de 1 a ${LIMITE_POKEMONS}.`);
  }

  cachePokemons.set(pokemon.id, pokemon);
  return pokemon;
}

async function listarPokemons(offset, limite) {
  const restante = LIMITE_POKEMONS - offset;
  if (restante <= 0) return { total: LIMITE_POKEMONS, pokemons: [] };

  const lista = await buscarJson(
    `${API_URL}/pokemon?limit=${Math.min(limite, restante)}&offset=${offset}`,
  );
  const pokemons = await Promise.all(
    lista.results.map((r) => obterPokemon(r.name)),
  );
  return { total: Math.min(lista.count, LIMITE_POKEMONS), pokemons };
}