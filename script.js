const formulario = document.querySelector("#formulario-email");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem-formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (email.value.trim() === "") {
        mensagem.textContent = "Digite seu e-mail.";
        return;
    }

    if (!email.checkValidity()) {
        mensagem.textContent = "Digite um e-mail válido.";
        return;
    }

    mensagem.textContent = "E-mail inscrito com sucesso!";
    email.value = "";
});