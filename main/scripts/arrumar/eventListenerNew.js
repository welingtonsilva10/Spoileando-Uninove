
document.addEventListener('DOMContentLoaded', () => {

    forVa[0].addEventListener('submit', function (event) {
        event.preventDefault();
        const query = (forVa[1].value + forVa[2].value).trim();
        if (query !== '') {
            searchImages(query);
        }
    });

    function searchImages(query) {
        const currentSearchCounter = ++forVa[5];
        const apiUrl = `/main/back/posts/apiImage.php?query=${query}&counter=${currentSearchCounter}`;
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(result => {
                const images = result.items.slice(0, 6);
                forVa[3].innerHTML = '';
    
                images.forEach(image => {
                    const divFoto = document.createElement('div');
                    divFoto.classList.add('imgLink');
                    
                    const imgElement = document.createElement('img');
                    imgElement.classList.add('fotoInternet');
                    imgElement.src = image.link;
    
                    imgElement.addEventListener('click', () => {
                        cPreview[1].src = image.link;
                        forVa[4].value = image.link;
                    });
    
                    divFoto.appendChild(imgElement);
                    forVa[3].appendChild(divFoto);
                });
            })
            .catch(error => {
                console.error('Erro ao buscar imagens:', error.message);
            });
    }
});
document.getElementById("shareForm").addEventListener("submit", function(event) {
    event.preventDefault();
});