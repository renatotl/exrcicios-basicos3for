const prompt = require("prompt-sync")();

const quantidadeNumeros = +prompt("Quantos números serão adicionados a lista ");

const lista = [];

for ( let i = 0; i < quantidadeNumeros; i++){


    // essa parte do ${ i + 1} é pra pegar a posição 1,2,3...
    const numero = +prompt(`informe ${ i + 1}° número: `);
   lista.push(numero)
}

console.log(`\nLista de números ${lista}`)
// irá fazer um ordem numerica
// primeiro valor é o menor e o ultimo o maior
lista.sort((a,b) => {
    return a -b;
})

const menorValor= lista[0];

const ultimoIndex = lista.length -1
const maiorValor = lista[ultimoIndex]

console.log(`\n Menor valor ${menorValor}`)
console.log(`Maior valor ${maiorValor}`)

const somaValores = menorValor + maiorValor;

console.log(`Soma dos valores ${somaValores}`)

/* Faça um programa que, dado uma lista de N números 
(o usuário deve determinar a quantidade de números a serem entrados 
    e entrar cada um deles), determine o menor valor, o maior valor e a soma dos valores. */


    // Este programa vai somar somente o maior valor com o menor valor em uma lista por exemple
    // de 5 sequências de números