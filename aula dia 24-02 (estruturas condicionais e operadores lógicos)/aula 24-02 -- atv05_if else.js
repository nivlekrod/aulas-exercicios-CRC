let n1 = 10;
let n2 = 10;
let n3 = 1;

let menor, meio, maior;

if((n1 < n2) && (n1 < n3)){
  menor = n1;
  if(n2 < n3){
    meio = n2;
    maior = n3;
  } else {
    meio = n3;
    maior = n2;
  }
}

if((n2 < n1) && (n2 < n3)){
  menor = n2;
  if(n1 < n3){
    meio = n1;
    maior = n2;
  } else {
    meio = n3;
    maior = n1;
  }
}

if((n3 < n1) && (n3 < n1)){
  menor = n3;
  if(n2 < n1){
    meio = n2;
    maior = n1;
  } else {
    meio = n1;
    maior = n2;
  }
}
console.log(menor, meio, maior)