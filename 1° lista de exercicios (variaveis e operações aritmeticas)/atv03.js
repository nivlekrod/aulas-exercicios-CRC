/**
    Elabore um algoritmo que receba o salário de um funcionário, calcule e
mostre o novo salário,
sabendo-se que este salário sofreu um aumento de 25%.

 */


const ano_nascimento = 2002
console.log(ano_nascimento)
let date = new Date();
let ano_atual = date.getFullYear()
let idade = ano_atual - ano_nascimento;
console.log("Sua idade é", idade, "anos");