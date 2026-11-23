/*
 * consulta da cadeia evolutiva para o modal de detalhes.
 * reutiliza API_URL e buscarJson(url), declarados em api.js.
 * não modifica a API nem a lógica principal da Pokédex.
 */
const cacheEvolucoes = new Map();

function formatarCondicaoEvolucao(detalhes) {
  if (!detalhes) return "Condição especial";

  const partes = [];
  const nome = (valor) => valor.replaceAll("-", " ");

  if (detalhes.trigger?.name === "trade") partes.push("Troca");
  if (detalhes.min_level != null) partes.push(`Nível ${detalhes.min_level}`);
  if (detalhes.item?.name) partes.push(`Item: ${nome(detalhes.item.name)}`);
  if (detalhes.held_item?.name) partes.push(`Segurando ${nome(detalhes.held_item.name)}`);
  if (detalhes.min_happiness != null) partes.push(`Felicidade ${detalhes.min_happiness}+`);
  if (detalhes.min_affection != null) partes.push(`Afeição ${detalhes.min_affection}+`);
  if (detalhes.time_of_day) partes.push(`Período: ${detalhes.time_of_day}`);
  if (detalhes.known_move?.name) partes.push(`Golpe: ${nome(detalhes.known_move.name)}`);
  if (detalhes.location?.name) partes.push(`Local: ${nome(detalhes.location.name)}`);
  if (detalhes.needs_overworld_rain) partes.push("Com chuva");

  return partes.join(" · ") || "Condição especial";
}

async function obterEvolucoes(idPokemon) {
  const id = Number(idPokemon);
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Identificador de Pokémon inválido.");
  }

  if (cacheEvolucoes.has(id)) return cacheEvolucoes.get(id);

  // 1. descobre qual cadeia evolutiva pertence à espécie.
  const especie = await buscarJson(`${API_URL}/pokemon-species/${id}/`);
  if (!especie.evolution_chain?.url) {
    throw new Error("Cadeia evolutiva não disponível.");
  }

  // 2. obtém a árvore com todos os estágios e ramificações.
  const dados = await buscarJson(especie.evolution_chain.url);
  const evolucoes = [];

  // 3. percorre todos os nós, inclusive ramificações como Eevee.
  function percorrer(no, anterior = null) {
    const idEtapa = Number(no.species.url.match(/\/(\d+)\/?$/)?.[1]);
    if (!Number.isInteger(idEtapa)) {
      throw new Error("Não foi possível identificar uma etapa da evolução.");
    }

    const condicao = anterior
      ? `${formatarCondicaoEvolucao(no.evolution_details?.[0])} (de ${anterior})`
      : "Forma inicial";

    evolucoes.push({
      id: idEtapa,
      name: no.species.name,
      image:
        cachePokemons.get(idEtapa)?.image ||
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idEtapa}.png`,
      condition: condicao,
    });

    for (const seguinte of no.evolves_to || []) {
      percorrer(seguinte, no.species.name);
    }
  }

  percorrer(dados.chain);

  // qualquer etapa da mesma família reutiliza a cadeia carregada.
  for (const etapa of evolucoes) cacheEvolucoes.set(etapa.id, evolucoes);
  return evolucoes;
}
