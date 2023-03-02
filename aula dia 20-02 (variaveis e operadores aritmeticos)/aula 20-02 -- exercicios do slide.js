//OS EXERCÍCIOS ABAIXOS PODEM SER ENCONTRADOS NA PÁGINA 20 DO SLIDE DISPONIBILIZADO NO CLASSROOM.
//OBS: OS EXERCÍCIOS ABAIXO NÃO TEM QUE SER NECESSARIAMENTE RESOLVIDOS DA MESMA MANEIRA, VOCÊS PODEM TER ENCONTRADO OUTRA RESOLUÇÃO E TER DADO O MESMO RESULTADO.
//UM PROBLEMA PODE TER MAIS DE UMA SOLUÇÃO.

/**
 * EXERCÍCIO 1 - Faça um algoritmo que imprima seu nome, sua idade e seu estado civil, colocando esse último item como um tipo booleano ( true / false ).
 * E no final, imprima também o tipo de cada variável. ( typeof )
 */
let nome = "Kelvin"; //digite seu nome
let idade = 20; //digite sua idade
let estado_civil = true; //utilize true p/ casado ou namorando e false p/ solteiro
console.log(nome, idade, estado_civil); //console.log para imprimir as variáveis.
console.log(typeof nome, typeof idade, typeof estado_civil); //console.log para imprimir os tipos de dados de cada variável

/**
 * EXERCÍCIO 2 - Faça um algoritmo que leia dois números informados e calcule a média desses valores, devendo mostrar ao final do algoritmo os números informados
 *  e o resultado da média. 
 */
let n1 = 10; //pode informar qualquer número
let n2 = 5; //pode informar qualquer número
let media = (n1 + n2)/2; //formula da média (NÃO é fixa, pode sofrer alterações de acordo com a quantidade de números)
console.log(n1, n2); //mostra os números informados
console.log("A MÉDIA É: ", media); //mostra o resultado do calculo da média

/**
 * EXERCÍCIO 3 - Faça um algoritmo que calcule a tabuada do número 5 (de 0 a 10)
 */
let num = 5;
console.log(num * 0);
console.log(num * 1);
console.log(num * 2);
console.log(num * 3);
console.log(num * 4);
console.log(num * 5);
console.log(num * 6);
console.log(num * 7);
console.log(num * 8);
console.log(num * 9);
console.log(num * 10);

/**
 * EXERCÍCIO 4 - Faça um algoritmo que leia um número e mostre o antecessor, o número e o sucessor;
 */
let numero = 2 //informe um número qualquer
const antecessor = numero - 1; //formula p/ saber o antecesssor
const sucessor = numero + 1; //formula p/ saber o sucessor
console.log(antecessor, numero, sucessor) //imprime as variáveis que foram pedidas


/**
 * EXERCÍCIO 5 - Faça um algoritmo que leia um valor, e mostre esse valor com 5% de desconto.
 */
const valor = 5;
const porcentagem = (valor * 5) / 100;
console.log("Desconto : ", porcentagem);
console.log("Valor atualizado :", valor - porcentagem);
