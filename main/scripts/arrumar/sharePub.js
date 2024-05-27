function compartilharConteudo() {
    
    var message = "Confira este site incrível: https://spoileando.com";
    
    var whatsappURL = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);

    
    window.location.href = whatsappURL;
}