let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let n3 = document.getElementById('n3')
let btn = document.getElementById('btn')
let div = document.getElementById('container')

function calcula (){
    div.innerHTML = ''
    PositivonuloOunegativo(n1.value)
    PositivonuloOunegativo(n2.value)
    PositivonuloOunegativo(n3.value)

    Math.max(n1.value, n2.value, n3.value)
}

function PositivonuloOunegativo(numero) {
    
    if(numero > 0) {
        console.log('positivo')
        div.innerHTML +=`${numero} é positivo <br/>`
    }else if (numero < 0){
        console.log('negativo')
        div.innerHTML +=`${numero} é negativo <br/>`
    }else {
        console.log('nulo')
        div.innerHTML += `nulo`
    }
}

btn.addEventListener('click', calcula)