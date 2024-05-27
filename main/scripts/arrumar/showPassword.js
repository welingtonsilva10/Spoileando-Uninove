function verSenha() {
    const senha1 = document.getElementById('senha1');
    const senha2 = document.getElementById('senha2');
    const olho = document.getElementById('olho');

    if (senha1.type === 'password' && senha2.type === 'password') {
        senha1.type = 'text';
        senha2.type = 'text';
        olho.innerHTML = '<ion-icon name="eye-outline"></ion-icon>';
    } else {
        senha1.type = 'password';
        senha2.type = 'password';
        olho.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon>';
    }
}