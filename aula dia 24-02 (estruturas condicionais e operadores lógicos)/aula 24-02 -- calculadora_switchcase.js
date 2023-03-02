/*
  Faça uma calculadora que realize as operações de soma, subtração, adição, e divisão
  Utilize o switch e case para fazer que o usuario escolha a opção indivudual de cada uma.
  OPÇÕES DE OPERAÇÕES: 
  1- SOMA
  2- SUBTRAÇÃO
  3- MULTIPLICAÇÃO
  4- DIVISÃO
*/

let valor1 = 10;
let valor2 = 4;
let opcao = 2;

switch(opcao){
  case 1:
    let soma = valor1 + valor2;
    console.log(`O valor da soma ${soma}`);
    break;
  case 2:
    let subtracao = valor1 - valor2;
    console.log(`O valor da subtração ${subtracao}`);
    break;
  case 3:
    let multiplicacao = valor1 * valor2;
    console.log(`O valor da multiplicação ${multiplicacao}`);
    break;
  case 4:
    let divisao = valor1 / valor2;
    console.log(`Valor da divisão ${divisao}`);
    break;
  default:
    console.log('Essa opção não existe');
}
