function curtirPostagem(button) {
    const idPostagem = button.getAttribute('data-id-postagem');
    const idUsuario = button.getAttribute('data-id-usuario');
    const valCurtidaElement = button.closest('.card_postagem').querySelector('.valCurtida');
    let valCurtida = parseInt(valCurtidaElement.textContent);
    fetch('/main/back/interaction/like.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `id_postagem=${idPostagem}&id_usuario=${idUsuario}`,
    })
    .then(response => response.text())
    .then(message => {
        if (message === "Curtida registrada com sucesso!") {
            button.classList.add('curtida');
            valCurtida += 1;
            valCurtidaElement.textContent = valCurtida;
            button.innerHTML = '<img class="imageButtonInteractive" src="/main/images/system/mangoCardLiked.svg" alt="">';
        } else if (message === "Curtida removida com sucesso!") {
            button.classList.remove('curtida');
            valCurtida = Math.max(0, valCurtida - 1);
            valCurtidaElement.textContent = valCurtida;
            button.innerHTML = '<img class="imageButtonInteractive" src="/main/images/system/mango.svg" alt="">';
        }
    })
    .catch(error => console.error('Erro:', error));
}
