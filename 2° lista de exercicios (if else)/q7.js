/*
7 - Faça um programa que leia 3 valores, e mostre eles em
ordem decrescente, utilizando if else.
*/

let n1 = 0;
let n2 = 1;
let n3 = 2;

let maior, meio, menor;

if (n3 > n2 && n3 > n1) {
  maior = n3;
  if (n2 > n1) {
    meio = n2;
    menor = n1;
  } else {
    meio = n1;
    menor = n2;
  }
}

if (n2 > n3 && n2 > n1) {
  maior = n2;
  if (n3 > n1) {
    meio = n3;
    menor = n1;
  } else {
    meio = n1;
    menor = n3;
  }
}

if (n1 > n3 && n1 > n2) {
  maior = n1;
  if (n2 > n3) {
    meio = n2;
    menor = n3;
  } else {
    meio = n3;
    menor = n2;
  }
}

console.log(maior, meio, menor);
