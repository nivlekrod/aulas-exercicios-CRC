/*
6 - Faça um programa que leia a idade de um nadador e
classifique-o numa das seguintes categorias abaixo:
    - Adulto (idade >= 18);
    - Juvenil (idade >= 14);
    - Infantil (idade >=9);
    - Mirim (Idade < 9).
*/

let idade = 21;

if (idade >= 18) {
    console.log(`O nadador tem ${idade} anos, ele se classifica como Adulto`);
} else if (idade >= 14) {
    console.log(`O nadador tem ${idade} anos, ele se classifica como Juvenil`);
} else if (idade >= 9) {
    console.log(`O nadador tem ${idade} anos, ele se classifica como Infantil`);
} else {
    console.log(`O nadador tem ${idade} anos, ele se classifica como Mirim`)
}