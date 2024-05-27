function criarCardPostagem(postagem) {
    const cardPostagem = document.createElement('div');
    cardPostagem.classList.add('card_postagem');
    const usuarioCurtiu = postagem.usuario_curtiu === '1';
    cardPostagem.innerHTML = `
    <div class="newCard">
        <div class="whereFind" id="where${postagem.id_spoiler}" onclick="findPlatform('where${postagem.id_spoiler}')">
            <div class="welingtonLindo">
                <small>${postagem.plataforma_spoiler}</small>
            </div>
        </div>
            <div class="userLand">
                <div class="userImageBox">
                    <div class="rediminante">
                        <img class="userImageCard" onclick="verFotoUsuario('abacate${postagem.id_spoiler}')" id="abacate${postagem.id_spoiler}" src="${postagem.link_imagem}">
                    </div>
                </div>
                <div class="userInformation">
                    <h4 class="nameUser">${postagem.nome_usuario}</h4>
                    <h4 class="textStandard">@${postagem.apelido_usuario}</h4>
                </div>
                <div class="typeContentBox">
                    <h4 class="typeContent">${postagem.tipo_spoiler}</h4>
                </div>
            </div>
            <div class="contentLand">
                <div class="postBox">
                    <div class="notePoster">
                        <div class="imgContent">
                            <img class="imageContentSearch" src="${postagem.imagem_url}" alt="">
                        </div>
                        <div class="noteContent">
                            <h3 class="noteUser">${postagem.nota_spoiler}</h3>
                            <small class="avaliationUser">Avaliação</small>
                        </div>
                    </div>
                    <div class="textPost">
                        <div class="titleBox">
                            <h3 class="tittleStandard">${postagem.titulo_spoiler}</h3>
                        </div>
                        <div class="resenhaBox">
                            <p class="resenhaStandard">${postagem.informacao_spoiler}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="interactionLand">
                <div class="buttonIntexactionBox">
                    <button class="interactiveButtonCard" onclick="findPlatform('where${postagem.id_spoiler}')">
                        <img class="imageButtonInteractive" id="" src="/main/images/system/searchCard.svg" alt="Search platform.">
                    </button>
                </div>
                <div class="buttonIntexactionBox">
                    <button class="interactiveButtonCard" onclick="savePost(${postagem.id_spoiler})">
                        <img class="imageButtonInteractive" id="" src="/main/images/system/saveCard.svg" alt="Save post.">
                    </button>
                </div>
                <div class="buttonIntexactionBox">
                    <span class="triC valCurtida">${postagem.total_curtidas}</span>
                    <button class="interactiveButtonCard" data-id-postagem="${postagem.id_spoiler}" data-id-usuario="${postagem.id_usuario}" data-curtido="${usuarioCurtiu ? 'true' : 'false'}" onclick="curtirPostagem(this)">
                        <img class="imageButtonInteractive" id="" src="/main/images/system/mango${usuarioCurtiu ? 'Liked' : ''}.svg" alt="Like post.">
                    </button>
                </div>
                <div class="buttonIntexactionBox">
                    <span class="triC valCurtida">${postagem.total_comentarios}</span>
                    <button class="interactiveButtonCard commentButton" value="${postagem.id_spoiler}" onclick="showComments(), carregarComentarios(${postagem.id_spoiler})">
                        <img class="imageButtonInteractive" id="" src="/main/images/system/chat.svg" alt="Comment post.">
                    </button>
                </div>
                <div class="buttonIntexactionBox">
                <button class="interactiveButtonCard" onclick="compartilharConteudo()" value="${postagem.id_spoiler}">
                    <img class="imageButtonInteractive" id="" src="/main/images/system/share.svg" alt="Share post.">
                </button>
                </div>
                
                
            </div>
        </div>
    `;
    return cardPostagem;
}


let loadedSetsCount = 0;

function checkScroll() {

    if (!loadingMorePosts && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        
        loadingMorePosts = true; 
        loadMorePosts(); 
    }
}

function loadMorePosts() {
    let cardsPerLoad = 3; 
    let startIndex = loadedSetsCount * cardsPerLoad; 

    
    fetch('/main/back/card/posts10.php?offset=' + startIndex)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            return response.json();
        })
        .then(postagens => {
            const postagensContainer = document.getElementById('postagensContainer');
            if (postagens.length > 0) {
                postagens.forEach(postagem => {
                    const cardPostagem = criarCardPostagem(postagem);
                    postagensContainer.appendChild(cardPostagem);
                });
                
                loadedSetsCount++; 
            } else {
                
            }

            loadingMorePosts = false; 
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}


window.addEventListener('scroll', checkScroll);

document.addEventListener('DOMContentLoaded', loadMorePosts);
