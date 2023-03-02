/*
5 - Faça um script que leia 2 números e em seguida faça as
seguintes operações. Para cada if uma operação:
    1 - par ou ímpar;
    2 - positivo ou negativo;
    3 - inteiro ou decimal.
*/

let n1 = 10;
let n2 = 5;

if (n1 % 2 == 0) {
  console.log(`${n1} é Par`);
} else {
  console.log(`${n1} é Ímpar`);
}

if (n1 > 0) {
  console.log(`${n1} é Positivo`);
} else {
  console.log(`${n1} é Negativo`);
}

if (n1 % 1 === 0) {
  console.log(`${n1} é Inteiro`);
} else {
  console.log(`${n1} é Decimal`);
}

if (n2 % 2 == 0) {
  console.log(`${n2} é Par`);
} else {
  console.log(`${n2} é Ímpar`);
}

if (n2 > 0) {
  console.log(`${n2} é Positivo`);
} else {
  console.log(`${n2} é Negativo`);
}

if (n2 % 1 === 0) {
  console.log(`${n2} é Inteiro`);
} else {
  console.log(`${n2} é Decimal`);
}
