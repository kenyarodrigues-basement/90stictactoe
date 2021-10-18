//Player variable will control whose turn it is
var player = 1;
//Variable controls turns
var turn = 0;
//Variable controls winner
var winner = '';

//Inicialializing each square with the HTML element
const square1 = document.getElementById("1");
const square2 = document.getElementById("2");
const square3 = document.getElementById("3");
const square4 = document.getElementById('4');
const square5 = document.getElementById("5");
const square6 = document.getElementById('6');
const square7 = document.getElementById("7");
const square8 = document.getElementById("8");
const square9 = document.getElementById("9");

// Declaring the board - board is an array [3, 3]
const board = [[square1, square2, square3], [square4, square5, square6], [square7, square8, square9]];

function play(square){
  if (document.getElementById(square).hasAttribute("title") == true){
    document.getElementById(square).innerHTML = markOnBoard(square);
    turn++;
    //Disables square after selected by player
   document.getElementById(square).removeAttribute("title");
 }
  checkBoard();
  debug();
  //Alert draw
  if (turn === 9 && winner === ''){
    alert ('No winners this round');
    playAgain();
  }
}
//const teste = () => {}
//The function marks X or O depending on whose turn it is
function markOnBoard(square){
// If player == 1, it assigns X on board
  if (player == 1){
// Allows the other player to play
    player = 0;
    return 'X';
  }
  else {
    player = 1;
    return 'O';
  }
}

function checkBoard(){
  //At least 5 turns need to be played to get a winner
  if (turn < 5) return;
  //Scan the board
  board.forEach((line, i)=>{
    line.forEach((square, j)=>{
      if(line[0].innerHTML == line[1].innerHTML && line[1].innerHTML == line[2].innerHTML && line[0].innerHTML !== ' '){
        winner = board[i][0].innerHTML;
        alert ('Winner is ' + winner);
        playAgain();
      }
      //Column checking for winner
      else if((board[0][j].innerHTML == board[1][j].innerHTML) && (board[1][j].innerHTML == board[2][j].innerHTML && board[0][j].innerHTML !== ' ')){
        winner = board[0][j].innerHTML;
        alert ('Winner is ' + winner);
        playAgain();
      }
      //Diagonal checking for winner
      else if((board[0][0].innerHTML == board[1][1].innerHTML && board[1][1].innerHTML == board[2][2].innerHTML) || (board[0][2].innerHTML == board[1][1].innerHTML && board[1][1].innerHTML == board[2][0].innerHTML) && board[1][1].innerHTML !== ' '){
        winner = board[1][1].innerHTML;
        alert ('Winner is ' + winner);
        playAgain();
      }
      else if (board[i][j].innerHTML === '' && winner === ''){
        return;
      }
    });
  });
}

function playAgain(){
  let answer = window.confirm("Play again?")
  if (answer){
    resetGame(reset);
  }
  else{
    alert("See you again soon");
  }
}

function resetGame(reset){
  window.location.reload(true);
      
}



function showPlayerNames(){
  var p1 = document.getElementById("p1").value;
   idPlayer1.innerHTML= p1;
   var p2 = document.getElementById("p2").value;
    idPlayer2.innerHTML= p2;
}

function debug(){
  console.log('turn', turn);
  console.log('board', board.map(line => line.map(square => square.innerHTML)));
  console.log(winner);
}
