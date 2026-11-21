
const campoUsuario = document.getElementById("usuario");
const campoSenha = document.getElementById("senha");
const botaoEntrar = document.getElementById("botao-entrar");
const mensagem = document.getElementById("mensagem");

[campoUsuario, campoSenha].forEach((campo) => {
    campo.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            botaoEntrar.click();
        }
    });
});

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