function verificar() {

    let email,senha,retorno;

    email = document.getElementById('email').value;
    senha = document.getElementById('senha').value;
    retorno = document.getElementById('retorno');

    if(email === "" || senha === ""){
        retorno.innerHTML = "Todos os campos precisam ser preenchidos";
        return false;
    } else{
        return true;
    }


}