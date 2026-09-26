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

const tempoElemento = document.querySelector("#tempo");
const iniciarTimer = document.querySelector("#iniciar-timer");
const pausarTimer = document.querySelector("#pausar-timer");
const reiniciarTimer = document.querySelector("#reiniciar-timer");
const mensagemTimer = document.querySelector("#mensagem-timer");

let tempoRestante = 25 * 60;
let intervalo = null;

function atualizarTempo() {
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;

    tempoElemento.textContent =
        `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

iniciarTimer.addEventListener("click", function () {

    if (intervalo !== null) {
        return;
    }

    mensagemTimer.textContent = "Sessão de estudo iniciada.";

    intervalo = setInterval(function () {

        if (tempoRestante > 0) {
            tempoRestante--;
            atualizarTempo();
        } else {
            clearInterval(intervalo);
            intervalo = null;
            mensagemTimer.textContent = "Tempo de estudo finalizado!";
        }

    }, 1000);
});

pausarTimer.addEventListener("click", function () {

    if (intervalo !== null) {
        clearInterval(intervalo);
        intervalo = null;
        mensagemTimer.textContent = "Sessão pausada.";
    }

});

reiniciarTimer.addEventListener("click", function () {

    clearInterval(intervalo);
    intervalo = null;
    tempoRestante = 25 * 60;
    atualizarTempo();
    mensagemTimer.textContent = "";

});