let termsData;
const dataElement = '';
fetch('/main/back/disconnected/tpm.php')
    .then(response => response.json())
    .then(data => {
        termsData = data;
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

function chamarPopUp() {
    const popUp = document.getElementById('popUpTermos');
    
    for (let i = 1; i <= 4; i++) {
        const dataElement = document.getElementById(`tit${i}`);
        dataElement.innerHTML = termsData[`par${i}`];
    }

    popUp.style.display = 'flex';
    return false;
}

function fecharPopUp() {
    const closePopUp = document.getElementById('popUpTermos');
    closePopUp.style.display = 'none';
    return false;
}