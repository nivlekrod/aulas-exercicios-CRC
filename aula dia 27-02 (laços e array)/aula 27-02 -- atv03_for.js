let media = 0;
let soma = 0;
let valor = 0;
let contador_media = 0;
for(let i = 0; i < 10;i++){
  valor = i;
  soma =+ soma + valor;
  console.log(soma)
  contador_media++;
}

media = soma/contador_media;
console.log(`A soma dos valores é ${soma}`);
console.log(`A média dos valores é ${media}`);
