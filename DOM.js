
/** funcionalidade do getEleentBYid */
function teste(){
    event.preventDefault();
    
    var para=document.getElementById("news")
    var login=document.getElementById("nome")
    var senha=document.getElementById("pin")

    if(login==senha){
        para.innerHTML="erro"
    }else{
        para.innerHTML="sucesso"
    }
}

function limpar(){
    document.getElementById("nome").value=""
}

/**funcionalidade do getEleentBYTagName */
var tags=document.getElementsByTagName("h1")
/** o que está no indice [0] é o  elemento que desejo alterar */
tags[0].innerHTML="Login"


/** funcionalidade do getElementByClassName*/
document.getElementsByClassName("nome")[0].innerHTML=("email")

/**funcionalidade do querySelector */

document.querySelector("h1").style.backgroundColor="black"

