function mostrarTextoPrincipal(){
    const conteudo = document.getElementById('textoPrincipal');
    const btn_principal = document.getElementById('btn_principal');

    if(conteudo.style.display === 'flex'){
        conteudo.style.display = 'none';
        btn_principal.innerHTML = '<img class="img_saiba" src="/img/mangoLiked.svg" alt="">Saiba mais'
    }
    else{
        conteudo.style.display ='flex';
        btn_principal.innerHTML = '<img class="img_saiba" src="/img/mangoLiked.svg" alt="">ver menos'
    }
}