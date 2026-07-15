// Aguarda o HTML ser totalmente carregado antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona o formulário de contato
    const formulario = document.querySelector("#contato form");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            // Evita que a página recarregue ao enviar o formulário
            evento.preventDefault();

            // Pega os dados dos campos
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // Validação simples (se os campos não estão apenas com espaços em branco)
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos antes de enviar.");
                return;
            }

            // Exibe um feedback de sucesso para o usuário
            alert(`Obrigado, ${nome}! Seus dados foram enviados. Nossa equipe entrará em contato em breve.`);

            // Limpa o formulário após o envio bem-sucedido
            formulario.reset();
        });
    }
});