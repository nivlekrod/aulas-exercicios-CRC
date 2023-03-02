/**
 * No Javascript existem algumas palavras reservadas, mas afinal o que isso significa?
 * Significa que algumas palavras, são utilizadas para outro propósito, por exemplo como sabemos var, let e const
 * utilizados para declaração de variáveis, logo não podemos utilizar essas palavras como identificadores, no entanto,
 * o Javascript é uma linguagem case-sensitive isso significa que ele levar em consideração as palavras maiusculas e minusculas,
 * então podemos usar estas palavras se estiverem escritas de maneira diferente, por exemplo:
*/

let Var = 10;
console.log(Var); //se aproveita do case-sensitive

// let var = 20;
// console.log(var); //não executa por ser palavra reservada