const form = document.getElementById("contactForm");
const mensagemStatus = document.getElementById("mensagem-sucesso");

function mostrarMensagem(texto, cor) {
    mensagemStatus.textContent = texto;
    mensagemStatus.style.color = cor;

    setTimeout(function () {
        mensagemStatus.textContent = "";
    }, 3000);
}

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const contato = {
        nome: document.getElementById("name").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        descricao: document.getElementById("descricao").value
    };

    try {
        const response = await fetch("http://localhost:3000/contatos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contato)
        });

        if (!response.ok) {
            throw new Error("Erro ao salvar contato");
        }

        await response.json();

        mostrarMensagem("Contato salvo com sucesso!", "green");
        form.reset();

    } catch (error) {
        mostrarMensagem("Erro ao enviar contato.", "red");
    }
});

const slides = document.querySelectorAll('input[name="slider"]');
let index = 0;

function trocarSlide() {
    slides[index].checked = false;

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    slides[index].checked = true;
}

setInterval(trocarSlide, 3000);