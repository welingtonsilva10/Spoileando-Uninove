let key, institution, recipient;

document.addEventListener('DOMContentLoaded', () => {
    fetch('../../parameters/keyPix.json')
    .then(response => response.json())
        .then(data => {
            key = data.key;
            institution = data.institution;
            recipient = data.recipient;
            
            generateQRCode();
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
        
        function generateQRCode() {
            const qrcode = new QRCode(document.getElementById('qrcode'), key);
        }
});

function mostrarQr() {
    const btn = document.getElementById('btnCodigo');
    btn.style.display = 'none';
    const codigo = document.getElementById('bloco');
    codigo.style.display = 'flex';
    const quadro = document.getElementById('quadro');
    quadro.style.background = 'white';
}