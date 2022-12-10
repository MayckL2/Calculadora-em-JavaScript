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

// pega o valor digitado no teclado
function enter(event){
    if (event.which == 13){
        result()
    }

    // mostra.value= event.which

    switch(event.which){
        case 48:
            mostra.value += 0
        break
        case 49:
            mostra.value += 1
        break
        case 50:
            mostra.value += 2
        break
        case 51:
            mostra.value += 3
        break
        case 52:
            mostra.value += 4
        break
        case 53:
            mostra.value += 5
        break
        case 54:
            mostra.value += 6
        break
        case 55:
            mostra.value += 7
        break
        case 56:
            mostra.value += 8
        break
        case 57:
            mostra.value += 9
        break
        case 46:
            mostra.value += '.'
        break
        case 43:
            mostra.value += '+'
        break
        case 45:
            mostra.value += '-'
        break
        case 42:
            mostra.value += '*'
        break
        case 47:
            mostra.value += '/'
        break
        case 99:
            apaga()
        break
    }
}

// exibe modal ao carregar a pagina
var text= document.querySelector(".modal")

function modal(){
    
    text.style.display= "block"
    text.style.animationName= "modal"
    text.style.marginTop= "50px"
}

// fecha modal
function fecha(){

    text.style.display= "none"
    
}
