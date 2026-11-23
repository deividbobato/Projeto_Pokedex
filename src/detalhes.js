/*
 * interface de detalhes da Pokédex.
 * depende das funções e dados já definidos em api.js e pokedex.js:
*/

const modalDetalhes = document.getElementById('modal-detalhes');
const conteudoDetalhes = document.getElementById('detalhes-conteudo');
const conteudoEvolucoes = document.getElementById('detalhes-evolucao');
const botaoFecharDetalhes = document.getElementById('detalhes-fechar');
let ultimaAcaoDetalhes = null;
let requisicaoDetalhes = 0;

function criarElementoDetalhes(tag, classe, texto) {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (texto !== undefined) elemento.textContent = String(texto);
  return elemento;
}

function mostrarMensagemDetalhes(destino, mensagem, classe = 'detalhes-aviso') {
  destino.replaceChildren(criarElementoDetalhes('p', classe, mensagem));
}

function criarResumoPokemon(pokemon) {
  const resumo = criarElementoDetalhes('div', 'detalhes-resumo');
  const imagem = criarElementoDetalhes('img', 'detalhes-imagem');
  imagem.src = pokemon.image || '';
  imagem.alt = `Ilustração de ${nomeBonito(pokemon.name)}`;
  resumo.append(imagem);

  const apresentacao = criarElementoDetalhes('div', 'detalhes-apresentacao');
  apresentacao.append(
    criarElementoDetalhes('span', 'detalhes-numero', formatarNumero(pokemon.id)),
    criarElementoDetalhes('h3', 'detalhes-nome', nomeBonito(pokemon.name)),
  );

  const tipos = criarElementoDetalhes('div', 'detalhes-tipos');
  tipos.innerHTML = htmlTipos(pokemon); // helper já existente no projeto
  apresentacao.append(tipos);

  const medidas = criarElementoDetalhes('dl', 'detalhes-medidas');
  const campos = [
    ['Altura', `${Number(pokemon.height).toFixed(1)} m`],
    ['Peso', `${Number(pokemon.weight).toFixed(1)} kg`],
  ];
  campos.forEach(([titulo, valor]) => {
    const grupo = criarElementoDetalhes('div', 'detalhes-medida');
    grupo.append(
      criarElementoDetalhes('dt', '', titulo),
      criarElementoDetalhes('dd', '', valor),
    );
    medidas.append(grupo);
  });
  apresentacao.append(medidas);
  resumo.append(apresentacao);
  return resumo;
}

function criarSecaoHabilidades(pokemon) {
  const secao = criarElementoDetalhes('section', 'detalhes-bloco');
  secao.append(criarElementoDetalhes('h3', 'detalhes-subtitulo', 'HABILIDADES'));
  const lista = criarElementoDetalhes('div', 'detalhes-habilidades');
  for (const habilidade of (pokemon.abilities || [])) {
    lista.append(criarElementoDetalhes('span', 'detalhes-habilidade', habilidade));
  }
  if (!lista.childElementCount) {
    lista.append(criarElementoDetalhes('span', '', 'Não informadas'));
  }
  secao.append(lista);
  return secao;
}

function criarSecaoAtributos(pokemon) {
  const secao = criarElementoDetalhes('section', 'detalhes-bloco');
  secao.append(criarElementoDetalhes('h3', 'detalhes-subtitulo', 'ATRIBUTOS BASE'));
  const lista = criarElementoDetalhes('div', 'detalhes-atributos');
  const atributos = [
    ['HP', 'hp'],
    ['Ataque', 'attack'],
    ['Defesa', 'defense'],
    ['Ataque especial', 'specialAttack'],
    ['Defesa especial', 'specialDefense'],
    ['Velocidade', 'speed'],
  ];
  for (const [rotulo, chave] of atributos) {
    const valor = Number(pokemon.stats?.[chave] || 0);
    const linha = criarElementoDetalhes('div', 'detalhes-atributo');
    const cabecalho = criarElementoDetalhes('div', 'detalhes-atributo-topo');
    cabecalho.append(
      criarElementoDetalhes('span', '', rotulo),
      criarElementoDetalhes('strong', '', valor),
    );
    const trilha = criarElementoDetalhes('div', 'detalhes-trilha');
    const preenchimento = criarElementoDetalhes('div', 'detalhes-preenchimento');
    preenchimento.style.width = `${Math.min(100, Math.max(0, (valor / 255) * 100))}%`;
    trilha.append(preenchimento);
    linha.append(cabecalho, trilha);
    lista.append(linha);
  }
  secao.append(lista);
  secao.append(
    criarElementoDetalhes('p', 'detalhes-total', `Total de atributos: ${pokemon.stats?.total ?? '—'}`),
  );
  return secao;
}

function renderizarDetalhes(pokemon) {
  modalDetalhes.style.setProperty('--detalhes-cor', corDoTipo(pokemon));
  conteudoDetalhes.replaceChildren(
    criarResumoPokemon(pokemon),
    criarSecaoHabilidades(pokemon),
    criarSecaoAtributos(pokemon),
  );
}

function renderizarEvolucoes(evolucoes) {
  const lista = criarElementoDetalhes('div', 'detalhes-lista-evolucoes');
  for (const evolucao of evolucoes) {
    const etapa = criarElementoDetalhes('article', 'detalhes-evolucao');
    if (evolucao.image) {
      const imagem = criarElementoDetalhes('img', 'detalhes-evolucao-img');
      imagem.src = evolucao.image;
      imagem.alt = `Imagem de ${nomeBonito(evolucao.name)}`;
      imagem.loading = 'lazy';
      etapa.append(imagem);
    }
    if (evolucao.id != null) {
      etapa.append(criarElementoDetalhes('span', 'detalhes-evolucao-numero', formatarNumero(evolucao.id)));
    }
    etapa.append(criarElementoDetalhes('strong', 'detalhes-evolucao-nome', nomeBonito(evolucao.name)));
    if (evolucao.condition) {
      etapa.append(criarElementoDetalhes('small', 'detalhes-evolucao-condicao', evolucao.condition));
    }
    lista.append(etapa);
  }
  conteudoEvolucoes.replaceChildren(lista);
}

async function abrirDetalhesPokemon(id, origem) {
  const sequencia = ++requisicaoDetalhes;
  ultimaAcaoDetalhes = origem || document.activeElement;
  modalDetalhes.hidden = false;
  mostrarMensagemDetalhes(conteudoDetalhes, 'Carregando detalhes do Pokémon...');
  mostrarMensagemDetalhes(conteudoEvolucoes, 'Aguardando informações de evolução...');
  botaoFecharDetalhes.focus();

  let pokemon;
  try {
    pokemon = cachePokemons.get(id) || await obterPokemon(id);
    if (sequencia !== requisicaoDetalhes) return;
    renderizarDetalhes(pokemon);
  } catch (erro) {
    if (sequencia !== requisicaoDetalhes) return;
    console.error('Erro ao carregar detalhes:', erro);
    mostrarMensagemDetalhes(conteudoDetalhes, 'Não foi possível carregar os detalhes. Tente novamente.', 'detalhes-erro');
    mostrarMensagemDetalhes(conteudoEvolucoes, 'As evoluções não puderam ser carregadas.', 'detalhes-erro');
    return;
  }

  // evoluções: só é possível buscar se a função estiver definida (integração com a API)
  if (typeof obterEvolucoes !== 'function') {
    mostrarMensagemDetalhes(conteudoEvolucoes, 'Evoluções aguardando integração com a API.');
    return;
  }

  mostrarMensagemDetalhes(conteudoEvolucoes, 'Carregando evoluções...');
  try {
    const evolucoes = await obterEvolucoes(pokemon.id);
    if (sequencia !== requisicaoDetalhes) return;
    if (!Array.isArray(evolucoes)) {
      throw new Error('obterEvolucoes deve retornar um array.');
    }
    if (!evolucoes.length) {
      mostrarMensagemDetalhes(conteudoEvolucoes, 'Este Pokémon não possui evoluções conhecidas.');
    } else {
      renderizarEvolucoes(evolucoes);
    }
  } catch (erro) {
    if (sequencia !== requisicaoDetalhes) return;
    console.error('Erro ao carregar evoluções:', erro);
    mostrarMensagemDetalhes(conteudoEvolucoes, 'Erro ao consultar evoluções. Feche e abra novamente para tentar.', 'detalhes-erro');
  }
}

function fecharDetalhesPokemon() {
  requisicaoDetalhes += 1; // invalida respostas que chegarem depois do fechamento
  modalDetalhes.hidden = true;
  if (ultimaAcaoDetalhes?.isConnected && typeof ultimaAcaoDetalhes.focus === 'function') {
    ultimaAcaoDetalhes.focus();
  }
}

// Delegação de eventos: funciona com cards adicionados por fetch ou filtragem.
document.addEventListener('click', (evento) => {
  const botao = evento.target.closest('[data-detalhes-id]');
  if (!botao) return;
  abrirDetalhesPokemon(Number(botao.dataset.detalhesId), botao);
});

botaoFecharDetalhes.addEventListener('click', fecharDetalhesPokemon);
modalDetalhes.addEventListener('click', (evento) => {
  if (evento.target === modalDetalhes) fecharDetalhesPokemon();
});
document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && !modalDetalhes.hidden) fecharDetalhesPokemon();
});
