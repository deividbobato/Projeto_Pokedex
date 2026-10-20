// array que recebe os JSON da API para os pokemons
const listaPokemons = [
    {
        "id": 384,
        "name": "rayquaza",
        "types": ["Dragon", "Flying"],
        "height": 7.0,
        "weight": 206.5,
        "category": "Sky High",
        "abilities": ["Air Lock"],
        "weakness": ["Ice", "Rock", "Dragon", "Fairy"],
        "resistances": ["Fire", "Water", "Grass", "Fighting", "Bug"],
        "stats": {
            "hp": 105,
            "attack": 150,
            "defense": 90,
            "specialAttack": 150,
            "specialDefense": 90,
            "speed": 95,
            "total": 680
        }
    }, //  separando o Rayquaza do Mew
    {
        "id": 151,
        "name": "mew",
        "types": ["Psychic"],
        "height": 0.4,
        "weight": 4.0,
        "category": "New Species",
        "abilities": ["Synchronize"],
        "weakness": ["Bug", "Ghost", "Dark"],
        "resistances": [],
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 100,
            "total": 600
        }
    }, // separando o Mew do Charmander
    {
        "id": 4,
        "name": "charmander",
        "types": ["Fire"],
        "height": 0.6,
        "weight": 8.5,
        "category": "Lizard",
        "abilities": ["Blaze"],
        "weakness": ["Water", "Ground", "Rock"],
        "resistances": ["Grass", "Bug", "Fairy"],
        "stats": {
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "specialAttack": 60,
            "specialDefense": 50,
            "speed": 65,
            "total": 309
        }
    }
];

console.log(listaPokemons);

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

    // Verifica se o login e a senha estão corretos
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
        window.location.href = "index.html";
    }, 1000);
});