const listaPokemons = [
  {
    id: 384,
    name: "rayquaza",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
    types: ["Dragon", "Flying"],
    height: 7.0,
    weight: 206.5,
    category: "Sky High",
    abilities: ["Air Lock"],
    weakness: ["Ice", "Rock", "Dragon", "Fairy"],
    resistances: ["Fire", "Water", "Grass", "Fighting", "Bug"],
    stats: {
      hp: 105,
      attack: 150,
      defense: 90,
      specialAttack: 150,
      specialDefense: 90,
      speed: 95,
      total: 680,
    },
  }, //Mew
  {
    id: 151,
    name: "mew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    types: ["Psychic"],
    height: 0.4,
    weight: 4.0,
    category: "New Species",
    abilities: ["Synchronize"],
    weakness: ["Bug", "Ghost", "Dark"],
    resistances: [],
    stats: {
      hp: 100,
      attack: 100,
      defense: 100,
      specialAttack: 100,
      specialDefense: 100,
      speed: 100,
      total: 600,
    },
  }, // charmander
  {
    id: 4,
    name: "charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    types: ["Fire"],
    height: 0.6,
    weight: 8.5,
    category: "Lizard",
    abilities: ["Blaze"],
    weakness: ["Water", "Ground", "Rock"],
    resistances: ["Grass", "Bug", "Fairy"],
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      specialAttack: 60,
      specialDefense: 50,
      speed: 65,
      total: 309,
    },
  },
  {
    // rattata
    id: 19,
    name: "rattata",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    types: ["Normal"],
    height: 0.3,
    weight: 3.5,
    category: "Mouse",
    abilities: ["Run Away", "Guts", "One-Hit Wonder"],
    weakness: ["Fighting"],
    resistances: ["Poison", "Bug", "Fairy"],
    stats: {
      hp: 30,
      attack: 56,
      defense: 38,
      specialAttack: 35,
      specialDefense: 45,
      speed: 72,
      total: 276,
    },
  },
  {
    // pidgey
    id: 16,
    name: "pidgey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    types: ["Normal", "Flying"],
    height: 0.3,
    weight: 1.8,
    category: "Tiny Bird",
    abilities: ["Keen Eye", "Tangled Feet", "Big Pecks"],
    weakness: ["Electric", "Ice", "Rock"],
    resistances: ["Grass", "Bug", "Fighting"],
    stats: {
      hp: 40,
      attack: 45,
      defense: 40,
      specialAttack: 35,
      specialDefense: 35,
      speed: 56,
      total: 251,
    },
  },
  {
    // pikachu
    id: 25,
    name: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    types: ["Electric"],
    height: 0.4,
    weight: 6.0,
    category: "Mouse",
    abilities: ["Static", "Volt Absorb"],
    weakness: ["Ground"],
    resistances: ["Flying", "Steel"],
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      specialAttack: 50,
      specialDefense: 50,
      speed: 90,
      total: 320,
    },
  },
  {
    // squirtle
    id: 7,
    name: "squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    types: ["Water"],
    height: 0.5,
    weight: 9.0,
    category: "Tiny Turtle",
    abilities: ["Torrent", "Rain Dish"],
    weakness: ["Electric", "Grass"],
    resistances: ["Fire", "Water", "Ice", "Steel"],
    stats: {
      hp: 44,
      attack: 48,
      defense: 65,
      specialAttack: 50,
      specialDefense: 64,
      speed: 43,
      total: 314,
    },
  },
  {
    // bulbasaur
    id: 1,
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["Grass", "Poison"],
    height: 0.7,
    weight: 6.9,
    category: "Seed",
    abilities: ["Overgrow", "Chlorophyll"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
    resistances: ["Water", "Electric", "Grass", "Fighting"],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      specialAttack: 65,
      specialDefense: 65,
      speed: 45,
      total: 318,
    },
  },
  {
    //snorlax
    id: 143,
    name: "snorlax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    types: ["Normal"],
    height: 1.2,
    weight: 46.0,
    category: "Sleeping",
    abilities: ["Immunity", "Thick Fat", "Gluttony"],
    weakness: ["Fighting"],
    resistances: ["Ghost"],
    stats: {
      hp: 160,
      attack: 110,
      defense: 65,
      specialAttack: 65,
      specialDefense: 65,
      speed: 30,
      total: 500,
    },
  },
  {
    //  blastoise
    id: 9,
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    types: ["Water"],
    height: 1.0,
    weight: 85.5,
    category: "Shellfish",
    abilities: ["Torrent", "Rain Dish"],
    weakness: ["Electric", "Grass"],
    resistances: ["Fire", "Water", "Ice", "Steel"],
    stats: {
      hp: 79,
      attack: 83,
      defense: 100,
      specialAttack: 85,
      specialDefense: 100,
      speed: 78,
      total: 535,
    },
  },
];

console.log(listaPokemons);

//logica pokedex
//logica pokedex
let estadoPokemons = [];
let tipoAtivo = "Todos";
let ordemAtiva = "numero";
let termoBusca = "";
let abaAtual = "aba-pokedex";
const CHAVE_TEMA = "pokedexTema";
let qtdAnteriorTopo = null;
const ICONE_POKEBOLA = `
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
       stroke="currentColor" stroke-width="2" aria-hidden="true">
    <circle cx="12" cy="12" r="9"/>
    <path d="M3 12h18"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`;

let colecao = [];
const CHAVE_COLECAO = "pokedexColecao";

const TIPOS = [
  "Todos",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Psychic",
  "Ice",
  "Dragon",
  "Dark",
  "Normal",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Bug",
  "Rock",
  "Ghost",
  "Steel",
  "Fairy",
];

const COR_TIPO = {
  Grass: "#3a9a4f",
  Poison: "#a050c8",
  Fire: "#f05a28",
  Water: "#3a86e0",
  Electric: "#e8b800",
  Psychic: "#ea5a9a",
  Ice: "#5bc8d8",
  Dragon: "#6a4cd8",
  Dark: "#4a4458",
  Normal: "#8a8a7a",
  Fighting: "#c03028",
  Ground: "#c8a040",
  Flying: "#7a90e0",
  Bug: "#8ab020",
  Rock: "#a8903a",
  Ghost: "#6a50a0",
  Steel: "#8a9aaa",
  Fairy: "#e888b8",
};

function corDoTipo(pokemon) {
  return COR_TIPO[pokemon.types[0]] || "#888";
}

function nomeBonito(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1);
}

function formatarNumero(id) {
  return "#" + String(id).padStart(3, "0");
}

function corHp(hp) {
  if (hp < 50) return "#c00000";
  if (hp < 80) return "#d4a017";
  return "#2e9e4f";
}

function htmlTipos(pokemon) {
  return pokemon.types
    .map(
      (t) =>
        `<span class="badge-tipo" style="--cor:${COR_TIPO[t] || "#888"}">${t}</span>`,
    )
    .join("");
}

const ICONE_LIXEIRA = `
    <svg 
        viewBox="0 0 24 24" 
        width="18"
        height="18" 
        fill="none" 
        stroke="currentColor"
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        aria-hidden="true"
    >
        <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v6M14 10v6"/>
    </svg>`;

function inicializarEstado() {
  if (typeof listaPokemons === "undefined") {
    console.error("listaPokemons não foi encontrada.");
    estadoPokemons = [];
    return;
  }

  let dadosSalvos = null;
  try {
    dadosSalvos = JSON.parse(localStorage.getItem("pokedexData"));
  } catch (erro) {
    dadosSalvos = null;
  }

  if (Array.isArray(dadosSalvos) && dadosSalvos.length > 0) {
    estadoPokemons = dadosSalvos;
  } else {
    estadoPokemons = listaPokemons;
    localStorage.setItem("pokedexData", JSON.stringify(estadoPokemons));
  }
}

function carregarColecao() {
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE_COLECAO));
    colecao = Array.isArray(salvo) ? salvo : [];
  } catch (erro) {
    colecao = [];
  }
}

function salvarColecao() {
  try {
    localStorage.setItem(CHAVE_COLECAO, JSON.stringify(colecao));
  } catch (erro) {
    console.error("Não foi possível salvar a coleção:", erro);
  }
}

function estaCapturado(id) {
  return colecao.includes(id);
}

function capturar(id) {
  if (estaCapturado(id)) return;
  colecao.push(id);
  salvarColecao();
}

function remover(id) {
  colecao = colecao.filter((item) => item !== id);
  salvarColecao();
}

function combinaComBusca(p) {
  const termo = termoBusca.trim().toLowerCase().replace("#", "");
  if (!termo) return true;
  if (/^\d+$/.test(termo)) return p.id === Number(termo);
  return p.name.toLowerCase().includes(termo);
}

function obterListaFiltrada(comTermo = false) {
  let lista = estadoPokemons.filter(
    (p) => tipoAtivo === "Todos" || p.types.includes(tipoAtivo),
  );
  if (comTermo) lista = lista.filter(combinaComBusca);

  if (ordemAtiva === "numero") lista.sort((a, b) => a.id - b.id);
  if (ordemAtiva === "nome") lista.sort((a, b) => a.name.localeCompare(b.name));
  if (ordemAtiva === "hp") lista.sort((a, b) => b.stats.hp - a.stats.hp);

  return lista;
}
function renderizarTipos() {
  const container = document.getElementById("lista-tipos");
  container.innerHTML = "";
  const chips = document.getElementById("busca-chips");

  chips.innerHTML = "";
  TIPOS.forEach((tipo) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + (tipo === tipoAtivo ? " ativo" : "");
    chip.dataset.tipo = tipo;
    chip.textContent = tipo;
    chips.appendChild(chip);
  });

  TIPOS.forEach((tipo) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "opcao" + (tipo === tipoAtivo ? " ativo" : "");
    botao.dataset.tipo = tipo;
    botao.textContent = (tipo === "Todos" ? "◈ " : "") + tipo;
    container.appendChild(botao);
  });
}

function renderizarColecao() {
  const lista = document.getElementById("lista-colecao");
  const capturados = colecao
    .map((id) => estadoPokemons.find((p) => p.id === id))
    .filter(Boolean);

  document.getElementById("contador-colecao").textContent =
    `${capturados.length} CAPTURADOS`;

  const badge = document.getElementById("badge-colecao");
  badge.textContent = capturados.length;
  badge.hidden = capturados.length === 0;
  atualizarPokebolaTopo(capturados.length);

  lista.innerHTML = "";

  if (capturados.length === 0) {
    lista.innerHTML =`
      <div class="colecao-vazio">
        <div class="colecao-vazio-icone" aria-hidden="true">
          ${ICONE_POKEBOLA}
        </div>
        <p class="colecao-vazio-titulo">Coleção vazia</p>
        <p class="colecao-vazio-subtitulo">Adicione Pokémons à sua coleção</p>
      </div>
    `;
    return;
  }

  capturados.forEach((p) => {
    const item = document.createElement("div");
    item.className = "item-colecao";
    item.style.setProperty("--cor", corDoTipo(p));

    item.innerHTML = `
      <img class="item-img" src="${p.image}" alt="${p.name}">
      <div class="item-info">
        <span class="item-numero">${formatarNumero(p.id)}</span>
        <h3 class="item-nome">${nomeBonito(p.name)}</h3>
        <div class="cartao-tipos">${htmlTipos(p)}</div>
      </div>
      <button type="button" class="btn-remover"
              data-remover-id="${p.id}"
              aria-label="Remover ${nomeBonito(p.name)}">
        ${ICONE_LIXEIRA}
      </button>
    `;
    lista.appendChild(item);
  });
}

document.getElementById("lista-colecao").addEventListener("click", (e) => {
  const botao = e.target.closest("[data-remover-id]");
  if (!botao) return;
  pedirRemocao(Number(botao.dataset.removerId));
});

let idParaRemover = null;

function pedirRemocao(id) {
  const p = estadoPokemons.find((x) => x.id === id);
  if (!p) return;

  idParaRemover = id;
  document.getElementById("modal-img").src = p.image;
  document.getElementById("modal-img").alt = p.name;
  document.getElementById("modal-texto").textContent =
    `Deseja remover ${nomeBonito(p.name)} da sua coleção?`;
  document.getElementById("modal-remover").hidden = false;
}

function fecharModal() {
  idParaRemover = null;
  document.getElementById("modal-remover").hidden = true;
}

document.getElementById("modal-nao").addEventListener("click", fecharModal);

document.getElementById("modal-sim").addEventListener("click", () => {
  if (idParaRemover !== null) {
    remover(idParaRemover);
    atualizarTudo();
  }
  fecharModal();
});

function renderizarPokedex() {
  const container = document.getElementById("grid-cartoes");
  const lista = obterListaFiltrada();
  atualizarContador();

  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<p>Nenhum Pokémon encontrado.</p>";
    return;
  }

  lista.forEach((pokemon) => {
    const hp = pokemon.stats.hp;
    const cartao = document.createElement("div");
    cartao.className = "cartao-pokemon";
    cartao.style.setProperty("--cor", corDoTipo(pokemon));

    cartao.innerHTML = `
            <span class="cartao-numero">${formatarNumero(pokemon.id)}</span>

            <button
                type="button"
                class="btn-captura ${estaCapturado(pokemon.id) ? "capturado" : ""}"
                data-captura-id="${pokemon.id}"
                aria-label="capturar Pokémon"
            >
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <circle 
                    cx="12" 
                    cy="12" 
                    r="9"
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2"/>
                    
                    <path d="M3 12h18"
                        stroke="currentColor" stroke-width="2"/>

                    <circle 
                        cx="12" 
                        cy="12" 
                        r="3"
                        fill="none" 
                        stroke="currentColor" stroke-width="2"/>
                </svg>
            </button>

            <img class="cartao-img" src="${pokemon.imagem || pokemon.image}" alt="${pokemon.name}">
            <h3 class="cartao-nome"> ${nomeBonito(pokemon.name)}</h3>
            <div class="cartao-tipos">${htmlTipos(pokemon)}</div>

            <div class="cartao-hp"><span>HP</span><span>${hp}</span></div>
            <div class="barra">
                <div class="barra-preenchida"
                style="width:${Math.min((hp / 255) * 100, 100)}%; background:${corHp(hp)}"></div>
            </div>

            <div class="cartao-medidas">
                <span>${pokemon.height.toFixed(1)}m</span>
                <span>${pokemon.weight.toFixed(1)}kg</span>
           </div>
        `;
    container.appendChild(cartao);
  });
}

function tratarCliqueCaptura(evento) {
  const botao = evento.target.closest("[data-captura-id]");
  if (!botao) return;
  const id = Number(botao.dataset.capturaId);
  if (estaCapturado(id)) {
    pedirRemocao(id);
  } else {
    capturar(id);
    atualizarTudo();
  }
}

document
  .getElementById("grid-cartoes")
  .addEventListener("click", tratarCliqueCaptura);
document
  .getElementById("lista-busca")
  .addEventListener("click", tratarCliqueCaptura);

function escolherTipo(e) {
  const botao = e.target.closest("[data-tipo]");
  if (!botao) return;
  tipoAtivo = botao.dataset.tipo;
  renderizarTipos();
  renderizarPokedex();
  renderizarBusca();
}

document.getElementById("lista-tipos").addEventListener("click", escolherTipo);
document.getElementById("busca-chips").addEventListener("click", escolherTipo);

document.getElementById("lista-ordem").addEventListener("click", (e) => {
  const botao = e.target.closest("[data-ordem]");
  if (!botao) return;
  ordemAtiva = botao.dataset.ordem;
  document
    .querySelectorAll("#lista-ordem .opcao")
    .forEach((b) => b.classList.toggle("ativo", b === botao));
  renderizarPokedex();
  renderizarBusca();
});

const abas = document.querySelectorAll(".aba");
const paineis = document.querySelectorAll(".painel");

function posicionarFiltros(idPainel) {
  const layout = document.querySelector(`#${idPainel} .layout-pokedex`);
  if (!layout) return;
  layout.prepend(document.getElementById("filtros"));
  layout.prepend(document.getElementById("btn-filtros"));
}

function mostrarAba(idAba) {
  const idPainel = idAba.replace("aba-", "painel-");
  abaAtual = idAba;

  document.querySelectorAll(".aba-rodape").forEach((botao) => {
    botao.classList.toggle(
      "ativa",
      botao.dataset.aba === idAba.replace("aba-", "")
    );
  });
  abas.forEach((aba) => {
    const ativa = aba.id === idAba;
    aba.setAttribute("aria-selected", ativa);
    aba.tabIndex = ativa ? 0 : -1;
  });

  paineis.forEach((painel) => {
    if (painel.id === idPainel) {
      painel.hidden = false;
      painel.style.display = "block";
    } else {
      painel.hidden = true;
      painel.style.display = "none";
    }
  });

  posicionarFiltros(idPainel);
  atualizarContador();
}

abas.forEach((aba) => {
  aba.addEventListener("click", () => mostrarAba(aba.id));
});

const abasRodape = document.querySelectorAll(".aba-rodape");

abasRodape.forEach((botao) => {
  botao.addEventListener("click", () => {
    const idAba = "aba-" + botao.dataset.aba;
    mostrarAba(idAba);
  });
});

inicializarEstado();
carregarColecao();
renderizarTipos();
renderizarPokedex();
renderizarBusca();
renderizarColecao();

const layouts = document.querySelectorAll(".layout-pokedex");
const btnFiltros = document.getElementById("btn-filtros");
const CHAVE_FILTROS = "pokedexFiltrosFechados";

function aplicarEstadoFiltros(fechado) {
  layouts.forEach((l) => l.classList.toggle("filtros-fechados", fechado));
  btnFiltros.setAttribute("aria-expanded", String(!fechado));
  btnFiltros.setAttribute(
    "aria-label",
    fechado ? "Abrir filtros" : "Fechar filtros",
  );
}

btnFiltros.addEventListener("click", () => {
  const fechado = !layouts[0].classList.contains("filtros-fechados");
  aplicarEstadoFiltros(fechado);
  try {
    localStorage.setItem(CHAVE_FILTROS, fechado);
  } catch (erro) {
    console.error("Não foi possível salvar o estado dos filtros:", erro);
  }
});

try {
  aplicarEstadoFiltros(localStorage.getItem(CHAVE_FILTROS) === "true");
} catch (erro) {
  aplicarEstadoFiltros(false);
}

// ============================================================
// ABA EQUIPE
// ============================================================

const CHAVE_EQUIPE = "pokedexEquipe";
const LIMITE_EQUIPE = 6;

// ids dos Pokemon que formam a equipe (independente da colecao)
let equipe = [];

// ---------- Dados e persistencia ----------

function carregarEquipe() {
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE_EQUIPE));

    if (!Array.isArray(salvo)) {
      equipe = [];
      return;
    }

    // Mantem so ids que existem na Pokedex, sem repetidos e ate o limite.
    // Isso protege a equipe caso o dado salvo esteja alterado ou corrompido.
    equipe = salvo
      .filter(
        (id, posicao) =>
          salvo.indexOf(id) === posicao &&
          estadoPokemons.some((p) => p.id === id),
      )
      .slice(0, LIMITE_EQUIPE);
  } catch (erro) {
    equipe = [];
  }
}

function salvarEquipe() {
  try {
    localStorage.setItem(CHAVE_EQUIPE, JSON.stringify(equipe));
  } catch (erro) {
    console.error("Não foi possível salvar a equipe:", erro);
  }
}

function estaNaEquipe(id) {
  return equipe.includes(id);
}

function equipeCheia() {
  return equipe.length >= LIMITE_EQUIPE;
}

// Retorna true se o Pokemon foi adicionado e false se a regra impediu.
// Aqui ficam as regras: limite de 6, sem repetir e so Pokemon cadastrado.
function adicionarNaEquipe(id) {
  if (equipeCheia() || estaNaEquipe(id)) return false;
  if (!estadoPokemons.some((p) => p.id === id)) return false;

  equipe.push(id);
  salvarEquipe();
  return true;
}

function removerDaEquipe(id) {
  equipe = equipe.filter((item) => item !== id);
  salvarEquipe();
}

function textoLimiteEquipe() {
  return `Limite de ${LIMITE_EQUIPE} Pokémon atingido. Remova um Pokémon para adicionar outro.`;
}

// ---------- Aba Equipe: cabecalho e cards ----------

function renderizarEquipe() {
  const lista = document.getElementById("lista-equipe");
  const aviso = document.getElementById("aviso-equipe");
  const botaoAdicionar = document.getElementById("btn-equipe-adicionar");

  const membros = equipe
    .map((id) => estadoPokemons.find((p) => p.id === id))
    .filter(Boolean);

  document.getElementById("contador-equipe").textContent =
    `${membros.length}/${LIMITE_EQUIPE} POKÉMON`;

  // Com a equipe cheia, o botao fica bloqueado e o aviso aparece
  botaoAdicionar.disabled = equipeCheia();
  aviso.hidden = !equipeCheia();
  aviso.textContent = textoLimiteEquipe();

  lista.innerHTML = "";

  if (membros.length === 0) {
    lista.innerHTML = `
      <div class="vazio equipe-vazio">
        <p class="equipe-vazio-titulo">SUA EQUIPE ESTÁ VAZIA</p>
        <p>Clique em "Adicionar Pokémon" para escolher até ${LIMITE_EQUIPE} Pokémon.</p>
      </div>`;
    return;
  }

  // Usa as mesmas classes do cartao da aba Pokedex
  membros.forEach((p) => {
    const cartao = document.createElement("div");
    cartao.className = "cartao-pokemon cartao-equipe";
    cartao.style.setProperty("--cor", corDoTipo(p));

    cartao.innerHTML = `
      <span class="cartao-numero">${formatarNumero(p.id)}</span>

      <button type="button" class="btn-remover"
              data-equipe-remover-id="${p.id}"
              aria-label="Remover ${nomeBonito(p.name)} da equipe">
        ${ICONE_LIXEIRA}
      </button>

      <img class="cartao-img" src="${p.image}" alt="${p.name}">
      <h3 class="cartao-nome">${nomeBonito(p.name)}</h3>
      <div class="cartao-tipos">${htmlTipos(p)}</div>
    `;
    lista.appendChild(cartao);
  });
const slotsVazios = LIMITE_EQUIPE - membros.length;
  for (let i = 0; i < slotsVazios; i++) {
    const slot = document.createElement("button");
    slot.type = "button";
    slot.className = "slot-equipe-vazio";
    slot.setAttribute("aria-label", "Adicionar Pokémon na equipe");

    slot.innerHTML = `
      <span class="slot-equipe-mais" aria-hidden="true">+</span>
      <span class="slot-equipe-rotulo">SLOT VAZIO</span>
    `;

    slot.addEventListener("click", abrirSeletorEquipe);
    lista.appendChild(slot);
  }
}
document.getElementById("lista-equipe").addEventListener("click", (e) => {
  const botao = e.target.closest("[data-equipe-remover-id]");
  if (!botao) return;

  removerDaEquipe(Number(botao.dataset.equipeRemoverId));
  renderizarEquipe();
  // Se o seletor estiver aberto, ele tambem precisa refletir a remocao
  renderizarSeletorEquipe();
});

// ---------- Seletor de Pokemon (painel para adicionar) ----------

const modalEquipe = document.getElementById("modal-equipe");
const campoBuscaEquipe = document.getElementById("seletor-busca");

function renderizarSeletorEquipe() {
  const lista = document.getElementById("seletor-lista");
  const aviso = document.getElementById("seletor-aviso");
  const termo = campoBuscaEquipe.value.trim().toLowerCase();

  aviso.hidden = !equipeCheia();
  aviso.textContent = textoLimiteEquipe();

  // Pesquisa por nome ou por numero, como o campo de busca do cabecalho
  const encontrados = estadoPokemons
    .filter(
      (p) =>
        p.name.toLowerCase().includes(termo) ||
        formatarNumero(p.id).includes(termo) ||
        String(p.id) === termo,
    )
    .sort((a, b) => a.id - b.id);

  lista.innerHTML = "";

  if (encontrados.length === 0) {
    lista.innerHTML = '<p class="vazio">Nenhum Pokémon encontrado.</p>';
    return;
  }

  // Usa as mesmas classes do item da aba Colecao
  encontrados.forEach((p) => {
    const naEquipe = estaNaEquipe(p.id);
    const item = document.createElement("div");
    item.className = "item-colecao";
    item.style.setProperty("--cor", corDoTipo(p));

    item.innerHTML = `
      <img class="item-img" src="${p.image}" alt="${p.name}">
      <div class="item-info">
        <span class="item-numero">${formatarNumero(p.id)}</span>
        <h3 class="item-nome">${nomeBonito(p.name)}</h3>
        <div class="cartao-tipos">${htmlTipos(p)}</div>
      </div>
      <button type="button" class="btn-seletor-adicionar"
              data-equipe-adicionar-id="${p.id}"
              ${naEquipe || equipeCheia() ? "disabled" : ""}>
        ${naEquipe ? "NA EQUIPE" : "ADICIONAR"}
      </button>
    `;
    lista.appendChild(item);
  });
}

function abrirSeletorEquipe() {
  if (equipeCheia()) return;
  campoBuscaEquipe.value = "";
  renderizarSeletorEquipe();
  modalEquipe.hidden = false;
  campoBuscaEquipe.focus();
}

function fecharSeletorEquipe() {
  modalEquipe.hidden = true;
  // Devolve o foco ao botao que abriu o seletor
  document.getElementById("btn-equipe-adicionar").focus();
}

document
  .getElementById("btn-equipe-adicionar")
  .addEventListener("click", abrirSeletorEquipe);

document
  .getElementById("seletor-fechar")
  .addEventListener("click", fecharSeletorEquipe);

// Clicar no fundo escuro (fora da caixa) tambem fecha o seletor
modalEquipe.addEventListener("click", (e) => {
  if (e.target === modalEquipe) fecharSeletorEquipe();
});

campoBuscaEquipe.addEventListener("input", renderizarSeletorEquipe);

document.getElementById("seletor-lista").addEventListener("click", (e) => {
  const botao = e.target.closest("[data-equipe-adicionar-id]");
  if (!botao) return;

  if (adicionarNaEquipe(Number(botao.dataset.equipeAdicionarId))) {
    renderizarEquipe();
    // Atualiza os botoes (NA EQUIPE) e o aviso de limite no seletor
    renderizarSeletorEquipe();
  }
});

// ---------- Inicializacao da equipe ----------
// estadoPokemons ja foi carregado por inicializarEstado() mais acima
carregarEquipe();
renderizarEquipe();

function atualizarContador() {
  const naBusca = abaAtual === "aba-buscar";
  const lista = obterListaFiltrada(naBusca);
  const elementoContador = document.getElementById("contador");
  elementoContador.textContent =
    lista.length + " / " + estadoPokemons.length + " Pokémons";
}

function renderizarBusca() {
  const lista = document.getElementById("lista-busca");
  const resultados = obterListaFiltrada(true);

  atualizarContador();
  lista.innerHTML = "";

  if (resultados.length === 0) {
    lista.innerHTML = '<p class="vazio">Nenhum Pokémon encontrado.</p>';
    return;
  }

  resultados.forEach((p) => {
    const item = document.createElement("div");
    item.className = "resultado";
    item.style.setProperty("--cor", corDoTipo(p));

    item.innerHTML = `
      <img class="resultado-img" src="${p.image}" alt="${p.name}">
      <div class="resultado-info">
        <span class="resultado-numero">${formatarNumero(p.id)}</span>
        <h3 class="resultado-nome">${nomeBonito(p.name)}</h3>
        <div class="cartao-tipos">${htmlTipos(p)}</div>
      </div>
      <div class="resultado-stats">
        <span>HP ${p.stats.hp}</span>
        <span>${p.height.toFixed(1)}m</span>
      </div>
      <button type="button"
              class="btn-captura ${estaCapturado(p.id) ? "capturado" : ""}"
              data-captura-id="${p.id}"
              aria-label="capturar Pokémon">
        ${ICONE_POKEBOLA}
      </button>
    `;
    lista.appendChild(item);
  });
}

function atualizarTudo() {
  renderizarPokedex();
  renderizarBusca();
  renderizarColecao(); // também atualiza a pokébola do topo
}

const campoBusca = document.getElementById("campo-busca");
const campoBuscaPainel = document.getElementById("campo-busca-painel");

function aplicarBusca(texto, origem) {
  termoBusca = texto;
  if (origem !== campoBusca) campoBusca.value = texto;
  if (origem !== campoBuscaPainel) campoBuscaPainel.value = texto;
  if (texto.trim() && abaAtual !== "aba-buscar") mostrarAba("aba-buscar");

  renderizarBusca();
}
campoBusca.addEventListener("input", () =>
  aplicarBusca(campoBusca.value, campoBusca),
);
campoBuscaPainel.addEventListener("input", () =>
  aplicarBusca(campoBuscaPainel.value, campoBuscaPainel),
);

function atualizarPokebolaTopo(qtd) {
  const btn = document.getElementById("btn-colecao-topo");
  const badge = document.getElementById("badge-topo");

  badge.textContent = qtd;
  badge.hidden = qtd === 0;
  btn.classList.toggle("tem-itens", qtd > 0);

  if (qtdAnteriorTopo !== null && qtd > qtdAnteriorTopo) {
    btn.classList.remove("pulo");
    void btn.offsetWidth;
    btn.classList.add("pulo");
  }

  qtdAnteriorTopo = qtd;
}

document
  .getElementById("btn-colecao-topo")
  .addEventListener("click", () => mostrarAba("aba-colecao"));

renderizarColecao();

const btnTema = document.getElementById("btn-tema");

const ICONE_LUA = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round"
  stroke-linejoin="round" aria-hidden="true">
  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`;

const ICONE_SOL = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round"
  stroke-linejoin="round" aria-hidden="true">
  <circle cx="12" cy="12" r="4"/>
  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;

function aplicarTema(tema) {
  const escuro = tema === "escuro";

  if (escuro) {
    document.documentElement.setAttribute("data-tema", "escuro");
  } else {
    document.documentElement.removeAttribute("data-tema");
  }

  btnTema.innerHTML = escuro ? ICONE_SOL : ICONE_LUA;
  btnTema.title = escuro ? "Modo claro" : "Modo noturno";
  btnTema.setAttribute("aria-label", btnTema.title);
}

btnTema.addEventListener("click", () => {
  const novo =
    document.documentElement.getAttribute("data-tema") === "escuro"
      ? "claro"
      : "escuro";
  aplicarTema(novo);
  try {
    localStorage.setItem(CHAVE_TEMA, novo);
  } catch (erro) {
    console.error("Não foi possível salvar o tema:", erro);
  }
});

try {
  aplicarTema(localStorage.getItem(CHAVE_TEMA) || "claro");
} catch (erro) {
  aplicarTema("claro");
}


abasRodape.forEach((botao) => {
  botao.addEventListener("click", () => {
    const nomeAba = botao.dataset.aba;

    mostrarAba("aba-" + nomeAba);

    
    abasRodape.forEach((aba) => {
      aba.classList.remove("ativa");
    });

    botao.classList.add("ativa");
  });
});
