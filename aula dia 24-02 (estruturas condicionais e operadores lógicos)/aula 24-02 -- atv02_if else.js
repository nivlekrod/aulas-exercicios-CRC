let ano_nascimento = 2018;
let date = new Date();
let ano_atual = date.getFullYear();
let idade = ano_atual - ano_nascimento;
if(idade > 18){
  console.log('Voce pode votar');
} else {
  console.log('Voce não pode votar');
}