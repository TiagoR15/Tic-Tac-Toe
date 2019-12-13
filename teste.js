var jogo = [['-', '|', '-', '|', '-'], ['-', '|', '-', '|', '-'], ['-', '|', '-', '|', '-']];

console.log(jogo);

console.log('Primeira jogada:');
jogo[0][0] = 'X';
jogo[2][4] = 'O';

console.log(jogo);

console.log('Segunda jogada:');
jogo[2][0] = 'X';
jogo[1][0] = 'O';

console.log(jogo);

console.log('Terceira jogada:');
jogo[0][4] = 'X';
jogo[0][2] = 'O';

console.log(jogo);

console.log('Quarta jogada:');
jogo[1][2] = 'X';
jogo[1][4] = 'O';

console.log(jogo);

console.log('Fim do jogo!');
jogo[0][4] = '/';
jogo[1][2] = '/';
jogo[2][0] = '/';

console.log(jogo);
