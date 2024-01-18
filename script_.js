document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
document.addEventListener('DOMContentLoaded', function () {
    // Adiciona tratamento de clique aos botões de alternância
    document.querySelector(".m-up").addEventListener('click', function () {
        document.querySelector(".cont").classList.add("s-up");
    });

    document.querySelector(".m-in").addEventListener('click', function () {
        document.querySelector(".cont").classList.remove("s-up");
    });

    // Adiciona tratamento de clique ao botão de cadastro
    document.querySelector(".cadastro-btn").addEventListener('click', function () {
        cadastrarUsuario();
    });

    // Adiciona tratamento de clique ao botão de login
    document.querySelector(".login-btn").addEventListener('click', function () {
        realizarLogin();
    });
});

// Função para cadastrar um novo usuário
function cadastrarUsuario() {
    var novoUsuario = {
        nome: document.getElementById("cadastroNome").value,
        email: document.getElementById("cadastroEmail").value,
        senha: document.getElementById("cadastroSenha").value
    };

    // Recupera usuários do Local Storage
    var usuariosArmazenados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o e-mail já está cadastrado
    var usuarioExistente = usuariosArmazenados.find(function (usuario) {
        return usuario.email === novoUsuario.email;
    });

    if (usuarioExistente) {
        alert('Este e-mail já está cadastrado. Tente fazer login.');
    } else {
        // Adiciona o novo usuário à lista
        usuariosArmazenados.push(novoUsuario);

        // Atualiza o Local Storage com a nova lista de usuários
        localStorage.setItem('usuarios', JSON.stringify(usuariosArmazenados));

        alert('Cadastro realizado com sucesso! Faça o login agora.');
    }
}

// Função para realizar o login
function realizarLogin() {
    var loginEmail = document.getElementById("loginEmail").value;
    var loginSenha = document.getElementById("loginSenha").value;

    // Recupera usuários do Local Storage
    var usuariosArmazenados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se há um usuário com o email e senha fornecidos
    var usuarioLogado = usuariosArmazenados.find(function (usuario) {
        return usuario.email === loginEmail && usuario.senha === loginSenha;
    });

    if (usuarioLogado) {
        alert('Login bem-sucedido!');
        // Redireciona para a página desejada após o login
        // window.location.href = "buscador.html";
        window.location.href = "index.html";
    } else {
        alert('Usuário ou senha incorretos.');
    }
}