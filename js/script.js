var tabel = [['', '', ''], ['', '', ''], ['', '', '']];
var emptySpots = [];
var gameMode = '';
var botDifficulty = '';
var winner = '';
var gameStart;
var playerTurn;
var gamesPlayed = 0;
var turn = 1;
var p1Score = 0;
var p2Score = 0;
var tfButtons;
var imagePlacer;
var resetGameVisibility = document.getElementById('resetGameVis');
var restartGameVisibility = document.getElementById('restartGameVis');
var startGameVisibility = document.getElementById('startGameVis');
var tfPlayerTurn = document.getElementById('playerTurn');
var tfScore = document.getElementById('score');
var tfWinner = document.getElementById('winner');
var xInHtml = '<img src="images/X.png" alt="X">';
var zeroInHtml = '<img src="images/0.png" alt="0">';
function GenerateBtns(location) {
    for (let i = 1; i < 10; i++) {
        location = document.getElementById('p' + i);
        location.innerHTML = '<input type="button" id="button' + i + '" onclick="clickBtn(' + i + ')"></input>';
    };
}
function setBotDifficulty(difficulty) {
    botDifficulty = difficulty;
    document.getElementById("botDiff").style.display = "none";
    startGame();
}
function setGameMode(gameM) {
    document.getElementById("gameModeBtns").style.display = "none";
    gameMode = gameM;
    if (gameM == "1 Player") document.getElementById("botDiff").style.display = "inline";
    else startGame();
}
function startGame() {
    GenerateBtns(tfButtons);
    playerTurn = 1;
    tfScore.innerHTML = 'Score: <br><br> Player 1 : ' + p1Score + '<br> Player 2 : ' + p2Score;
    tfPlayerTurn.innerHTML = 'Player\'s ' + playerTurn + ' round';
    resetGameVisibility.style.visibility = 'hidden';
    document.getElementById('startMessage').style.visibility = 'hidden';
    document.getElementById('gameBoard').style.visibility = 'visible';
    startGameVisibility.style.visibility = 'hidden';
    restartGameVisibility.style.visibility = 'hidden';
    gameStart = true;

}
function restartGame() {
    GenerateBtns(imagePlacer);
    tabel = [['', '', ''], ['', '', ''], ['', '', ''],];
    turn = 1;
    winner = '';
    tfWinner.innerHTML = '';
    playerTurn = changePlayerTurn(gamesPlayed);
    tfPlayerTurn.innerHTML = 'Player\'s ' + playerTurn + ' round';
    restartGameVisibility.style.visibility = 'hidden';
    resetGameVisibility.style.visibility = 'hidden';
    gameStart = true;
}
function botTurn() {
    if (!gameStart) return;
    if (botDifficulty == "Easy") {
        findEmptySpots();
        let spot = emptySpots[Math.floor(Math.random() * emptySpots.length)];
        imagePlacer = document.getElementById('p' + spot.BtnNum);
        putMove(spot.i, spot.j);
    }
    else {

    }
}
function findEmptySpots() {
    emptySpots = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabel[i][j] == "") {
                emptySpots.push({
                    BtnNum: getBtnNum(i, j), i, j
                });
            }
        }
    }
}
function getBtnNum(col1, col2) {
    switch (col1) {
        case 0:
            return col2 + 1;
        case 1:
            return col2 + 4;
        case 2:
            return col2 + 7;
        default:
            return 0;
    }
}
function clickBtn(NumBtn) {
    if (!gameStart) return;
    imagePlacer = document.getElementById('p' + NumBtn);
    switch (NumBtn) {
        case 1:
            putMove(0, 0);
            break;
        case 2:
            putMove(0, 1);
            break;
        case 3:
            putMove(0, 2);
            break;
        case 4:
            putMove(1, 0);
            break;
        case 5:
            putMove(1, 1);
            break;
        case 6:
            putMove(1, 2);
            break;
        case 7:
            putMove(2, 0);
            break;
        case 8:
            putMove(2, 1);
            break;
        case 9:
            putMove(2, 2);
            break;
        default:
            break;
    }
    if (turn >= 6) verifyTheWinner();
    if (gameMode == "1 Player") {
        setTimeout(() => {
            botTurn();
        }, 900);
    }
}
function putMove(pos1, pos2) {
    tabel[pos1][pos2] = playerTurn % 2 != 0 ? 'X' : '0';
    updateStats(playerTurn % 2 != 0 ? 1 : 0);
}
function resetGame() {
    restartGame();
    p1Score = 0;
    p2Score = 0;
    tfScore.innerHTML = 'Score: <br><br> Player 1 : ' + p1Score + '<br> Player 2 : ' + p2Score;
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
    else if (equals(tabel[2][0], tabel[1][1], tabel[0][2])) {
        winner = tabel[2][0];
        whoWins(winner);
    }
    else if ((turn === 10) && (tfWinner.innerHTML == '')) {
        tfWinner.innerHTML = 'Nobody wins! Try again!';
        resetGameVisibility.style.visibility = 'visible';
        restartGameVisibility.style.visibility = 'visible';
        gamesPlayed++;
    }
}
function equals(a, b, c) {
    return ((a == b) && (b == c));
}
function whoWins(player) {
    if ((player === 'X') || (player === '0')) {
        resetGameVisibility.style.visibility = 'visible';
        restartGameVisibility.style.visibility = 'visible';
        (playerTurn - 1) == 1 ? p1Score++ : p2Score++;
        tfScore.innerHTML = 'Score: <br><br> Player 1 : ' + p1Score + '<br> Player 2 : ' + p2Score;
        tfWinner.innerHTML = winner + ' wins!';
        gamesPlayed++;
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
function changePlayerTurn(d) {
    if (d % 2 == 0) return 1
    else return 2
}
