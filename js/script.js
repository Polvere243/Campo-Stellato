// recupero gli elementi dal DOM

const counter = document.querySelector(".score-counter");
const gameBoard = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game");
const endGameMessage = document.querySelector(".end-game-text");
const playAgain = document.querySelector(".restart");
console.log(counter, gameBoard, endGameScreen, endGameMessage, playAgain);
// creo costanti utili 

const totalCells = 100;
const totalStars = 16;
const maxScore = totalCells - totalStars;
const starsList = [];
let score = 0;

// generare bombe casuali

while (starsList.length < totalStars){
    const number = Math.floor(Math.random() * totalStars) + 1;
    if (!starsList.includes(number)) starsList.push(number);
}
console.log(starsList);

// riempio la griglia 

let isCellEven = false;
let isRowEven = false;

for (let i = 1; i <= totalCells; i++) {
    // creo un elemento e gli do la classe "cell"
    const cell = document.createElement("div");
    cell.classList.add("cell");

    gameBoard.appendChild(cell);

    isCellEven = i % 2 === 0;
    // scurisco una casella se sono pari sia la casella sia la riga
    if (isRowEven && isCellEven) cell.classList.add("cell-dark");

    // scurisco una casella se sono dispari sia la casella sia la riga

    if (!isRowEven && !isCellEven) cell.classList.add("cell-dark");

    // se sono alla fine della riga
    if (i % 10 === 0) isRowEven = !isRowEven;
     
}

