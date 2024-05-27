function verificar() {
    let nome, email, apelido, telefone, senha1, senha2, termos, retorno, slvemail, slvusuario, slvsenha,finalizar;
    nome = document.getElementById('nome');
    slvnome = document.getElementById('slvNome');
    email = document.getElementById('email');
    telefone = document.getElementById('telefone');
    slvemail = document.getElementById('slvEmail')
    apelido = document.getElementById('apelido');
    slvusuario = document.getElementById('slvUsuario');
    senha1 = document.getElementById('senha1');
    senha2 = document.getElementById('senha2');
    slvsenha = document.getElementById('slvSenha');
    termos = document.getElementById('radTermos');
    retorno = document.getElementById('retorno');
    finalizar = document.getElementById('btnFinalizar');
    if (!/^[a-zA-Z]+\s[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(nome.value.trim())) {
        nome.style.border = '2px solid red';
        slvnome.style.backgroundColor = 'rgba(0, 128, 0, 0.397)';
        slvnome.style.color = 'rgba(255, 255, 255, 0.493)';
        slvnome.disabled = true;
        return false;
    }else{
        nome.style.border = '2px solid green';
        slvnome.style.backgroundColor = 'green';
        slvnome.style.color = 'white';
        slvnome.disabled=false;
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value.trim())) {
        email.style.border = '2px solid red';
        slvemail.disabled=true;
        return false;
    }else{
        email.style.border = '2px solid green';
    }
    if (!/^\d{11,}$/.test(telefone.value.trim())) {
        telefone.style.border = '2px solid red';
        slvemail.style.backgroundColor = 'rgba(0, 128, 0, 0.397)';
        slvemail.style.color = 'rgba(255, 255, 255, 0.493)';
        slvemail.disabled=true;
        return false;
    }else{
        telefone.style.border = '2px solid green';
        slvemail.style.backgroundColor = 'green';
        slvemail.style.color = 'white';
        slvemail.disabled=false;
    }
    if (!/^[a-zA-Z]{5,}/.test(apelido.value.trim())||apelido.value.includes(' ')||(/[!@#$%^&*(),.?":{}|<>]/.test(apelido.value.trim()))) {
        apelido.style.border = '2px solid red';
        slvusuario.style.backgroundColor = 'rgba(0, 128, 0, 0.397)';
        slvusuario.style.color = 'rgba(255, 255, 255, 0.493)';
        slvusuario.disabled=true;
        return false;
    }else{
        apelido.style.border = '2px solid green';
        slvusuario.style.backgroundColor = 'green';
        slvusuario.style.color = 'white';
        slvusuario.disabled=false;
    }
    if (senha1.value.includes(' ')||!(/[!@#$%^&*(),.?":{}|<>]/.test(senha1.value) && /[A-Z]/.test(senha1.value) && /[a-z]/.test(senha1.value) && /\d/.test(senha1.value))||senha1.value.length < 8) {
        senha1.style.border = '2px solid red';
        slvsenha.disabled=true;
        return false;
    }else{
        senha1.style.border = '2px solid green';
    }
    if (senha1.value !== senha2.value) {
        senha2.style.border = '2px solid red';
        slvsenha.style.backgroundColor = 'rgba(0, 128, 0, 0.397)';
        slvsenha.disabled=true;
        return false;
    }else{
        senha2.style.border = '2px solid green';
        slvsenha.style.backgroundColor = 'green';
        slvsenha.style.color = 'white';
        slvsenha.disabled=false;
    }
    if (!termos.checked) {
        finalizar.style.backgroundColor = 'rgba(0, 128, 0, 0.397)';
        finalizar.style.color = 'rgba(255, 255, 255, 0.493)';
        return false;
    }else{
        finalizar.style.backgroundColor = 'green';
        finalizar.style.color = 'white';
    }
    if (nome === "" || email === "" || apelido === "" || telefone === "" || senha1 === "" || senha2 === "") {
        return false;
    } 
    else {
        return true;
    }
}

function chamarCadTel() {
    let cadTel = document.querySelector('.cadTelEmail');
    cadTel.style.display = 'flex';
    let cadNome = document.querySelector('.cadNome');
    cadNome.style.display = 'none';
}

function chamarUsuario() {
    let cadUsuario = document.querySelector('.cadUsuario');
    cadUsuario.style.display = 'flex';
    let cadEmail = document.querySelector('.cadTelEmail');
    cadEmail.style.display = 'none';
}

function chamarSenha() {
    let cadSenha = document.querySelector('.cadSenha');
    cadSenha.style.display = 'flex';
    let cadUsuario = document.querySelector('.cadUsuario');
    cadUsuario.style.display = 'none';
    let btnversenha = document.getElementById('verSenha');
    btnversenha.style.display = 'block';
}

function chamarTermos() {
    let cadTermos = document.querySelector('.cadTermos');
    cadTermos.style.display = 'flex';
    let cadSenha = document.querySelector('.cadSenha');
    cadSenha.style.display = 'none';
    let btnversenha = document.getElementById('verSenha');
    btnversenha.style.display = 'none';
}

document.getElementById('nome').addEventListener('input', verificar);
document.getElementById('email').addEventListener('input', verificar);
document.getElementById('apelido').addEventListener('input', verificar);
document.getElementById('telefone').addEventListener('input', verificar);
document.getElementById('senha1').addEventListener('input', verificar);
document.getElementById('senha2').addEventListener('input', verificar);
document.getElementById('radTermos').addEventListener('change', verificar);
document.getElementById('formulario').addEventListener('submit', function(event) {
    if (!verificar()) {
        event.preventDefault();
    }
});