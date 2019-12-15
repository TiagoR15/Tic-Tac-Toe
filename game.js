/**
 * Variáveis da app
 * 
 * player - Player a jogar
 * playerIcon - Icone do player a jogar
 * backgroundColor - Cor da célula do player a jogar
 * player1 - Mensagem com informação de qual jogador jogar
 * player2 - Mensagem com informação de qual jogador jogar
 * player1Wins - Número de wins do player 1
 * player2Wins - Número de wins do player 2
 * tdElement - tabela de jogo
 */
var player = 1;
var playerIcon = 'X';
var backgroundColor = "#6495ED";
var player1 = 'Current Player: Player1';
var player2 = 'Current Player: Player2';
var player1Wins = 0;
var player2Wins = 0;
var tdElement = document.querySelectorAll("td");

function freeCells(){
  let freeCells = 0;

  for(let i=0; i<tdElement.length; i++){
    if(!verify(i)){
      freeCells++;
    }
  }

  return freeCells;
}

function verify(cell) {
  if (tdElement[cell].textContent === 'X' || tdElement[cell].textContent === 'O') {
    return true;
  }
  return false;
}

function switchPlayer() {
  let playerElement = document.querySelector("p");
  if (player === 1) {
    player = 2;
    playerIcon = 'O';
    backgroundColor = "#A52A2A";
    playerElement.textContent = player2;
  } else {
    player = 1;
    playerIcon = 'X';
    backgroundColor = "#6495ED";
    playerElement.textContent = player1;
  }
}

function move(elemento) {
  var option = elemento;

  switch (option) {
    case 0:
      if (!verify(0)) {
        tdElement[0].textContent = playerIcon;
        tdElement[0].style.backgroundColor = backgroundColor;
        evaluateGame();
        switchPlayer();
        break;
      }
      alert("Cell Locked!")
      break;

    case 1:
      if (!verify(1)) {
        tdElement[1].textContent = playerIcon;
        tdElement[1].style.backgroundColor = backgroundColor;
        evaluateGame();
        switchPlayer();
        break;
      }
      alert("Cell Locked!")
      break;

    case 2:
      if (!verify(2)) {
        tdElement[2].textContent = playerIcon;
        tdElement[2].style.backgroundColor = backgroundColor;
        evaluateGame();
        switchPlayer();
        break;
      }
      alert("Cell Locked!")
      break;

    case 3:
      if (!verify(3)) {
        tdElement[3].textContent = playerIcon;
        tdElement[3].style.backgroundColor = backgroundColor;
        evaluateGame();
        switchPlayer();
        break;
      }
      alert("Cell Locked!")
      break;

    case 4:
      if (!verify(4)) {
        tdElement[4].textContent = playerIcon;
        tdElement[4].style.backgroundColor = backgroundColor;
        evaluateGame();
        switchPlayer();
        break;
      }
      alert("Cell Locked!")
      break;

    case 5:
      if (!verify(5)) {
        tdElement[5].textContent = playerIcon;
        tdElement[5].style.backgroundColor = backgroundColor;
        evaluateGame();
        switchPlayer();

        break;
      }
      alert("Cell Locked!")
      break;

    case 6:
      if (!verify(6)) {
        tdElement[6].textContent = playerIcon;
        tdElement[6].style.backgroundColor = backgroundColor;
        evaluateGame();
        switchPlayer();
        break;
      }
      alert("Cell Locked!")
      break;

    case 7:
      if (!verify(7)) {
        tdElement[7].textContent = playerIcon;
        tdElement[7].style.backgroundColor = backgroundColor;
        evaluateGame();
        switchPlayer();
        break;
      }
      alert("Cell Locked!")
      break;

    case 8:
      if (!verify(8)) {
        tdElement[8].textContent = playerIcon;
        tdElement[8].style.backgroundColor = backgroundColor;
        evaluateGame();
        switchPlayer();
        break;
      }
      alert("Cell Locked!")
      break;
  }
}

function evaluateGame() {
  player1winsElement = document.querySelector("p[name=player1Wins]");
  player2winsElement = document.querySelector("p[name=player2Wins]");

  if (tdElement[0].textContent === tdElement[1].textContent &&
    tdElement[1].textContent === tdElement[2].textContent) {
    if (tdElement[0].textContent === 'X') {
      player1Wins++;
      player1winsElement.textContent = "Player1 Wins: " + player1Wins;
      alert("Player1 Wins!");
    } else {
      player2Wins++;
      player2winsElement.textContent = "Player2 Wins: " + player2Wins;
      alert("Player2 Wins!");
    }
    resetGame();
  } else if (tdElement[3].textContent === tdElement[4].textContent &&
    tdElement[4].textContent === tdElement[5].textContent) {
    if (tdElement[3].textContent === 'X') {
      player1Wins++;
      player1winsElement.textContent = "Player1 Wins: " + player1Wins;
      alert("Player1 Wins!");
    } else {
      player2Wins++;
      player2winsElement.textContent = "Player2 Wins: " + player2Wins;
      alert("Player2 Wins!");
    }
    resetGame();
  } else if (tdElement[6].textContent === tdElement[7].textContent &&
    tdElement[7].textContent === tdElement[8].textContent) {
    if (tdElement[6].textContent === 'X') {
      player1Wins++;
      player1winsElement.textContent = "Player1 Wins: " + player1Wins;
      alert("Player1 Wins!");
    } else {
      player2Wins++;
      player2winsElement.textContent = "Player2 Wins: " + player2Wins;
      alert("Player2 Wins!");
    }
    resetGame();
  } else if (tdElement[0].textContent === tdElement[3].textContent &&
    tdElement[3].textContent === tdElement[6].textContent) {
    if (tdElement[0].textContent === 'X') {
      player1Wins++;
      player1winsElement.textContent = "Player1 Wins: " + player1Wins;
      alert("Player1 Wins!");
    } else {
      player2Wins++;
      player2winsElement.textContent = "Player2 Wins: " + player2Wins;
      alert("Player2 Wins!");
    }
    resetGame();
  } else if (tdElement[1].textContent === tdElement[4].textContent &&
    tdElement[4].textContent === tdElement[7].textContent) {
    if (tdElement[1].textContent === 'X') {
      player1Wins++;
      player1winsElement.textContent = "Player1 Wins: " + player1Wins;
      alert("Player1 Wins!");
    } else {
      player2Wins++;
      player2winsElement.textContent = "Player2 Wins: " + player2Wins;
      alert("Player2 Wins!");
    }
    resetGame();
  } else if (tdElement[2].textContent === tdElement[5].textContent &&
    tdElement[5].textContent === tdElement[8].textContent) {
    if (tdElement[2].textContent === 'X') {
      player1Wins++;
      player1winsElement.textContent = "Player1 Wins: " + player1Wins;
      alert("Player1 Wins!");
    } else {
      player2Wins++;
      player2winsElement.textContent = "Player2 Wins: " + player2Wins;
      alert("Player2 Wins!");
    }
    resetGame();
  } else if (tdElement[0].textContent === tdElement[4].textContent &&
    tdElement[4].textContent === tdElement[8].textContent) {
    if (tdElement[0].textContent === 'X') {
      player1Wins++;
      player1winsElement.textContent = "Player1 Wins: " + player1Wins;
      alert("Player1 Wins!");
    } else {
      player2Wins++;
      player2winsElement.textContent = "Player2 Wins: " + player2Wins;
      alert("Player2 Wins!");
    }
    resetGame();
  } else if (tdElement[2].textContent === tdElement[4].textContent &&
    tdElement[4].textContent === tdElement[6].textContent) {
    if (tdElement[2].textContent === 'X') {
      player1Wins++;
      player1winsElement.textContent = "Player1 Wins: " + player1Wins;
      alert("Player1 Wins!");
    } else {
      player2Wins++;
      player2winsElement.textContent = "Player2 Wins: " + player2Wins;
      alert("Player2 Wins!");
    }
    resetGame();
  } else if(freeCells() === 0){
    resetGame();
    alert("Game Draw!");
  }
}

function resetGame() {
  for (var i = 0; i < tdElement.length; i++) {
    tdElement[i].textContent = i;
    tdElement[i].style.backgroundColor = "#FFFFFF";
  }
}