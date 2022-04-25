const prompt =require("prompt-sync")();

let numero01 = +prompt("Digete um número ");
let numero02 = +prompt("Digite outro número ");


const sequencia = [];

if(numero01 < numero02){
sequencia.push(numero01)
for(let i = numero01; i < numero02; i++){
    numero01++
    sequencia.push(numero01)
}

}else{
    sequencia.push(numero01)
    for( let i = numero01; i > numero02; i--){
        numero01--
        sequencia.push(numero01)
    }
}
console.log(sequencia)

/* Faça um programa que peça 2 números e 
crie um array contando todos os números os números 
sequenciais do primeiro até o segundo, independente de ser maior ou menor.  */


/* este programa fará uma lista no arrey de uma sequência numérica.
*/