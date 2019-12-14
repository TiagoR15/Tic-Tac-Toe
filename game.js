var player = 1;
var playerIcon = 'X';
var backgroundColor = "#6495ED";
var player1 = 'Current Player: Player1';
var player2 = 'Current Player: Player2';

function switchPlayer() {
  playerElement = document.querySelector("p");
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
  tdElement = document.querySelectorAll("td");

  var option = elemento;

  switch (option) {
    case 0: tdElement[0].textContent = playerIcon;
      tdElement[0].style.backgroundColor = backgroundColor;
      evaluateGame();
      break;
    case 1: tdElement[1].textContent = playerIcon;
      tdElement[1].style.backgroundColor = backgroundColor;
      evaluateGame();
      break;
    case 2: tdElement[2].textContent = playerIcon;
      tdElement[2].style.backgroundColor = backgroundColor;
      evaluateGame();
      break;
    case 3: tdElement[3].textContent = playerIcon;
      tdElement[3].style.backgroundColor = backgroundColor;
      evaluateGame();
      break;
    case 4: tdElement[4].textContent = playerIcon;
      tdElement[4].style.backgroundColor = backgroundColor;
      evaluateGame();
      break;
    case 5: tdElement[5].textContent = playerIcon;
      tdElement[5].style.backgroundColor = backgroundColor;
      evaluateGame();
      break;
    case 6: tdElement[6].textContent = playerIcon;
      tdElement[6].style.backgroundColor = backgroundColor;
      evaluateGame();
      break;
    case 7: tdElement[7].textContent = playerIcon;
      tdElement[7].style.backgroundColor = backgroundColor;
      evaluateGame();
      break;
    case 8: tdElement[8].textContent = playerIcon;
      tdElement[8].style.backgroundColor = backgroundColor;
      evaluateGame();
      break;
  }
}

function evaluateGame() {
  tdElement = document.querySelectorAll("td");

  if (tdElement[0].textContent === tdElement[1].textContent &&
    tdElement[1].textContent === tdElement[2].textContent) {
    if (tdElement[0].textContent === 'X') {
      alert("Player1 Wins!");
    } else {
      alert("Player2 Wins!");
    }
    //alert("Jogo Terminou!");
  }
  if (tdElement[3].textContent === tdElement[4].textContent &&
    tdElement[4].textContent === tdElement[5].textContent) {
    if (tdElement[3].textContent === 'X') {
      alert("Player1 Wins!");
    } else {
      alert("Player2 Wins!");
    }
  }
  if (tdElement[6].textContent === tdElement[7].textContent &&
    tdElement[7].textContent === tdElement[8].textContent) {
    if (tdElement[6].textContent === 'X') {
      alert("Player1 Wins!");
    } else {
      alert("Player2 Wins!");
    }
  }
  if (tdElement[0].textContent === tdElement[3].textContent &&
    tdElement[3].textContent === tdElement[6].textContent) {
    if (tdElement[0].textContent === 'X') {
      alert("Player1 Wins!");
    } else {
      alert("Player2 Wins!");
    }
  }
  if (tdElement[1].textContent === tdElement[4].textContent &&
    tdElement[4].textContent === tdElement[7].textContent) {
    if (tdElement[1].textContent === 'X') {
      alert("Player1 Wins!");
    } else {
      alert("Player2 Wins!");
    }
  }
  if (tdElement[2].textContent === tdElement[5].textContent &&
    tdElement[5].textContent === tdElement[8].textContent) {
    if (tdElement[2].textContent === 'X') {
      alert("Player1 Wins!");
    } else {
      alert("Player2 Wins!");
    }
  }
  if (tdElement[0].textContent === tdElement[4].textContent &&
    tdElement[4].textContent === tdElement[8].textContent) {
    if (tdElement[0].textContent === 'X') {
      alert("Player1 Wins!");
    } else {
      alert("Player2 Wins!");
    }
  }
  if (tdElement[2].textContent === tdElement[4].textContent &&
    tdElement[4].textContent === tdElement[6].textContent) {
    if (tdElement[2].textContent === 'X') {
      alert("Player1 Wins!");
    } else {
      alert("Player2 Wins!");
    }
  }

}