/*
  Calcule o indice de massa corporal

*/
let altura = 1.57;
let peso = 47;
let imc = peso/(altura * altura);

console.log('Seu imc é ', imc);

if(imc < 18.5){
  console.log('Magreza');
} else if (imc > 18.5 && imc < 24.9){
  console.log('NORMAL');
} else if(imc > 25.0 && imc < 29.9){
  console.log('Sobrepeso');
} else if(imc > 30.0 && imc < 39.9){
  console.log('OBESIDADE');
} else if(imc > 40){
  console.log('OBESIDADE GRAVE');
}
console.log(`${imc}`)