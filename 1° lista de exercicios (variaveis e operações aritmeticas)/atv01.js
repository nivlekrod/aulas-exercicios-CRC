/*

- Elabore um algoritmo que tenha dois valores para as variáveis A e B,
efetue a troca dos valores de forma que a variável A passe a ter o valor da
variável B, e que a variável B passe a ter o valor da variável A. Ao final,
imprima os valores com a troca efetuada.

*/

let a = 1;
const temp = a;
let c = 3;

console.log(` Valor do a = ${a} \n Valor do c = ${c}`);
console.log(" ");

a = c;
c = temp;

console.log(` Valor do c = ${a} \n Valor do a = ${c}`);
