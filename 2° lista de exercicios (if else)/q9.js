/*
9 - Escreva um programa que receba as variáveis dia, mês e
ano do aniversário de uma pessoa, e diga se a data é válida
ou não. Caso não seja, diga o motivo. Suponha que todos os
meses tenham 31 dias, e que estamos no ano de 2023.

    - Um dia válido é aquele que está entre 1 e 31. Um número
    abaixo de 1 ou acima de 31 será considerado inválido.
    - Um mês válido é aquele que está entre 1 e 12. Um número
    abaixo de 1 ou acima de 12 será considerado inválido.
    - Um ano de nascimento válido é aquele que está abaixo do
    ano atual. Como estamos em 2023, se alguém fornecer
    dados de ano 2024 ou outro ano acima disso, será
    considerado inválido.
*/

let dia, mes, ano;
dia = 31;
mes = 12;
ano = 2023;

if (dia >= 1 && dia <= 31) {
  if (mes >= 1 && mes <= 12) {
    if (ano < 2024) {
      console.log(`A data ${dia}/${mes}/${ano} é válida`);
    } else {
      console.log(
        `A data ${dia}/${mes}/${ano} é inválida, pois o ano atual está sendo ultrapassado`
      );
    }
  } else {
    console.log(
      `A data ${dia}/${mes}/${ano} é inválida, pois o mês não existe, não está entre 1(janeiro) e 12(dezembro)`
    );
  }
} else {
  console.log(
    `A data ${dia}/${mes}/${ano} é inválida, pois o dia não existe, não está entre 1 e 31`
  );
}