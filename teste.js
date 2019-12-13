var jogo = [['-', '|', '-', '|', '-'], ['-', '|', '-', '|', '-'], ['-', '|', '-', '|', '-']];

var player1 = {
  move(linha, coluna){
    jogo[linha][coluna] = 'X';
  }
}

var player2 = {
  move(linha, coluna){
    jogo[linha][coluna] = 'O';
  }
}

function render(){
  console.log(jogo);
}

render();

console.log('Primeira jogada:');
player1.move(0,0);
player2.move(2,4);

render();

console.log('Segunda jogada:');
player1.move(2,0);
player2.move(1,0);

render();

console.log('Terceira jogada:');
player1.move(0,4);
player2.move(0,2);

render();

console.log('Quarta jogada:');
player1.move(1,2);
player2.move(1,4);

render();

console.log('Fim do jogo!');
jogo[0][4] = '/';
jogo[1][2] = '/';
jogo[2][0] = '/';

render();
