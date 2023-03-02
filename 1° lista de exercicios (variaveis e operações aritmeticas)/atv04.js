/**
  Elabore um algoritmo que receba o ano de nascimento de uma pessoa, e o ano atual, calcule e
  mostre:

a. A idade dessa pessoa em anos
b. A idade dessa pessoa em meses
c. A idade dessa pessoa em dias
d. A idade dessa pessoa em semanas
Obs: Considere que o ano a ser informado deverá ser menor ou igual ao
ano atual
 

 */
const ano_nascimento = 2002;
let date = new Date();
let ano_atual = date.getFullYear();
let idade = ano_atual - ano_nascimento;
console.log("Idade em anos", idade);
let idade_meses = idade * 12;
console.log("Idade em meses", idade_meses);
let idade_dias = idade * 365;
console.log("Idade em dias", idade_dias);
let idade_semanas = idade * 52;
console.log("Idade semanas", idade_semanas);