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
const maxScore = totalCells - totalStars -brainCell;
const chestCell = 1;
const brainCell = 1;
const starsList = [];
let score = 0;

// generare stelle casuali

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
     
    // gestisco il click sulla cella

    cell.addEventListener("click", function() {
        // controllo che la cella NON sia stata già cliccata
        if (cell.classList.contains("cell-clicked")) return;

        if (starsList.includes(i)) {
            // se è una stella
            cell.classList.add("cell-star");

        } else {
            // se non lo è
            cell.classList.add("cell-clicked");
        }
    })
}

// Funzioni

// aggiornare il punteggio

function updateScore() {
    // Incremento lo score
    score++;
    // lo inserisco nel contatore
    counter.innerText = String(score).padStart(5, 0);
    // controlliamo se l'utente ha vinto
    if (score === maxScore) endGame(true);
}

// decretare la fine del gioco
function endGame(isVictory){
    if (isVictory === true){
        // diamo il verde all'overlay e scriviamo il messaggio di vittoria
        endGameScreen.classList.add("win");
        endGameMessage.innerHTML = "YOU<br>WIN";
    } else {
        // riveliamo tutte le stelle
        revealAllStars();
    }
    endGameScreen.classList.remove("hidden");
}

// ricaricare la pagina
function restart() {
    location.reload();
}

// rivelare tutte le stelle
function revealAllStars() {
    const cells = document.querySelectorAll(".cell");
    for (let i = 1; i <= cells.length; i++) {
        // controllo se la cella sia una stella
        if (starsList.includes(i)) {
            const cellToReveal = cells[i - 1];
            cellToReveal.classList.add("cell-bomb");
        }
    }
}

// click sul tasto rigioca

playAgain.addEventListener("click", restart);