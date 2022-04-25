const prompt = require("prompt-sync")();

const x = +prompt("Digite um número inteiro ");


for( let imp = 1; imp <=x; imp++){

   if(imp % 2 == 1) {

    console.log(imp)
   }

}
// este programa pega e armazena num arrey só os numeros pares do número x escolhido. 
// exemplo: 20. seré mostrados os números impares de até 20

/* Leia um valor inteiro X. Em seguida mostre os 
ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso. Use o laço FOR.   */



