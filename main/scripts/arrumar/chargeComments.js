let idPostagemGlobal;

function carregarComentarios(idPostagem) {
    idPostagemGlobal = idPostagem;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/main/back/card/commentsPost.php?idPostagem=${idPostagem}`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const comentarios = JSON.parse(xhr.responseText);
            exibirComentarios(comentarios);
        }
    };
    xhr.send();
}


function exibirComentarios(comentarios) {
    const comentariosContainer = document.getElementById('comentarios-container');
    comentariosContainer.innerHTML = '';

    if (comentarios.length > 0) {
        comentarios.forEach(comentario => {
            const comentarioElement = document.createElement('div');
            comentarioElement.innerHTML = `
            <section class="comentario_dum">
            <!--<div class="bloc_imagem">
                    <img src="" alt="">-->
                </div>
                <div class="usuario_nome_comentario">
                    <div>
                        <h3 class="apelUsuario">${comentario['apelido_usuario']}</h3>
                    </div>
                    <div>
                        <p class="mensagemUsuari">${comentario['mensagem']}</p>
                    </div>
                </div>
            </section>`;
            comentariosContainer.appendChild(comentarioElement);
        });
    } else {
        
        comentariosContainer.innerHTML = '';
    }
}
function pronto(){
    setTimeout(function() {
        carregarComentarios(idPostagemGlobal);
    }, 1000);

}