const rodape = document.getElementById('pezao')
function showComments(){
    rodape.style.display = 'flex';
}
function closerodape(){
    rodape.style.display = 'none';
    const comentariosContainer = document.getElementById('comentarios-container');
    comentariosContainer.innerHTML = ""; 
}

    document.getElementById('formComentario').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        let textoComentario = document.getElementById('textoComentario');
        
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/main/back/interaction/fazerComment.php', true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                console.log(xhr.responseText);
                textoComentario.value = '';

                
            } else {
                console.error('Erro no servidor');
            }
        };
        xhr.onerror = function() {
            console.error('Erro de conexão');
        };
        xhr.send(formData);
    });

function capturarComentario() {
    
    var commentButtons = document.getElementsByClassName("commentButton");

    for (var i = 0; i < commentButtons.length; i++) {
        commentButtons[i].addEventListener("click", function() {
            var commentValue = this.value;
            document.getElementById("commentInput").value = commentValue;
        });
    }
}

function findPlatform(unco) {
    let a = document.getElementById(unco);
    a.style.display = a.style.display === "flex" ? "none" : "flex";
}

capturarComentario();

var contador = 0;
var intervalId = setInterval(function() {
    contador++;
    if (contador >= 2) {
        clearInterval(intervalId);
    } else {
        capturarComentario();
    }
}, 1000);
