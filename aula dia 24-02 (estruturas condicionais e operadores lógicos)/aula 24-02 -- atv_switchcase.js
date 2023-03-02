/*
Faça um código com switch e case, e para cada caso, diga se o usuario tem permissão comum, gerente, diretor;
*/

let permissao = "comum";
permissao = permissao.toUpperCase();
console.log(permissao);

switch (permissao) {
  case "COMUM":
    console.log("Voce é um usuário comum");
    break;
  case "GERENTE":
    console.log("Você é gerente");
    break;
  case "DIRETOR":
    console.log("Voce é o diretor");
  default:
    console.log("Essa opção não existe");
}
