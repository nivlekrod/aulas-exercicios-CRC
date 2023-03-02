/**
    Elabore um algoritmo que receba o salário de um funcionário, calcule e
mostre o novo salário,
sabendo-se que este salário sofreu um aumento de 25%.

 */


let salario = 1200;
const aumento = 25;
let novoSalario = ((salario*aumento)/100) + salario;
console.log(novoSalario);

