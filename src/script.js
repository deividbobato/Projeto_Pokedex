
const campoUsuario = document.getElementById("usuario");
const campoSenha = document.getElementById("senha");
const botaoEntrar = document.getElementById("botao-entrar");
const mensagem = document.getElementById("mensagem");

const CHAVE_USUARIO = "pokedex:usuario";
const USUARIO_CORRETO = "user";
const SENHA_CORRETA = "12345";

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;
}

try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE_USUARIO));
    if (salvo) {
        campoUsuario.value = salvo.nome;
        mostrarMensagem("Bem-vindo de volta, " + salvo.nome + "!", "ok");
    }
    
} catch (erro) {
    console.error("Não foi possível ler o LocalStorage:", erro);
}


botaoEntrar.addEventListener("click", function () {
    const nome = campoUsuario.value.trim();
    const senha = campoSenha.value;

    // Verifica se os campos foram preenchidos
    if (nome === "" || senha === "") {
        mostrarMensagem("Preencha usuário e senha.", "erro");
        return;
    }

     //Verifica se o login e a senha estão corretos
   if (nome !== USUARIO_CORRETO || senha !== SENHA_CORRETA) {
        mostrarMensagem("Usuário ou senha incorretos.", "erro");
        return;
    }

    // Salva o usuário no LocalStorage
    try {
        localStorage.setItem(
            CHAVE_USUARIO,
            JSON.stringify({ nome: nome })
        );
    } catch (erro) {
        console.error("Não foi possível salvar:", erro);
        mostrarMensagem("Erro ao salvar o acesso.", "erro");
        return;
    }

   mostrarMensagem("Login feito! Bem-vindo, " + nome + "!", "ok");

// Redireciona para a página principal
setTimeout(function () {
    window.location.href = "pagina_inicio.html";
}, 1000);
});

//logica pokedex
let estadoPokemons = [];

function inicializarEstado() {
    const dadosSalvos = localStorage.getItem("pokedexData");
    if (dadosSalvos) {
        estadoPokemons = JSON.parse(dadosSalvos);
    } else {
        estadoPokemons = listaPokemons;
        localStorage.setItem("pokedexData", JSON.stringify(estadoPokemons));
    }
}

//manipulacao do dom

function renderizarPokedex () {
    const painelPokedex = document.getElementById("painel-pokedex");

    painelPokedex.innerHTML = `
        <h2>Pokedex</h2>
        <p>Lista de Pokemons</p>
        <div id="grid-cartoes" style="display: flex; flex-wrap: wrap; gap: 16px; margin-top: 20px;"></div>
    `;


    const containerCartoes = document.getElementById("grid-cartoes");

    estadoPokemons.forEach(pokemon => {
        const cartao = document.createElement("div");
        cartao.className = "cartao-pokemon";
    
        cartao.innerHTML = `
            <img src="${pokemon.imagem || pokemon.image}" alt="${pokemon.name}" style="width: 120px; height: 120px;">
            <h3 style="margin: 10px 0 5px; font-family: 'PixelTitulo', monospace; font-size: 16px;">#${pokemon.id} - ${pokemon.name.toUpperCase()}</h3>
            <p style="margin: 0; font-size: 14px;"><strong>Tipo:</strong> ${pokemon.types.join(", ")}</p>
        `;

        containerCartoes.appendChild(cartao);
    });
}

inicializarEstado();
renderizarPokedex();
