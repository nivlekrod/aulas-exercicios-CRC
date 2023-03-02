/*
8 - Para doar sangue é necessário ter entre 18 a 67 anos,
faça um programa que receba uma idade de uma pessoa, e diga
se ela pode doar sangue ou não. Use operadores lógicos como
&& (E) ||(OU).
    - Note que, para doar sangue é necessário ter 18 anos ou
    mais, e também é necessário ter 67 anos ou menos.
    - Ou seja, podemos fazer utilizando o operador lógico &.
*/

let idade = 68;
if (idade >= 18 && idade <= 67) {
  console.log(`O doador tem ${idade} anos, então ele pode doar sangue`);
} else {
  console.log(`O doador tem ${idade} anos, então ele não pode doar sangue`);
}
