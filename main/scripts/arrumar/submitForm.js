const alerta = document.getElementById('alerta');
const defElement = document.getElementById('privateInformation');
const abcElement = document.getElementById('uniqueInformation');

function checkInformation(){
    const uniqueInformationForm = document.getElementById('uniqueInformation');
    const uniqueData = new FormData(uniqueInformationForm);

    alerta.style.display = 'flex';
    document.getElementById('saidadoformulario').innerHTML = 'Aguarde um momento por favor...';

    fetch('/main/back/validators/validateUniqueInformation.php', {
        method: 'POST',
        body: uniqueData
    })
    .then(response => response.text())
    .then(data => {
        if(data == 'E-mail enviado com sucesso!'){
            document.getElementById('saidadoformulario').innerHTML = 'E-mail enviado com sucesso!';
            nextForm();
        }else{
            document.getElementById('saidadoformulario').innerHTML = data;
            alerta.style.display = 'flex';
            setTimeout(() => {
                alerta.style.display = 'none';
            }, 2000);
        }
    })
    .catch(error => {
        console.error('Erro: ', error);
    });
}
function registerNewUser(){
    const privateInformationForm = document.getElementById('privateInformation');
    const privateData = new FormData(privateInformationForm);

    document.getElementById('saidadoformulario').innerHTML = 'Estamos finalizando o seu cadastro';

    fetch('/main/back/validators/registerNewUser.php', {
        method: 'POST',
        body: privateData
    })
    .then(response => response.text())
    .then(data => {
        if(data == 'Registrado com sucesso!'){
            document.getElementById('saidadoformulario').innerHTML = 'Registro efetuado com sucesso!';
            // window.location.href = "/login.html";
        }else{
            document.getElementById('saidadoformulario').innerHTML = data;
            alerta.style.display = 'flex';
            setTimeout(() => {
                alerta.style.display = 'none';
            }, 2000);
        }
    })
    .catch(error => {
        console.error('Erro: ', error);
    });
}

function nextForm() {
    abcElement.className = 'formInputData2';
    defElement.className = 'formInputData1';
    setTimeout(() => {
        alerta.style.display = 'none';
    }, 2000);
}