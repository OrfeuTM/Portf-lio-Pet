document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form-contato");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos antes de enviar.");
                return;
            }

            // Desabilitar o botão enquanto envia para evitar cliques duplos
            const botao = formulario.querySelector("button[type='submit']");
            botao.disabled = true;
            botao.innerText = "Enviando...";

            // Captura os dados do formulário
            const formData = new FormData(formulario);

            // Envia para a API do Web3Forms
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })
            .then(async (response) => {
                if (response.status === 200) {
                    alert(`Obrigado, ${nome}! Seus dados foram enviados diretamente para nossa equipe.`);
                    formulario.reset();
                } else {
                    alert("Ocorreu um erro ao enviar. Por favor, tente novamente.");
                }
            })
            .catch(error => {
                console.error(error);
                alert("Erro de conexão. Verifique sua internet.");
            })
            .finally(() => {
                // Reativa o botão
                botao.disabled = false;
                botao.innerText = "Enviar Mensagem";
            });
        });
    }
});