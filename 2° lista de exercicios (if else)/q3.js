/*
3 - Faça um script que receba um número correspondente a um
determinado ano e em seguida informe se este ano é ou não
bissexto.
*/

let ano = 2021;
if (ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0)) {
  console.log(`O ano ${ano} é bissexto`);
} else {
  console.log(`O ano ${ano} não é bissexto`);
}
