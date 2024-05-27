let bloco1 = document.getElementById('blocado1');
    let bloco2 = document.getElementById('blocado2');
    let bloco3 = document.getElementById('blocado3');
    let bolo1 = document.getElementById('bolo1');
    let bolo2 = document.getElementById('bolo2');
    let titulo1 = document.getElementById('jerimum1');
    let titulo2 = document.getElementById('jerimum2');
    function esconderBloco1() {
        bloco1.style.display = 'none';
        bolo1.style.height = 'fit-content';
        bolo1.style.backgroundColor = 'green';
        bloco2.style.display = 'flex';
        titulo1.style.color = 'white';
    }
    function esconderBloco2() {
        bloco2.style.display = 'none';
        bolo2.style.backgroundColor = 'green';
        bolo1.style.height = 'fit-content';
        bloco3.style.display = 'flex';
        titulo2.style.color = 'white';
    }