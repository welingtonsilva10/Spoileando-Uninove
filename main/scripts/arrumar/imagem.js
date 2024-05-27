document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var resposta = JSON.parse(xhr.responseText);

            var imagemSrc = resposta[0].link_imagem;

            document.getElementById('imagem_usuario').src = imagemSrc;
        }
    };
    
    xhr.open('GET', '/main/back/loading/dados_usuario.php', true);
    xhr.send();
});
