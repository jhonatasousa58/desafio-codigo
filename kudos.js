//var extenso = require('extenso')

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
function getKudosForUser(points) {
  var kudos = [];
  while(points > 1) {
    if(points >= KUDOS_TO_POINTS[4].value){
      kudos.push(KUDOS_TO_POINTS[4].name);
      points -= KUDOS_TO_POINTS[4].value;
    }else if(points >= KUDOS_TO_POINTS[3].value){
      kudos.push(KUDOS_TO_POINTS[3].name);
      points -= KUDOS_TO_POINTS[3].value;
    }else if(points >= KUDOS_TO_POINTS[2].value){
      kudos.push(KUDOS_TO_POINTS[2].name);
      points -= KUDOS_TO_POINTS[2].value;
    }else if(points >= KUDOS_TO_POINTS[1].value){
      kudos.push(KUDOS_TO_POINTS[1].name);
      points -= KUDOS_TO_POINTS[1].value;
    }else if(points >= KUDOS_TO_POINTS[0].value){
      kudos.push(KUDOS_TO_POINTS[0].name);
      points -= KUDOS_TO_POINTS[0].value;
    }else{
      points -= points;
    }
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

  for (let index = 0; index < kudos.length; index++) {
    ind = KUDOS_TO_REAL.map(function(e) { return e.name; }).indexOf(kudos[index]);
    valor += KUDOS_TO_REAL[ind].value;
    if(index > 0){
      kudos[index] = " " + kudos[index];
    }
  }

  var valorExtenso = extenso(valor);
  msg = "Você recebeu " + valorExtenso + " reais em retorno aos kudos " + kudos + "!";
  
  return msg;
}

module.exports = {
  getKudosForUser,
  getKudosValueMessageForUser,
};
