// Função para carregar o conteúdo do arquivo HTML externo
function loadContent(elementId, fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o arquivo:', error));
}

// Carregar a barra de navegação e o rodapé ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadContent('main-header', 'navbar.html');
    loadContent('main-footer', 'footer.html');
});
