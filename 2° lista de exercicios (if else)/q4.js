/*
4 - Faça um script que receba um número e informe se o
número é inteiro ou decimal.
*/

let num = 12.1;

if (num % 1 === 0) {
    console.log(`${num} é Inteiro`);
} else {
    console.log(`${num} é Decimal`);
} 
/*
É possível utilizar Number.isInteger:
O método Number.isInteger(parâmetro) determina se o valor passado  é um inteiro.
Parâmetro é o valor a testar se é inteiro, no nosso caso é a variável num, então seria só colocar dentro
do parenteses.
*/