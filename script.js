// exibe digitos na tela
var mostra= document.querySelector("input")

// mostra cada digito clicado
function dig(i){
    mostra.value= mostra.value + i
}

// executa os calculos
function result(){
    mostra.value= eval(mostra.value) 
}

// apaga tudo
function apaga(){
    mostra.value= ""
}

// executa funçao result ao precionar enter
function enter(event){
    if (event.which == 13){
        result()
    }
}