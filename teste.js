var jogo = [['-', '|', '-', '|', '-'], ['-', '|', '-', '|', '-'], ['-', '|', '-', '|', '-']];

var player1 = {
  move(linha, coluna){
    jogo[linha][coluna] = 'X';
  }
}

function render(){
  console.log(jogo);
}

render();

console.log('Primeira jogada:');
player1.move(0,0);
jogo[2][4] = 'O';

render();

console.log('Segunda jogada:');
player1.move(2,0);
//jogo[2][0] = 'X';
jogo[1][0] = 'O';

render();

console.log('Terceira jogada:');
player1.move(0,4);
//jogo[0][4] = 'X';
jogo[0][2] = 'O';

render();

console.log('Quarta jogada:');
player1.move(1,2);
//jogo[1][2] = 'X';
jogo[1][4] = 'O';

render();

console.log('Fim do jogo!');
jogo[0][4] = '/';
jogo[1][2] = '/';
jogo[2][0] = '/';

render();
