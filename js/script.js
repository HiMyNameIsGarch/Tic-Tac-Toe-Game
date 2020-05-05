var tabel = [[], [], [],];
var winner = '';
var gameStart;
var playerTurn;
var turn = 1;
var p1Score = 0;
var p2Score = 0;
var tfButtons;
var imagePlacer;
var resetGameVisibility = document.getElementById('resetGameVis');
var restartGameVisibility = document.getElementById('restartGameVis');
var startGameVisibility = document.getElementById('startGameVis');
var visible = document.getElementById('visibility');
var tfPlayerTurn = document.getElementById('playerTurn');
var WarningMessage = document.getElementById('warningMessage');
var tfScore = document.getElementById('score');
var tfWinner = document.getElementById('winner');
var xInHtml = '<img src="images/X.png" alt="X">';
var zeroInHtml = '<img src="images/0.png" alt="0">';
var button = '<input type="button" id="button" onclick="clickBtn()">';
function startGame() {
    playerTurn = 1;
    tfScore.innerHTML = 'Score: <br><br> Player 1 : ' + p1Score + '<br> Player 2 : ' + p2Score;
    tfPlayerTurn.innerHTML = 'Player\'s ' + playerTurn + ' round';
    for (let i = 1; i <= 9; i++) {
        tfButtons = document.getElementById('p' + i);
        tfButtons.innerHTML = '<input type="button" id="button' + i + '" onclick="clickBtn' + i + '()"></input>';
    }
    resetGameVisibility.style.visibility = 'hidden';
    WarningMessage.style.visibility = 'hidden';
    visible.style.visibility = 'visible';
    startGameVisibility.style.visibility = 'hidden';
    restartGameVisibility.style.visibility = 'hidden';
    gameStart = true;

}
function restartGame() {
    gameStart = true;
    winner = '';
    tfWinner.innerHTML = '';
    changePlayerTurn(playerTurn);
    tfPlayerTurn.innerHTML = 'Player\'s ' + playerTurn + ' round';
    turn = 1;
    tabel = [[], [], [],];
    for (let i = 1; i < 10; i++) {
        imagePlacer = document.getElementById('p' + i);
        imagePlacer.innerHTML = '<input type="button" id="button' + i + '" onclick="clickBtn' + i + '()"></input>';
    }
}
function resetGame() {
    restartGame();
    p1Score = 0;
    p2Score = 0;
    tfScore.innerHTML = 'Score: <br><br> Player 1 : ' + p1Score + '<br> Player 2 : ' + p2Score;
}
function clickBtn1() {
    imagePlacer = document.getElementById('p1');
    if (gameStart === true) {
        if (playerTurn % 2 !== 0) {
            tabel[0][0] = 'X';
            updateStats(1);
            if (turn >= 6) verifyTheWinner();
        }
        else {
            tabel[0][0] = '0';
            updateStats(0);
            if (turn >= 6) verifyTheWinner();
        }
    }
}
function clickBtn2() {
    imagePlacer = document.getElementById('p2');
    if (gameStart === true) {
        if (playerTurn % 2 !== 0) {
            tabel[0][1] = 'X';
            updateStats(1);
            if (turn >= 6) verifyTheWinner();
        }
        else {
            tabel[0][1] = '0';
            updateStats(0);
            if (turn >= 6) verifyTheWinner();
        }
    }
}
function clickBtn3() {
    imagePlacer = document.getElementById('p3');
    if (gameStart === true) {
        if (playerTurn % 2 !== 0) {
            tabel[0][2] = 'X';
            updateStats(1);
            if (turn >= 6) verifyTheWinner();
        }
        else {
            tabel[0][2] = '0';
            updateStats(0);
            if (turn >= 6) verifyTheWinner();
        }
    }
}
function clickBtn4() {
    imagePlacer = document.getElementById('p4');
    if (gameStart === true) {
        if (playerTurn % 2 !== 0) {
            tabel[1][0] = 'X';
            updateStats(1);
            if (turn >= 6) verifyTheWinner();
        }
        else {
            tabel[1][0] = '0';
            updateStats(0);
            if (turn >= 6) verifyTheWinner();
        }
    }
}
function clickBtn5() {
    imagePlacer = document.getElementById('p5');
    if (gameStart === true) {
        if (playerTurn % 2 !== 0) {
            tabel[1][1] = 'X';
            updateStats(1);
            if (turn >= 6) verifyTheWinner();
        }
        else {
            tabel[1][1] = '0';
            updateStats(0);
            if (turn >= 6) verifyTheWinner();
        }
    }
}
function clickBtn6() {
    imagePlacer = document.getElementById('p6');
    if (gameStart === true) {
        if (playerTurn % 2 !== 0) {
            tabel[1][2] = 'X';
            updateStats(1);
            if (turn >= 6) verifyTheWinner();
        }
        else {
            tabel[1][2] = '0';
            updateStats(0);
            if (turn >= 6) verifyTheWinner();
        }
    }
}
function clickBtn7() {
    imagePlacer = document.getElementById('p7');
    if (gameStart === true) {
        if (playerTurn % 2 !== 0) {
            tabel[2][0] = 'X';
            updateStats(1);
            if (turn >= 6) verifyTheWinner();
        }
        else {
            tabel[2][0] = '0';
            updateStats(0);
            if (turn >= 6) verifyTheWinner();
        }
    }
}
function clickBtn8() {
    imagePlacer = document.getElementById('p8');
    if (gameStart === true) {
        if (playerTurn % 2 !== 0) {
            updateStats(1);
            tabel[2][1] = 'X';
            if (turn >= 6) verifyTheWinner();
        }
        else {
            updateStats(0)
            tabel[2][1] = '0';
            if (turn >= 6) verifyTheWinner();
        }
    }
}
function clickBtn9() {
    imagePlacer = document.getElementById('p9');
    if (gameStart === true) {
        if (playerTurn % 2 !== 0) {
            tabel[2][2] = 'X';
            updateStats(1);
            if (turn >= 6) verifyTheWinner();
        }
        else {
            tabel[2][2] = '0';
            updateStats(0);
            if (turn >= 6) verifyTheWinner();
        }
    }
}
function verifyTheWinner() {
    for (let j = 0; j < 3; j++) {
        if (equals(tabel[j][0], tabel[j][1], tabel[j][2])) {
            winner = tabel[j][0];
            whoWins(winner);
        }
    }
    for (let i = 0; i < 3; i++) {
        if (equals(tabel[0][i], tabel[1][i], tabel[2][i])) {
            winner = tabel[0][i];
            whoWins(winner);
        }
    }
    if (equals(tabel[0][0], tabel[1][1], tabel[2][2])) {
        winner = tabel[0][0];
        whoWins(winner);
    }
    if (equals(tabel[2][0], tabel[1][1], tabel[0][2])) {
        winner = tabel[2][0];
        whoWins(winner);
    }
    else if ((turn === 10) && (tfWinner.innerHTML == '')) {
        tfWinner.innerHTML = 'Nobody wins! Try again!';
        resetGameVisibility.style.visibility = 'visible';
        restartGameVisibility.style.visibility = 'visible';
    }
}
function equals(a, b, c) {
    return ((a == b) && (b == c));
}
function whoWins(w) {
    if ((w === 'X') || (w === '0')) {
        resetGameVisibility.style.visibility = 'visible';
        restartGameVisibility.style.visibility = 'visible';
        (playerTurn - 1) == 1 ? p1Score++ : p2Score++;
        tfScore.innerHTML = 'Score: <br><br> Player 1 : ' + p1Score + '<br> Player 2 : ' + p2Score;
        tfWinner.innerHTML = winner + ' wins!';
        gameStart = false;
    }
}
function updateStats(n) {
    if (n == 0) {
        imagePlacer.innerHTML = zeroInHtml;
        playerTurn--;
    }
    else if (n == 1) {
        imagePlacer.innerHTML = xInHtml;
        playerTurn++;
    }
    turn++;
    tfPlayerTurn.innerHTML = 'Player\'s ' + playerTurn + ' round';
}
function changePlayerTurn(turn) {
    if (turn == 2) {
        turn--;
        return turn;
    }
    if (turn == 1) {
        turn++;
        return turn;
    }
}