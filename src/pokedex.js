//logica pokedex
//logica pokedex
let estadoPokemons = [];
let tipoAtivo = "Todos";
let ordemAtiva = "numero";

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

function obterListaFiltrada() {
  let lista = estadoPokemons.filter(
    (p) => tipoAtivo === "Todos" || p.types.includes(tipoAtivo),
  );

  if (ordemAtiva === "numero") lista.sort((a, b) => a.id - b.id);
  if (ordemAtiva === "nome") lista.sort((a, b) => a.name.localeCompare(b.name));
  if (ordemAtiva === "hp") lista.sort((a, b) => b.stats.hp - a.stats.hp);

  return lista;
}

function renderizarTipos() {
  const container = document.getElementById("lista-tipos");
  container.innerHTML = "";

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
  renderizarBusca();
  const lista = document.getElementById("lista-colecao");
  const capturados = colecao
    .map((id) => cachePokemons.get(id))
    .filter(Boolean);

  document.getElementById("contador-colecao").textContent =
    `${capturados.length} CAPTURADOS`;

  const badge = document.getElementById("badge-colecao");
  badge.textContent = capturados.length;
  badge.hidden = capturados.length === 0;

  lista.innerHTML = "";

  if (capturados.length === 0) {
    lista.innerHTML =
      '<p class="vazio">voce ainda não capturou nenhum Pokemon.</p>';
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
  const p = cachePokemons.get(id);
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
    renderizarPokedex();   // atualiza o botão de captura nos cartões
    renderizarColecao();   // atualiza a lista da coleção
  }
  fecharModal();
});

function criarCartao(pokemon) {
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
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M3 12h18" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
      </svg>
    </button>

    <img class="cartao-img" src="${pokemon.image}" alt="${pokemon.name}" loading="lazy">
    <h3 class="cartao-nome">${nomeBonito(pokemon.name)}</h3>
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
  return cartao;
}

function renderizarPokedex() {
  const container = document.getElementById("grid-cartoes");
  const lista = obterListaFiltrada();

  document.getElementById("contador").textContent =
    `${lista.length} / ${estadoPokemons.length} Pokémons`;

  container.innerHTML = "";

  // só mostra "nenhum encontrado" depois que algo já foi carregado
  if (lista.length === 0 && estadoPokemons.length > 0) {
    container.innerHTML = "<p>Nenhum Pokémon encontrado.</p>";
    return;
  }

  lista.forEach((pokemon) => container.appendChild(criarCartao(pokemon)));
}

document
  .getElementById("grid-cartoes")
  .addEventListener("click", function (evento) {
    const botao = evento.target.closest("[data-captura-id]");

    if (!botao) return;

    const id = Number(botao.dataset.capturaId);

    if (estaCapturado(id)) {
      pedirRemocao(id);
    } else {
      capturar(id);
      renderizarPokedex();
      renderizarColecao();
    }
  });

document.getElementById("lista-tipos").addEventListener("click", (e) => {
  const botao = e.target.closest("[data-tipo]");
  if (!botao) return;
  tipoAtivo = botao.dataset.tipo;
  renderizarTipos();
  renderizarPokedex();
});

document.getElementById("lista-ordem").addEventListener("click", (e) => {
  const botao = e.target.closest("[data-ordem]");
  if (!botao) return;
  ordemAtiva = botao.dataset.ordem;
  document
    .querySelectorAll("#lista-ordem .opcao")
    .forEach((b) => b.classList.toggle("ativo", b === botao));
  renderizarPokedex();
});

const abas = document.querySelectorAll(".aba");
const paineis = document.querySelectorAll(".painel");

function mostrarAba(idAba) {
  const idPainel = idAba.replace("aba-", "painel-");

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
}

abas.forEach((aba) => {
  aba.addEventListener("click", () => mostrarAba(aba.id));
});

const layoutPokedex = document.querySelector(".layout-pokedex");
const btnFiltros = document.getElementById("btn-filtros");
const CHAVE_FILTROS = "pokedexFiltrosFechados";

function aplicarEstadoFiltros(fechado) {
  layoutPokedex.classList.toggle("filtros-fechados", fechado);
  btnFiltros.setAttribute("aria-expanded", String(!fechado));
  btnFiltros.setAttribute(
    "aria-label",
    fechado ? "Abrir filtros" : "Fechar filtros",
  );
}

btnFiltros.addEventListener("click", () => {
  const fechado = !layoutPokedex.classList.contains("filtros-fechados");
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

const POR_PAGINA = 20;
let proximoOffset = 0;
let totalNaApi = 0;
let carregando = false;
let buscaAtual = 0;
let pokemonBuscado = null;

const conteudoPokedex = document.querySelector(".conteudo-pokedex");
const statusPokedex = document.createElement("div");
statusPokedex.setAttribute("role", "status");
conteudoPokedex.prepend(statusPokedex);

const btnMais = document.createElement("button");
btnMais.type = "button";
btnMais.className = "btn-mais";
btnMais.textContent = "CARREGAR MAIS";
btnMais.hidden = true;
btnMais.addEventListener("click", carregarMais);
conteudoPokedex.appendChild(btnMais);

document.getElementById("painel-buscar").innerHTML = `
  <h2>Buscar</h2>
  <p>Digite o nome ou número exato na barra de busca e aperte Enter.</p>
  <div id="status-busca"></div>
  <div id="resultado-busca" class="resultado-busca"></div>`;
const statusBusca = document.getElementById("status-busca");
const resultadoBusca = document.getElementById("resultado-busca");

function mostrarStatus(el, tipo, texto = "", aoTentar = null) {
  el.innerHTML = "";
  if (!tipo) return;
  const caixa = document.createElement("div");
  caixa.className = "status " + tipo;
  if (tipo === "carregando") caixa.innerHTML = '<span class="spinner"></span>';
  caixa.append(texto);
  if (aoTentar) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = "TENTAR NOVAMENTE";
    b.addEventListener("click", aoTentar);
    caixa.append(b);
  }
  el.appendChild(caixa);
}

async function carregarMais() {
  if (carregando) return;
  carregando = true;
  btnMais.hidden = true;
  mostrarStatus(statusPokedex, "carregando", "Carregando Pokémons...");
  try {
    const { total, pokemons } = await listarPokemons(proximoOffset, POR_PAGINA);
    totalNaApi = total;
    estadoPokemons.push(...pokemons);
    proximoOffset += POR_PAGINA;
    mostrarStatus(statusPokedex, "");
  } catch (erro) {
    console.error(erro);
    mostrarStatus(statusPokedex, "erro", mensagemErro(erro), carregarMais);
  } finally {
    carregando = false;
    btnMais.hidden = estadoPokemons.length === 0 || proximoOffset >= totalNaApi;
    renderizarPokedex();
  }
}

function renderizarBusca() {
  resultadoBusca.innerHTML = "";
  if (pokemonBuscado) resultadoBusca.appendChild(criarCartao(pokemonBuscado));
}

async function buscarPokemon(termo) {
  termo = termo.trim().toLowerCase();
  if (!termo) return;
  const minhaBusca = ++buscaAtual;
  mostrarAba("aba-buscar");
  pokemonBuscado = null;
  renderizarBusca();
  mostrarStatus(statusBusca, "carregando", `Buscando "${termo}"...`);
  try {
    const p = await obterPokemon(termo);
    if (minhaBusca !== buscaAtual) return;
    pokemonBuscado = p;
    mostrarStatus(statusBusca, "");
  } catch (erro) {
    if (minhaBusca !== buscaAtual) return;
    mostrarStatus(statusBusca, "erro", mensagemErro(erro));
  }
  renderizarBusca();
}

document.getElementById("campo-busca").addEventListener("keydown", (e) => {
  if (e.key === "Enter") buscarPokemon(e.target.value);
});

document.getElementById("btn-aleatorio").addEventListener("click", () => {
  buscarPokemon(String(Math.floor(Math.random() * LIMITE_POKEMONS) + 1));
});

resultadoBusca.addEventListener("click", (e) => {
  const botao = e.target.closest("[data-captura-id]");
  if (!botao) return;
  const id = Number(botao.dataset.capturaId);
  if (estaCapturado(id)) return pedirRemocao(id);
  capturar(id);
  renderizarPokedex();
  renderizarColecao();
});

async function iniciar() {
  localStorage.removeItem("pokedexData"); 
  carregarColecao();
  renderizarTipos();
  carregarMais();
  // baixa os capturados que não estão na primeira página
  await Promise.allSettled(colecao.map((id) => obterPokemon(id)));
   renderizarColecao();
  renderizarPokedex();
}
iniciar();