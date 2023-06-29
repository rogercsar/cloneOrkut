function chamaLogin(){
    let inputUser = document.querySelector('#field__email');
    let inputPass = document.querySelector('#field__pass');
    let user = inputUser.value;
    let pass = inputPass.value;
    let linkPag = document.querySelector('#linkPag');

    if(user && pass == "Admin"){
       linkPag.setAttribute('href', './profile.html');
    } 
    else {
        alert('Insira um usuário ou senha válido');
    }
}