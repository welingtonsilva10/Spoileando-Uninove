function showForm(parametro){
    upScre.forEach(upScre => upScre.style.display = 'none');
    upScre[parametro].style.display = 'flex';
}
function updateRating() {
    newScre[1].textContent = newScre[0].value;
}
function callNextPage(parametro) {
    page[0].style.display = 'flex';
    page[0].style.animation = 'arrastarTela 0.4s ease-in-out forwards';

    if(parametro == 0){
        forVa[1].value = 'filme';
        forVa[2].placeholder = 'Qual o nome do filme?';
    }
    if(parametro == 1){
        forVa[1].value = 'serie';
        forVa[2].placeholder = 'Qual o nome da série?';
    }
    if(parametro == 2){
        forVa[1].value = 'livro';
        forVa[2].placeholder = 'Qual o nome do livro?';
    }
    if(parametro == 3){
        forVa[1].value = 'jogo';
        forVa[2].placeholder = 'Qual o nome do jogo?';
    }
}
function closePagePost(parametro){
    page[parametro].style.display = 'none';
}
function nextStep(parametro) {
    next.forEach(next=>next.style.display = 'none');
    next[parametro].style.display = 'flex';
    cPreview[0].style.display = 'flex';
}
function postNewCard() {
    const uniqueData = new FormData(forVa[0]);

    fetch('/main/back/posts/new_post.php', {
        method: 'POST',
        body: uniqueData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ocorreu um erro ao enviar os dados.');
        }
        return response.text();
    })
    .then(data => {
        alert('Obrigado por compartilhar!');
        window.location.reload(true);
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
    });
}
function deslizarParaProximaJanela() {
    
    indiceAtual++;
    if (indiceAtual >= janelas.length) {
        indiceAtual = 0;
    }

    const larguraTela = container.offsetWidth;

    const larguraWindowJamComment = janelas[indiceAtual].offsetWidth;

    const deslocamento = (larguraTela - larguraWindowJamComment) / 2;

    container.scrollLeft = janelas[indiceAtual].offsetLeft - deslocamento;
}
function participar(){
    window.location.href  = "/register.html"
}
function mudarNota(){
    val[0].innerHTML = val[1].value;
}