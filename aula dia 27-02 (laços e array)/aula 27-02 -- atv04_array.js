/*Faça um programa que tenha um  ARRAY, contendo 3 elementos, e 
utilizando o slice, pegue a primeira letra de cada elemento.
*/
let cores = ["Cinza", "Verde", "Amarelo"];

let cor1_primeira_letra = cores[0];
let cor2_primeira_letra = cores[1];
let cor3_primeira_letra = cores[2];

console.log(`Primeira letra da palavra ${cores[0]}: ${cor1_primeira_letra.slice()[0]}`);
console.log(`Primeira letra da palavra ${cores[1]}: ${cor2_primeira_letra.slice()[0]}`);
console.log(`Primeira letra da palavra ${cores[2]}: ${cor3_primeira_letra.slice()[0]}`);