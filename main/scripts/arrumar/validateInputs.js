let inputMail            = document.getElementById('registerMail');
let inputPhone           = document.getElementById('registerPhone');
let inputNick            = document.getElementById('registerNick');
let inputName            = document.getElementById('registerName');
let inputPassword        = document.getElementById('registerPassword');
let confirmationPassword = document.getElementById('passwordConfirmation');
let termsConditions      = document.getElementById('changeSubmit');
const botao1             = document.getElementById('buttonCheckInformation');
const botao2             = document.getElementById('buttonRegisterUser');

function checkInf() {
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(inputMail.value.trim())) {
        inputMail.style.border = '2px solid red';
        botao1.disabled = true;
        return false;
    } else {
        inputMail.style.border = '2px solid green';
    }
    if (!/^\d{11,}$/.test(inputPhone.value.trim()) || inputPhone.value.length > 11) {
        inputPhone.style.border = '2px solid red';
        botao1.disabled = true;
        return false;
    } else {
        inputPhone.style.border = '2px solid green';
    }
    if (!/^[a-zA-Z][a-zA-Z0-9]{3,}$/.test(inputNick.value.trim()) || inputNick.value.includes(' ') || (/[!@#$%^&*(),.?":{}|<>]/.test(inputNick.value.trim()))) {
        inputNick.style.border = '2px solid red';
        botao1.disabled = true;
        return false;
    } else {
        inputNick.style.border = '2px solid green';
        botao1.disabled = false;
        colorButtonContinue();
    }
}

function registerUser(){
    if (!/^[a-zA-Z]+\s[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(inputName.value.trim())) {
        inputName.style.border = '2px solid red';
        botao2.disabled = true;
        return false;
    }else{
        inputName.style.border = '2px solid green';
    }
    if (inputPassword.value.includes(' ')||!(/[!@#$%^&*(),.?":{}|<>]/.test(inputPassword.value) && /[A-Z]/.test(inputPassword.value) && /[a-z]/.test(inputPassword.value) && /\d/.test(inputPassword.value))||inputPassword.value.length < 8) {
        inputPassword.style.border = '2px solid red';
        botao2.disabled = true;
        return false;
    }else{
        inputPassword.style.border = '2px solid green';
    }
    if (inputPassword.value !== confirmationPassword.value) {
        confirmationPassword.style.border = '2px solid red';
        botao2.disabled = true;
        return false;
    }else{
        confirmationPassword.style.border = '2px solid green';
    }
    if (!termsConditions.checked) {
        botao2.disabled = true;
        return false;
    }else{
        botao2.disabled = false;
        colorButtonSubmit()
    }
}

function colorButtonContinue(){
    botao1.style.backgroundColor = 'red';
    
}
function colorButtonSubmit(){
    botao2.style.backgroundColor = 'red';
}

inputMail.addEventListener('input', checkInf);
inputPhone.addEventListener('input', checkInf);
inputNick.addEventListener('input', checkInf);
inputName.addEventListener('input', registerUser);
inputPassword.addEventListener('input', registerUser);
confirmationPassword.addEventListener('input', registerUser);
termsConditions.addEventListener('change', registerUser);