/**
 * Cálculo de IMC
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.


const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura)

console.log(imc)

if (imc >= 30){
    console.log('Carlos você está acima do peso')
} 

if (imc < 29.9){
    console.log('Carlos você não está acima do peso')
}

 */

/**
 * Cálculo de aposentadoria
Crie um programa para calcular a aposentadoria de uma pessoa.
 */

const nome = "Silvana";
const sexo = "M";
const idade = 48;
const contribuicao = 40;

console.log(idade+contribuicao)

if (sexo == "F"){
    apof()
} else{
    apom()
}

function apof(){
    if (sexo == "F" && idade + contribuicao >= 85){
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}

function apom(){
    if (sexo == "M" && idade + contribuicao >= 95){
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}