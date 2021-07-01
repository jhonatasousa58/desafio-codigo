const kudos = require('./kudos');

test('test getKudosForUser', () => {
  expect(kudos.getKudosForUser(0)).toEqual([]);
  expect(kudos.getKudosForUser(25)).toEqual(['GOOD', 'OK']);
  expect(kudos.getKudosForUser(30)).toEqual(['GOOD', 'NICE']);
  expect(kudos.getKudosForUser(40)).toEqual(['GOOD', 'GOOD']);
  expect(kudos.getKudosForUser(100)).toEqual(['SUPER']);
  expect(kudos.getKudosForUser(135)).toEqual(['SUPER', 'GOOD', 'NICE','OK']);
  expect(kudos.getKudosForUser(185)).toEqual(['SUPER', 'GREAT', 'GOOD', 'NICE','OK']);
  expect(kudos.getKudosForUser(295)).toEqual(['SUPER', 'SUPER', 'GREAT', 'GOOD', 'GOOD', 'OK']);
  expect(kudos.getKudosForUser(352)).toEqual(['SUPER', 'SUPER', 'SUPER', 'GREAT']);
  expect(kudos.getKudosForUser(555)).toEqual(['SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'GREAT', 'OK']);
  expect(kudos.getKudosForUser(3658)).toEqual(['SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 
  'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 
  'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 
  'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'GREAT', 'OK']);
});

test('test getKudosValueMessageForUser', () => {
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(0)))
    .toEqual('kudos insuficientes para converter em reais!');
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(4)))
    .toEqual('kudos insuficientes para converter em reais!');
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(25)))
    .toEqual('Você recebeu dez reais em retorno aos kudos GOOD, OK!');
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(30)))
    .toEqual('Você recebeu treze reais em retorno aos kudos GOOD, NICE!');
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(35)))
    .toEqual('Você recebeu quinze reais em retorno aos kudos GOOD, NICE, OK!');
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(40)))
    .toEqual('Você recebeu dezesseis reais em retorno aos kudos GOOD, GOOD!');
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(100)))
    .toEqual('Você recebeu vinte e cinco reais em retorno aos kudos SUPER!');
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(135)))
    .toEqual('Você recebeu quarenta reais em retorno aos kudos SUPER, GOOD, NICE, OK!');
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(3658)))
    .toEqual('Você recebeu novecentos e dezessete reais em retorno aos kudos SUPER, SUPER, ' +
    'SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, ' +
    'SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, GREAT, OK!');
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(5985)))
    .toEqual('Você recebeu mil quinhentos e cinco reais em retorno aos kudos SUPER, SUPER, SUPER, ' +
    'SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, ' +
    'SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, ' +
    'SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, ' +
    'SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, GREAT, GOOD, NICE, OK!');
});
