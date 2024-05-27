document.addEventListener('DOMContentLoaded', () => {
    const queryInput = document.getElementById('queryInput');
    const tituloConteudo = document.getElementById('tituloConteudo');
    const digitado = document.getElementById('digitado');
    const spoiler = document.getElementById('spoiler');
    const opcao = document.getElementById('opcao');
    const tipoConteudo = document.getElementById('tipoConteudo');
    const qualPlataforma = document.getElementById('qualPlataforma');
    const plataforma = document.getElementById('plataforma');
    const resultsContainer = document.getElementById('results');
    const searchForm = document.getElementById('searchForm');
    const selectedImageUrlInput = document.getElementById('selectedImageUrl');
    let searchCounter = 0; 

    queryInput.addEventListener('input', function () {
        tituloConteudo.value = this.value;
    });
    spoiler.addEventListener('input', function () {
        digitado.value = this.value;
    });
    digitado.addEventListener('input', function () {
        spoiler.value = this.value;
    });

    qualPlataforma.addEventListener('input', function () {
        plataforma.value = this.value;
    });

    opcao.addEventListener('input',function (){
        tipoConteudo.value = this.value;
    }
    )

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const query = (tipoConteudo.value + queryInput.value).trim();
        if (query !== '') {
            searchImages(query);
        }
    });

    function searchImages(query) {
        const currentSearchCounter = ++searchCounter;
        const apiUrl = `/main/back/post/apiImage.php?query=${query}&counter=${currentSearchCounter}`;
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(result => {
                const images = result.items.slice(0, 6);
                resultsContainer.innerHTML = '';
    
                images.forEach(image => {
                    const divFoto = document.createElement('div');
                    divFoto.classList.add('imgLink');
                    
                    const imgElement = document.createElement('img');
                    imgElement.classList.add('fotoInternet');
                    imgElement.src = image.link;
    
                    imgElement.addEventListener('click', () => {
                        selectedImageUrlInput.value = image.link;
                    });
    
                    divFoto.appendChild(imgElement);
                    resultsContainer.appendChild(divFoto);
                });
            })
            .catch(error => {
                console.error('Erro ao buscar imagens:', error.message);
            });
    }
});
