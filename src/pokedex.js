//logica pokedex
//logica pokedex
let estadoPokemons = [];
let tipoAtivo = 'Todos';
let ordemAtiva = 'numero';
let termoBusca = '';
let abaAtual = 'aba-pokedex';
const CHAVE_TEMA = 'pokedexTema';
let qtdAnteriorTopo = null;
const ICONE_POKEBOLA = `
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
       stroke="currentColor" stroke-width="2" aria-hidden="true">
    <circle cx="12" cy="12" r="9"/>
    <path d="M3 12h18"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`;

let colecao = [];
const CHAVE_COLECAO = 'pokedexColecao';

const TIPOS = [
  'Todos',
  'Fire',
  'Water',
  'Grass',
  'Electric',
  'Psychic',
  'Ice',
  'Dragon',
  'Dark',
  'Normal',
  'Fighting',
  'Poison',
  'Ground',
  'Flying',
  'Bug',
  'Rock',
  'Ghost',
  'Steel',
  'Fairy',
];

const COR_TIPO = {
  Grass: '#3a9a4f',
  Poison: '#a050c8',
  Fire: '#f05a28',
  Water: '#3a86e0',
  Electric: '#e8b800',
  Psychic: '#ea5a9a',
  Ice: '#5bc8d8',
  Dragon: '#6a4cd8',
  Dark: '#4a4458',
  Normal: '#8a8a7a',
  Fighting: '#c03028',
  Ground: '#c8a040',
  Flying: '#7a90e0',
  Bug: '#8ab020',
  Rock: '#a8903a',
  Ghost: '#6a50a0',
  Steel: '#8a9aaa',
  Fairy: '#e888b8',
};

function corDoTipo(pokemon) {
  return COR_TIPO[pokemon.types[0]] || '#888';
}

function nomeBonito(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1);
}

function formatarNumero(id) {
  return '#' + String(id).padStart(3, '0');
}

function corHp(hp) {
  if (hp < 50) return '#c00000';
  if (hp < 80) return '#d4a017';
  return '#2e9e4f';
}

function htmlTipos(pokemon) {
  return pokemon.types
    .map(
      (t) =>
        `<span class="badge-tipo" style="--cor:${
          COR_TIPO[t] || '#888'
        }">${t}</span>`
    )
    .join('');
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
    console.error('Não foi possível salvar a coleção:', erro);
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
  const termo = termoBusca.trim().toLowerCase().replace('#', '');
  if (!termo) return true;
  if (/^\d+$/.test(termo)) return p.id === Number(termo);
  return p.name.toLowerCase().includes(termo);
}

function obterListaFiltrada(comTermo = false) {
  let lista = estadoPokemons.filter(
    (p) => tipoAtivo === 'Todos' || p.types.includes(tipoAtivo)
  );
  if (comTermo) lista = lista.filter(combinaComBusca);

  if (ordemAtiva === 'numero') lista.sort((a, b) => a.id - b.id);
  if (ordemAtiva === 'nome') lista.sort((a, b) => a.name.localeCompare(b.name));
  if (ordemAtiva === 'hp') lista.sort((a, b) => b.stats.hp - a.stats.hp);

  return lista;
}
function renderizarTipos() {
  const container = document.getElementById('lista-tipos');
  container.innerHTML = '';
  const chips = document.getElementById('busca-chips');

  chips.innerHTML = '';
  TIPOS.forEach((tipo) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (tipo === tipoAtivo ? ' ativo' : '');
    chip.dataset.tipo = tipo;
    chip.textContent = tipo;
    chips.appendChild(chip);
  });

  TIPOS.forEach((tipo) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'opcao' + (tipo === tipoAtivo ? ' ativo' : '');
    botao.dataset.tipo = tipo;
    botao.textContent = (tipo === 'Todos' ? '◈ ' : '') + tipo;
    container.appendChild(botao);
  });
}

function renderizarColecao() {
  renderizarBusca();
  const lista = document.getElementById('lista-colecao');
  const capturados = colecao.map((id) => cachePokemons.get(id)).filter(Boolean);

  document.getElementById(
    'contador-colecao'
  ).textContent = `${capturados.length} CAPTURADOS`;

  const badge = document.getElementById('badge-colecao');
  badge.textContent = capturados.length;
  badge.hidden = capturados.length === 0;
  atualizarPokebolaTopo(capturados.length);

  lista.innerHTML = '';

  if (capturados.length === 0) {
    lista.innerHTML = `
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
    const item = document.createElement('div');
    item.className = 'item-colecao';
    item.style.setProperty('--cor', corDoTipo(p));

    item.innerHTML = `
      <img class="item-img" src="${p.image}" alt="${p.name}">
      <div class="item-info">
        <span class="item-numero">${formatarNumero(p.id)}</span>
        <h3 class="item-nome">${nomeBonito(p.name)}</h3>
        <div class="cartao-tipos">${htmlTipos(p)}</div>
         <button
    type="button"
    class="btn-ver-detalhes"
    data-detalhes-id="${p.id}"
  >
    VER DETALHES
  </button>
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

document.getElementById('lista-colecao').addEventListener('click', (e) => {
  const botao = e.target.closest('[data-remover-id]');
  if (!botao) return;
  pedirRemocao(Number(botao.dataset.removerId));
});

let idParaRemover = null;

function pedirRemocao(id) {
  const p = cachePokemons.get(id);
  if (!p) return;

  idParaRemover = id;
  document.getElementById('modal-img').src = p.image;
  document.getElementById('modal-img').alt = p.name;
  document.getElementById(
    'modal-texto'
  ).textContent = `Deseja remover ${nomeBonito(p.name)} da sua coleção?`;
  document.getElementById('modal-remover').hidden = false;
}

function fecharModal() {
  idParaRemover = null;
  document.getElementById('modal-remover').hidden = true;
}

document.getElementById('modal-nao').addEventListener('click', fecharModal);

document.getElementById('modal-sim').addEventListener('click', () => {
  if (idParaRemover !== null) {
    remover(idParaRemover);
    atualizarTudo();
  }
  fecharModal();
});

function criarCartao(pokemon) {
  const hp = pokemon.stats.hp;
  const cartao = document.createElement('div');
  cartao.className = 'cartao-pokemon';
  cartao.style.setProperty('--cor', corDoTipo(pokemon));

  cartao.innerHTML = `
    <span class="cartao-numero">${formatarNumero(pokemon.id)}</span>

    <button
      type="button"
      class="btn-captura ${estaCapturado(pokemon.id) ? 'capturado' : ''}"
      data-captura-id="${pokemon.id}"
      aria-label="capturar Pokémon"
    >
      <svg viewBox="0 0 24 24" width="24" height="24">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M3 12h18" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
      </svg>

    </button>
    ${htmlBotaoEquipe(pokemon.id)}

    <img class="cartao-img" src="${pokemon.image}" alt="${
    pokemon.name
  }" loading="lazy">
    <h3 class="cartao-nome">${nomeBonito(pokemon.name)}</h3>
    <div class="cartao-tipos">${htmlTipos(pokemon)}</div>

    <div class="cartao-hp"><span>HP</span><span>${hp}</span></div>
    <div class="barra">
      <div class="barra-preenchida"
        style="width:${Math.min((hp / 255) * 100, 100)}%; background:${corHp(
    hp
  )}"></div>
    </div>

    <div class="cartao-medidas">
      <span>${pokemon.height.toFixed(1)}m</span>
      <span>${pokemon.weight.toFixed(1)}kg</span>
    </div>

    <button
  type="button"
  class="btn-ver-detalhes"
  data-detalhes-id="${pokemon.id}"
>
  VER DETALHES
</button>
  `;
  return cartao;
}

function renderizarPokedex() {
  const container = document.getElementById('grid-cartoes');
  const lista = obterListaFiltrada();
  atualizarContador();

  container.innerHTML = '';

  // só mostra "nenhum encontrado" depois que algo já foi carregado
  if (lista.length === 0 && estadoPokemons.length > 0) {
    container.innerHTML = '<p>Nenhum Pokémon encontrado.</p>';
    return;
  }

  lista.forEach((pokemon) => container.appendChild(criarCartao(pokemon)));
}

function tratarCliqueCaptura(evento) {
  const botao = evento.target.closest('[data-captura-id]');
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
  .getElementById('grid-cartoes')
  .addEventListener('click', tratarCliqueCaptura);
document
  .getElementById('lista-busca')
  .addEventListener('click', tratarCliqueCaptura);

function escolherTipo(e) {
  const botao = e.target.closest('[data-tipo]');
  if (!botao) return;
  tipoAtivo = botao.dataset.tipo;
  renderizarTipos();
  renderizarPokedex();
  renderizarBusca();
}

document.getElementById('lista-tipos').addEventListener('click', escolherTipo);
document.getElementById('busca-chips').addEventListener('click', escolherTipo);

document.getElementById('lista-ordem').addEventListener('click', (e) => {
  const botao = e.target.closest('[data-ordem]');
  if (!botao) return;
  ordemAtiva = botao.dataset.ordem;
  document
    .querySelectorAll('#lista-ordem .opcao')
    .forEach((b) => b.classList.toggle('ativo', b === botao));
  renderizarPokedex();
  renderizarBusca();
});

const abas = document.querySelectorAll('.aba');
const paineis = document.querySelectorAll('.painel');

function posicionarFiltros(idPainel) {
  const layout = document.querySelector(`#${idPainel} .layout-pokedex`);
  if (!layout) return;
  layout.prepend(document.getElementById('filtros'));
  layout.prepend(document.getElementById('btn-filtros'));
}

function mostrarAba(idAba) {
  const idPainel = idAba.replace('aba-', 'painel-');
  abaAtual = idAba;

  document.querySelectorAll('.aba-rodape').forEach((botao) => {
    botao.classList.toggle(
      'ativa',
      botao.dataset.aba === idAba.replace('aba-', '')
    );
  });
  abas.forEach((aba) => {
    const ativa = aba.id === idAba;
    aba.setAttribute('aria-selected', ativa);
    aba.tabIndex = ativa ? 0 : -1;
  });

  paineis.forEach((painel) => {
    if (painel.id === idPainel) {
      painel.hidden = false;
      painel.style.display = 'block';
    } else {
      painel.hidden = true;
      painel.style.display = 'none';
    }
  });

  posicionarFiltros(idPainel);
  atualizarContador();
}

abas.forEach((aba) => {
  aba.addEventListener('click', () => mostrarAba(aba.id));
});

const abasRodape = document.querySelectorAll('.aba-rodape');

abasRodape.forEach((botao) => {
  botao.addEventListener('click', () => {
    const idAba = 'aba-' + botao.dataset.aba;
    mostrarAba(idAba);
  });
});

const layouts = document.querySelectorAll('.layout-pokedex');
const btnFiltros = document.getElementById('btn-filtros');
const CHAVE_FILTROS = 'pokedexFiltrosFechados';

function aplicarEstadoFiltros(fechado) {
  layouts.forEach((l) => l.classList.toggle('filtros-fechados', fechado));
  btnFiltros.setAttribute('aria-expanded', String(!fechado));
  btnFiltros.setAttribute(
    'aria-label',
    fechado ? 'Abrir filtros' : 'Fechar filtros'
  );
}

btnFiltros.addEventListener('click', () => {
  const fechado = !layouts[0].classList.contains('filtros-fechados');
  aplicarEstadoFiltros(fechado);
  try {
    localStorage.setItem(CHAVE_FILTROS, fechado);
  } catch (erro) {
    console.error('Não foi possível salvar o estado dos filtros:', erro);
  }
});

try {
  aplicarEstadoFiltros(localStorage.getItem(CHAVE_FILTROS) === 'true');
} catch (erro) {
  aplicarEstadoFiltros(false);
}

// ============================================================
// ABA EQUIPE
// ============================================================

const CHAVE_EQUIPE = 'pokedexEquipe';
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

    equipe = salvo
      .filter(
        (id, posicao) =>
          Number.isInteger(id) &&
          id >= 1 &&
          id <= LIMITE_POKEMONS &&
          salvo.indexOf(id) === posicao
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
    console.error('Não foi possível salvar a equipe:', erro);
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
  if (!cachePokemons.has(id)) return false;

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
  const lista = document.getElementById('lista-equipe');
  const aviso = document.getElementById('aviso-equipe');
  const botaoAdicionar = document.getElementById('btn-equipe-adicionar');

  const membros = equipe.map((id) => cachePokemons.get(id)).filter(Boolean);

  document.getElementById(
    'contador-equipe'
  ).textContent = `${membros.length}/${LIMITE_EQUIPE} POKÉMON`;

  // Com a equipe cheia, o botao fica bloqueado e o aviso aparece
  botaoAdicionar.disabled = equipeCheia();
  aviso.hidden = !equipeCheia();
  aviso.textContent = textoLimiteEquipe();

  lista.innerHTML = '';

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
    const cartao = document.createElement('div');
    cartao.className = 'cartao-pokemon cartao-equipe';
    cartao.style.setProperty('--cor', corDoTipo(p));

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
      <button
  type="button"
  class="btn-ver-detalhes"
  data-detalhes-id="${p.id}"
>
  VER DETALHES
</button>
    `;
    lista.appendChild(cartao);
  });
  const slotsVazios = LIMITE_EQUIPE - membros.length;
  for (let i = 0; i < slotsVazios; i++) {
    const slot = document.createElement('button');
    slot.type = 'button';
    slot.className = 'slot-equipe-vazio';
    slot.setAttribute('aria-label', 'Adicionar Pokémon na equipe');

    slot.innerHTML = `
      <span class="slot-equipe-mais" aria-hidden="true">+</span>
      <span class="slot-equipe-rotulo">SLOT VAZIO</span>
    `;

    slot.addEventListener('click', abrirSeletorEquipe);
    lista.appendChild(slot);
  }
}
document.getElementById('lista-equipe').addEventListener('click', (e) => {
  const botao = e.target.closest('[data-equipe-remover-id]');
  if (!botao) return;

  removerDaEquipe(Number(botao.dataset.equipeRemoverId));
  renderizarEquipe();
  // Se o seletor estiver aberto, ele tambem precisa refletir a remocao
  renderizarSeletorEquipe();
});

// ---------- Seletor de Pokemon (painel para adicionar) ----------

const modalEquipe = document.getElementById('modal-equipe');
const campoBuscaEquipe = document.getElementById('seletor-busca');

function renderizarSeletorEquipe() {
  const lista = document.getElementById('seletor-lista');
  const aviso = document.getElementById('seletor-aviso');
  const termo = campoBuscaEquipe.value.trim().toLowerCase();

  aviso.hidden = !equipeCheia();
  aviso.textContent = textoLimiteEquipe();

  // Pesquisa por nome ou por numero, como o campo de busca do cabecalho
  const encontrados = estadoPokemons
    .filter(
      (p) =>
        p.name.toLowerCase().includes(termo) ||
        formatarNumero(p.id).includes(termo) ||
        String(p.id) === termo
    )
    .sort((a, b) => a.id - b.id);

  lista.innerHTML = '';

  if (encontrados.length === 0) {
    lista.innerHTML = '<p class="vazio">Nenhum Pokémon encontrado.</p>';
    return;
  }

  // Usa as mesmas classes do item da aba Colecao
  encontrados.forEach((p) => {
    const naEquipe = estaNaEquipe(p.id);
    const item = document.createElement('div');
    item.className = 'item-colecao';
    item.style.setProperty('--cor', corDoTipo(p));

    item.innerHTML = `
      <img class="item-img" src="${p.image}" alt="${p.name}">
      <div class="item-info">
        <span class="item-numero">${formatarNumero(p.id)}</span>
        <h3 class="item-nome">${nomeBonito(p.name)}</h3>
        <div class="cartao-tipos">${htmlTipos(p)}</div>
      </div>
      <button type="button" class="btn-seletor-adicionar"
              data-equipe-adicionar-id="${p.id}"
              ${naEquipe || equipeCheia() ? 'disabled' : ''}>
        ${naEquipe ? 'NA EQUIPE' : 'ADICIONAR'}
      </button>
    `;
    lista.appendChild(item);
  });
}

function abrirSeletorEquipe() {
  if (equipeCheia()) return;
  campoBuscaEquipe.value = '';
  renderizarSeletorEquipe();
  modalEquipe.hidden = false;
  campoBuscaEquipe.focus();
}

function fecharSeletorEquipe() {
  modalEquipe.hidden = true;
  // Devolve o foco ao botao que abriu o seletor
  document.getElementById('btn-equipe-adicionar').focus();
}

document
  .getElementById('btn-equipe-adicionar')
  .addEventListener('click', abrirSeletorEquipe);

document
  .getElementById('seletor-fechar')
  .addEventListener('click', fecharSeletorEquipe);

// Clicar no fundo escuro (fora da caixa) tambem fecha o seletor
modalEquipe.addEventListener('click', (e) => {
  if (e.target === modalEquipe) fecharSeletorEquipe();
});

campoBuscaEquipe.addEventListener('input', renderizarSeletorEquipe);

document.getElementById('seletor-lista').addEventListener('click', (e) => {
  const botao = e.target.closest('[data-equipe-adicionar-id]');
  if (!botao) return;

  if (adicionarNaEquipe(Number(botao.dataset.equipeAdicionarId))) {
    renderizarEquipe();
    // Atualiza os botoes (NA EQUIPE) e o aviso de limite no seletor
    renderizarSeletorEquipe();
  }
});

function atualizarContador() {
  const naBusca = abaAtual === 'aba-buscar';
  const lista = obterListaFiltrada(naBusca);
  const elementoContador = document.getElementById('contador');
  elementoContador.textContent =
    lista.length + ' / ' + estadoPokemons.length + ' Pokémons';
}

function renderizarBusca() {
  const lista = document.getElementById('lista-busca');
  const resultados = obterListaFiltrada(true);

  atualizarContador();
  lista.innerHTML = '';

  if (resultados.length === 0) {
    lista.innerHTML = '<p class="vazio">Nenhum Pokémon encontrado.</p>';
    return;
  }

  resultados.forEach((p) => {
    const item = document.createElement('div');
    item.className = 'resultado';
    item.style.setProperty('--cor', corDoTipo(p));

    item.innerHTML = `
      <img class="resultado-img" src="${p.image}" alt="${p.name}">
      <div class="resultado-info">
        <span class="resultado-numero">${formatarNumero(p.id)}</span>
        <h3 class="resultado-nome">${nomeBonito(p.name)}</h3>
        <div class="cartao-tipos">${htmlTipos(p)}</div>
        <button
    type="button"
    class="btn-ver-detalhes"
    data-detalhes-id="${p.id}"
  >
    VER DETALHES
  </button>
      </div>
      <div class="resultado-stats">
        <span>HP ${p.stats.hp}</span>
        <span>${p.height.toFixed(1)}m</span>
      </div>
      <button type="button"
              class="btn-captura ${estaCapturado(p.id) ? 'capturado' : ''}"
              data-captura-id="${p.id}"
              aria-label="capturar Pokémon">
        ${ICONE_POKEBOLA}
      </button>

      ${htmlBotaoEquipe(p.id)}
    `;
    lista.appendChild(item);
  });
}

function atualizarTudo() {
  renderizarPokedex();
  renderizarColecao(); // também atualiza a pokébola do topo
}

const campoBusca = document.getElementById('campo-busca');
const campoBuscaPainel = document.getElementById('campo-busca-painel');

function aplicarBusca(texto, origem) {
  termoBusca = texto;
  if (origem !== campoBusca) campoBusca.value = texto;
  if (origem !== campoBuscaPainel) campoBuscaPainel.value = texto;
  if (texto.trim() && abaAtual !== 'aba-buscar') mostrarAba('aba-buscar');

  renderizarBusca();
  agendarBuscaApi(texto);
}
campoBusca.addEventListener('input', () =>
  aplicarBusca(campoBusca.value, campoBusca)
);
campoBuscaPainel.addEventListener('input', () =>
  aplicarBusca(campoBuscaPainel.value, campoBuscaPainel)
);

function atualizarPokebolaTopo(qtd) {
  const btn = document.getElementById('btn-colecao-topo');
  const badge = document.getElementById('badge-topo');

  badge.textContent = qtd;
  badge.hidden = qtd === 0;
  btn.classList.toggle('tem-itens', qtd > 0);

  if (qtdAnteriorTopo !== null && qtd > qtdAnteriorTopo) {
    btn.classList.remove('pulo');
    void btn.offsetWidth;
    btn.classList.add('pulo');
  }

  qtdAnteriorTopo = qtd;
}

document
  .getElementById('btn-colecao-topo')
  .addEventListener('click', () => mostrarAba('aba-colecao'));

const btnTema = document.getElementById('btn-tema');

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
  const escuro = tema === 'escuro';

  if (escuro) {
    document.documentElement.setAttribute('data-tema', 'escuro');
  } else {
    document.documentElement.removeAttribute('data-tema');
  }

  btnTema.innerHTML = escuro ? ICONE_SOL : ICONE_LUA;
  btnTema.title = escuro ? 'Modo claro' : 'Modo noturno';
  btnTema.setAttribute('aria-label', btnTema.title);
}

btnTema.addEventListener('click', () => {
  const novo =
    document.documentElement.getAttribute('data-tema') === 'escuro'
      ? 'claro'
      : 'escuro';
  aplicarTema(novo);
  try {
    localStorage.setItem(CHAVE_TEMA, novo);
  } catch (erro) {
    console.error('Não foi possível salvar o tema:', erro);
  }
});

try {
  aplicarTema(localStorage.getItem(CHAVE_TEMA) || 'claro');
} catch (erro) {
  aplicarTema('claro');
}

abasRodape.forEach((botao) => {
  botao.addEventListener('click', () => {
    const nomeAba = botao.dataset.aba;

    mostrarAba('aba-' + nomeAba);

    abasRodape.forEach((aba) => {
      aba.classList.remove('ativa');
    });

    botao.classList.add('ativa');
  });
});

// ===== PokéAPI: loading, erros, busca =====
const POR_PAGINA = 20;
let proximoOffset = 0;
let totalNaApi = 0;
let carregando = false;
let buscaAtual = 0;
let timerBusca = null;

const conteudoPokedex = document.querySelector('.conteudo-pokedex');
const statusPokedex = document.createElement('div');
statusPokedex.setAttribute('role', 'status');
conteudoPokedex.prepend(statusPokedex);

const btnMais = document.createElement('button');
btnMais.type = 'button';
btnMais.className = 'btn-mais';
btnMais.textContent = 'CARREGAR MAIS';
btnMais.hidden = true;
btnMais.addEventListener('click', carregarMais);
conteudoPokedex.appendChild(btnMais);

// status da busca, logo acima da lista de resultados do seu colega
const statusBusca = document.createElement('div');
statusBusca.setAttribute('role', 'status');
document.getElementById('lista-busca').before(statusBusca);

function mostrarStatus(el, tipo, texto = '', aoTentar = null) {
  el.innerHTML = '';
  if (!tipo) return;
  const caixa = document.createElement('div');
  caixa.className = 'status ' + tipo;
  if (tipo === 'carregando') caixa.innerHTML = '<span class="spinner"></span>';
  caixa.append(texto);
  if (aoTentar) {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = 'TENTAR NOVAMENTE';
    b.addEventListener('click', aoTentar);
    caixa.append(b);
  }
  el.appendChild(caixa);
}

// evita duplicar um Pokémon que já veio por busca ou paginação
function adicionarNaLista(p) {
  if (!estadoPokemons.some((x) => x.id === p.id)) estadoPokemons.push(p);
}

async function carregarMais() {
  if (carregando) return;
  carregando = true;
  btnMais.hidden = true;
  mostrarStatus(statusPokedex, 'carregando', 'Carregando Pokémons...');
  try {
    const { total, pokemons } = await listarPokemons(proximoOffset, POR_PAGINA);
    totalNaApi = total;
    pokemons.forEach(adicionarNaLista);
    proximoOffset += POR_PAGINA;
    mostrarStatus(statusPokedex, '');
  } catch (erro) {
    console.error(erro);
    mostrarStatus(statusPokedex, 'erro', mensagemErro(erro), carregarMais);
  } finally {
    carregando = false;
    btnMais.hidden = estadoPokemons.length === 0 || proximoOffset >= totalNaApi;
    atualizarTudo();
  }
}

// Espera o usuário parar de digitar antes de consultar a API
function agendarBuscaApi(texto) {
  clearTimeout(timerBusca);
  timerBusca = setTimeout(() => buscarNaApi(texto), 500);
}

// Se o nome/número exato ainda não foi carregado, busca na PokéAPI
async function buscarNaApi(texto) {
  const minha = ++buscaAtual; // ignora respostas antigas
  const termo = texto.trim().toLowerCase().replace(/^#/, '');

  const jaTem = estadoPokemons.some(
    (p) => p.name === termo || String(p.id) === termo
  );
  if (!termo || jaTem) {
    mostrarStatus(statusBusca, '');
    return;
  }
  if (!/^\d+$/.test(termo) && termo.length < 3) {
    mostrarStatus(statusBusca, '');
    return;
  }

  mostrarStatus(statusBusca, 'carregando', `Buscando "${termo}" na PokéAPI...`);
  try {
    const p = await obterPokemon(termo);
    if (minha !== buscaAtual) return;
    adicionarNaLista(p);
    mostrarStatus(statusBusca, '');
    atualizarTudo();
  } catch (erro) {
    if (minha !== buscaAtual) return;
    // nome parcial (ex.: "pika") dá 404 na API, mas pode ter resultado local
    const naoAchou = erro.message === 'Pokémon não encontrado.';
    if (naoAchou && obterListaFiltrada(true).length > 0) {
      mostrarStatus(statusBusca, '');
    } else {
      mostrarStatus(statusBusca, 'erro', mensagemErro(erro));
    }
  }
}

async function iniciar() {
  localStorage.removeItem('pokedexData'); // dados fixos antigos
  carregarColecao();
  carregarEquipe();
  renderizarTipos();
  carregarMais();
  // baixa capturados e equipe que não estão na primeira página
  await Promise.allSettled(
    [...colecao, ...equipe].map((id) => obterPokemon(id))
  );
  atualizarTudo();
  renderizarEquipe();
}
iniciar();

// Icone de pessoas usado no botao de equipe
const ICONE_EQUIPE = `
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
       stroke="currentColor" stroke-width="2.5"
       stroke-linecap="round" aria-hidden="true">
    <path d="M12 5v14M5 12h14"/>
  </svg>`;

// Mostra o resultado da acao (entrou, saiu ou recusado pelo verificador)
const toastEquipe = document.createElement('div');
toastEquipe.className = 'toast-equipe';
toastEquipe.setAttribute('role', 'status');
toastEquipe.hidden = true;
document.body.appendChild(toastEquipe);

let timerToastEquipe = null;

function mostrarToastEquipe(texto, tipo) {
  toastEquipe.textContent = texto;
  toastEquipe.className = 'toast-equipe ' + tipo; // tipo: "ok" ou "aviso"
  toastEquipe.hidden = false;

  clearTimeout(timerToastEquipe);
  timerToastEquipe = setTimeout(() => {
    toastEquipe.hidden = true;
  }, 2600);
}

// ---------- Botao desenhado dentro dos cartoes ----------
// HTML do botao redondo; o estado (na equipe ou nao) vem do verificador
function htmlBotaoEquipe(id) {
  const naEquipe = estaNaEquipe(id);
  const rotulo = naEquipe ? 'Remover da equipe' : 'Adicionar à equipe';

  return `
    <button type="button"
            class="btn-equipe-card ${naEquipe ? 'na-equipe' : ''}"
            data-equipe-toggle-id="${id}"
            aria-label="${rotulo}" title="${rotulo}">
      ${ICONE_EQUIPE}
    </button>`;
}

// Atualiza, sem recriar os cartoes, os botoes de equipe ja desenhados
function atualizarBotoesEquipe() {
  document.querySelectorAll('.btn-equipe-card').forEach((botao) => {
    const id = Number(botao.dataset.equipeToggleId);
    const naEquipe = estaNaEquipe(id);
    const rotulo = naEquipe ? 'Remover da equipe' : 'Adicionar à equipe';

    botao.classList.toggle('na-equipe', naEquipe);
    botao.setAttribute('aria-label', rotulo);
    botao.title = rotulo;
  });
}

// Redesenha tudo que depende da equipe
function atualizarEquipeTudo() {
  renderizarEquipe();
  renderizarSeletorEquipe();
  atualizarBotoesEquipe();
}

// ---------- Tela de confirmacao para remover da equipe ----------
// Mesmo funcionamento da tela de remover da colecao

let idParaRemoverEquipe = null;

function pedirRemocaoEquipe(id) {
  const p = cachePokemons.get(id);
  if (!p) return;

  idParaRemoverEquipe = id;
  const imagem = document.getElementById('modal-equipe-img');
  imagem.src = p.image;
  imagem.alt = p.name;
  document.getElementById(
    'modal-equipe-texto'
  ).textContent = `Deseja remover ${nomeBonito(p.name)} da sua equipe?`;
  document.getElementById('modal-remover-equipe').hidden = false;
  document.getElementById('modal-equipe-nao').focus();
}

function fecharModalRemoverEquipe() {
  idParaRemoverEquipe = null;
  document.getElementById('modal-remover-equipe').hidden = true;
}

document
  .getElementById('modal-equipe-nao')
  .addEventListener('click', fecharModalRemoverEquipe);

document.getElementById('modal-equipe-sim').addEventListener('click', () => {
  if (idParaRemoverEquipe !== null) {
    const p = cachePokemons.get(idParaRemoverEquipe);
    removerDaEquipe(idParaRemoverEquipe);
    atualizarEquipeTudo();
    if (p) mostrarToastEquipe(`${nomeBonito(p.name)} saiu da equipe.`, 'ok');
  }
  fecharModalRemoverEquipe();
});

// ---------- Clique no botao de equipe ----------
function tratarCliqueEquipe(evento) {
  const botao = evento.target.closest('[data-equipe-toggle-id]');
  if (!botao) return;
  const id = Number(botao.dataset.equipeToggleId);

  // Ja esta na equipe: pede confirmacao antes de remover
  if (estaNaEquipe(id)) {
    pedirRemocaoEquipe(id);
    return;
  }

  // Equipe cheia: o verificador impede passar de 6
  if (equipeCheia()) {
    mostrarToastEquipe(textoLimiteEquipe(), 'aviso');
    return;
  }

  // adicionarNaEquipe() confere limite, repeticao e se o Pokemon existe
  if (adicionarNaEquipe(id)) {
    const p = cachePokemons.get(id);
    mostrarToastEquipe(
      `${nomeBonito(p.name)} entrou na equipe! (${
        equipe.length
      }/${LIMITE_EQUIPE})`,
      'ok'
    );
    atualizarEquipeTudo();
  } else {
    mostrarToastEquipe('Não foi possível adicionar este Pokémon.', 'aviso');
  }
}

document
  .getElementById('grid-cartoes')
  .addEventListener('click', tratarCliqueEquipe);
document
  .getElementById('lista-busca')
  .addEventListener('click', tratarCliqueEquipe);
