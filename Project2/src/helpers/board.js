// Process key clicks
function processKey() {
    processInput({ code: `${this.id}` });
}

// Process user input
function processInput(event) {
    if (gameOver) return;

    const key = event.code;
    if  (key.startsWith("Key")) {
        processLetterInput(key.substring(3));
    } else if (key === "Backspace") {
        processBackspaceInput();
    } else if (key === "Enter") {
        updateGameState();
    }
}

// Process letter input
function processLetterInput(letter) {
    if (col < WORD_LENGTH) {
        const currTile = document.getElementById(`${row}-${col}`);
        if (currTile.innerText === "") {
            currTile.innerText = letter;
            col++;
        }
    }
}

// Process backspace input
function processBackspaceInput() {
    if (col > 0) {
        col--;
    }
    const currTile = document.getElementById(`${row}-${col}`);
    currTile.innerText = "";
}