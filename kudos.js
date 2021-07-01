//Chamando a biblioteca extenso, responsavel por escrever o valor por extenso
const extenso = require("extenso");

// Conversão de kudos para pontos
const KUDOS_TO_POINTS = [
  { name: 'OK', value: 5 },
  { name: 'NICE', value: 10 },
  { name: 'GOOD', value: 20 },
  { name: 'GREAT', value: 50 },
  { name: 'SUPER', value: 100 },
];

// Conversão de kudos para reais
const KUDOS_TO_REAL = [
  { name: 'OK', value: 2 },
  { name: 'NICE', value: 5 },
  { name: 'GOOD', value: 8 },
  { name: 'GREAT', value: 15 },
  { name: 'SUPER', value: 25 },
];

/* 
  Recebe: um int representando o número de pontos do usuário
  Retorna: um array contendo os kudos. Ex.: ['OK', 'GOOD'] 
*/
//reverse no kudo_to_points para comparar do maior para o menor
KUDOS_TO_POINTS.reverse();

function getKudosForUser(points) {
  var kudos = [];
  var p = 0;
  //enquanto os pontos for maior que quatro vai ficar comparando
  while(points > 4){
    //procura o Kudo correspondente dada a pontuacao
    var kudo = KUDOS_TO_POINTS.find(e => {return points >= e.value;});
    //pega o valor de pontos do kudo para diminuir dos pontos totais passados
    p = kudo.value;
    //adiciona no Array de kudos
    kudos.push(kudo.name);
    //diminui o valor do kudo dos pontos totais
    points -= p;
  }

  return kudos;
}

/* 
  Recebe: Recebe um array contendo os nomes dos kudos de um usuário. Ex.: ['OK', 'GOOD']
  Retorna: a mensagem padrão com o valor em reais dos kudos por extenso. Ex.: Parabéns, você ganhou vinte e cinco reais
*/
function getKudosValueMessageForUser(kudos) {
  var msg;
  var valor = 0;
  var ind = 0;

  if(kudos.length != 0){
    //for responsavel por conveter os kudos em reais e adicionar um espaço a partir do segundo kudo para exibir a mensagem
    for (let index = 0; index < kudos.length; index++) {
      ind = KUDOS_TO_REAL.find(e => {return e.name == kudos[index];});
      valor += ind.value;
      if(index > 0){
        kudos[index] = " " + kudos[index];
      }
    }
    //condicao para garantir que valor será sempre menor que 1 milhão de reais
    if(valor >= 1000000) valor = 999999;
    //pega o valor e escreve por extenso
    var valorExtenso = extenso(valor);
    //Mensagem de retorno para o colaborador
    msg = "Você recebeu " + valorExtenso + " reais em retorno aos kudos " + kudos + "!";
  }else{
    msg = "kudos insuficientes para converter em reais!";
  }

  return msg;
}

module.exports = {
  getKudosForUser,
  getKudosValueMessageForUser,
};
