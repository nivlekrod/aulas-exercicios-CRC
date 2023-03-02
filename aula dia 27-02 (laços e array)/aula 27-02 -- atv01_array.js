let notas = [5, 10, 4];
let media = (notas[0] + notas[1] + notas[2]) / notas.length;
console.log(`A sua média é ${media.toFixed(2)}`);
//.toFixed() limita a quantidade de número após a vírgula.

/*  OUTRA FORMA
let notas = Array();
notas.push(5);
notas.push(10);
notas.push(4);

let media = (notas[0] + notas[1] + notas[2]) / notas.length;
console.log(`Media = ${media.toFixed(2)}`);
*/
