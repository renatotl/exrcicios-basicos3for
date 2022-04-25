const prompt = require("prompt-sync")();

const quantidadeEleitores = prompt("Quantas pessoas vão votar? ")

const candidatosListas = ["Thiago","Denis","Rafaela"];

let c1 = 0;
let c2 = 0;
let c3 = 0;

const candidatos = (`
CANDIDATOS
[1] ${candidatosListas[0]}
[2] ${candidatosListas[1]}
[3] ${candidatosListas[2]}`)


for( let i = 0; i < quantidadeEleitores; i++){
console.log(`${candidatos}`)

const voto = +prompt(`${i+1}° eleitor, qual o seu voto?  `)
 if(voto == 1){
    console.log(`\nVocê votou no ${candidatosListas[0]}`)
c1++;
 }else if(voto == 2){
    console.log(`\nVocê votou no ${candidatosListas[1]}`)
c2++;
 }else if(voto == 3){
    console.log(`\nVocê votou no ${candidatosListas[2]}`)
c3++;
 }else{
     console.log("VOTO NULO")
 }
}

console.log(`
RESULTADO
${candidatosListas[0]}: ${c1} VOTOS
${candidatosListas[1]}: ${c2} votos
${candidatosListas[2]}: ${c3} votos`)


// urna eletrônica   

/* Numa eleição existem três candidatos. 
Faça um programa que peça o número total de eleitores. 
Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.  */

