/*
    Faça um algoritmo que receba o peso e a altura de uma pessoa e
    calcule o índice de massa corpórea. Ele mede a relação entre peso e altura


    Math.floor()
*/

let kg = 42;
let altura = 1.57;
let imc = kg/(altura * altura);
console.log("Indice de massa corporal é de :", Math.floor(imc));