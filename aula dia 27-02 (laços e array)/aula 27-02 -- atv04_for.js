/*
Faça um loop FOR que encontre todos os números PARES, e todos os números ÍMPARES, e armazene respectivamente os dois em um array denominado PAR e outro ÍMPAR
dica ( Para sabermos se um número é PAR  o seu resto da divisão por 2, deve ser igual a 0,
Para sabermos se um número é ÍMPAR, seu resto da divisão por 2 deve ser diferente de 0. exemplo
 1 % 2 == 0 - Impar
 2 % 2 == 0 - Par)
*/


let par = [];
let impar = [];
for(let i = 0; i < 10; i++){
  if(i % 2 === 0){
    par.push(i);
  } else if(i % 2 !== 0){
    impar.push(i);
  }

}
console.log(`Os numeros PARES ${par}`);
console.log(`Os numeros PARES ${impar}`);
