function chamaLogin(){
    let inputUser = document.querySelector('#field__email');
    let inputPass = document.querySelector('#field__pass');
    let user = inputUser.value;
    let pass = inputPass.value;

    if(user && pass == "Admin"){
        
    } 
    else {
        alert('Insira um usuário ou senha válido');
    }
}