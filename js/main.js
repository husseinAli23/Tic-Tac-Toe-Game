

const btnMessage = $('#btn');
const textMessage = $('.message p');
const gameBox = $('.game');
const popup = $('.popup');
const resetGame = $('#reset');
const playSound = $('#sound');
const muteSound = $('#mute');
const playerturn = $('.round span');
const zerozero = $('#zero-0');
const zeroone = $('#zero-1');
const zerotwo = $('#zero-2');

const onezero = $('#one-0');
const oneone = $('#one-1');
const onetwo = $('#one-2');

const twozero = $('#two-0');
const twoone = $('#two-1');
const twotwo = $('#two-2');

let gameBoard;
let audio = null;
let play;
let playround ;
popup.hide();
playerturn.text(' O');
reset();


/** play music  */
playSound.click(function musicPlay() {
  audio = new Audio('assets/music.mp3');
  audio.play();
  muteSound.show();
  playSound.hide();
});

/** mute music  */
muteSound.click(function () {
  audio.pause();
  muteSound.hide();
  playSound.show();
});


/***** writeOnTheBoard */
zerozero.click(function () {
  writeOnTheBoard(zerozero, 0, 0);
});

zeroone.click(function () {
  writeOnTheBoard(zeroone, 0, 1);
});

zerotwo.click(function () {
  writeOnTheBoard(zerotwo, 0, 2)
});

onezero.click(function () {
  writeOnTheBoard(onezero, 1, 0)
});
oneone.click(function () {
  writeOnTheBoard(oneone, 1, 1)
});
onetwo.click(function () {
  writeOnTheBoard(onetwo, 1, 2)
});

twozero.click(function () {
  writeOnTheBoard(twozero, 2, 0)
});

twoone.click(function () {
  writeOnTheBoard(twoone, 2, 1)
});

twotwo.click(function () {
  writeOnTheBoard(twotwo, 2, 2)
});

function writeOnTheBoard(var1, row, col) {
  if (var1.hasClass('empty')) {
    var1.removeClass('empty');
    let XO = palyTiem();
    gameBoard[row][col] = XO;
    var1.text(XO);
    checkForWin(XO);
  }
}
/**
 * * play round
 */
function palyTiem() {
  if (playround % 2 == 0) {
    play = 'O';
    playround++;
    playerturn.text(' X');
  } else {
    play = 'X';
    playround++;
    playerturn.text(' O');
  }
  return play;
}


/**  check for player win */
function checkForWin(play) {
  if (
    //horz
    gameBoard[0][0] === play && gameBoard[0][1] === play && gameBoard[0][2] === play ||
    gameBoard[1][0] === play && gameBoard[1][1] === play && gameBoard[1][2] === play ||
    gameBoard[2][0] === play && gameBoard[2][1] === play && gameBoard[2][2] === play ||
    //vor
    gameBoard[0][0] === play && gameBoard[1][0] === play && gameBoard[2][0] === play ||
    gameBoard[0][1] === play && gameBoard[1][1] === play && gameBoard[2][1] === play ||
    gameBoard[0][2] === play && gameBoard[1][2] === play && gameBoard[2][2] === play ||
    //aiz
    gameBoard[0][0] === play && gameBoard[1][1] === play && gameBoard[2][2] === play ||
    gameBoard[0][2] === play && gameBoard[1][1] === play && gameBoard[2][0] === play) {
      popup.show(); 
    textMessage.text(play + ' is win');
  } else if (!gameBox.hasClass('empty')) {
      popup.show(); 
      textMessage.text('The game end. No one win');
  }
}
btnMessage.click(function(){
  popup.hide();
  reset();
});

/* --------------- reset the game --------------------- */
resetGame.click(function () {
  reset();
});

function reset() {
  play = 'O';
  playround = 0;
  playerturn.text('O');
  gameBoard = [['', '', ''], ['', '', ''], ['', '', ''],];
  gameBox.text(''); gameBox.addClass('empty');
}