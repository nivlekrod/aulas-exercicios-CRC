/*
1 - Faça um script que receba duas notas de um aluno. Em
seguida ele deve calcular a média do aluno e dar o seguinte
resultado: 
- A mensagem "Aprovado", se a média alcançada for maior
  ou igual a sete;
- A mensagem "Reprovado", se a média for menor do que
  sete;
- A mensagem "Aprovado com Distinção", se a média for
  igual a dez.
 */
let n1 = 10;
let n2 = 5;
let media = (n1 + n2) / 2;
if (media > 10) {
  console.log("APROVADO COM DISTINÇÃO");
} else if (media >= 7) {
  console.log("APROVADO");
} else {
  console.log("REPROVADO");
}