// Variáveis DOM
let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputIdade = document.getElementById("idade");
let mensagem = document.getElementById("mensagem");

// Função chamada no botão
function enviarFormulario() {

    // Validação simples
    if (inputNome.value === "" || inputEmail.value === "" || inputIdade.value === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }

    // Se passou, exibe mensagem
    mensagem.textContent = "Cadastro enviado com sucesso! Logo chegará o cupom de 50% de desconto no seu email";
    mensagem.style.color = "green";

    console.log("Nome:", inputNome.value);
    console.log("Email:", inputEmail.value);
    console.log("Idade:", inputIdade.value);
}
