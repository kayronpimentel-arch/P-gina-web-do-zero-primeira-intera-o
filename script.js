// Seleciona todos os botões da página
const botoes = document.querySelectorAll('button');

// Adiciona a função de clique em cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const contador = botao.querySelector('span');
        let valorAtual = parseInt(contador.textContent);
        contador.textContent = valorAtual + 1;
    });
});