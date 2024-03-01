// Create the game board
function createGameBoard() {
    const board = document.getElementById("board");
    for (let r = 0; r < MAX_GUESSES; r++) {
        for (let c = 0; c < WORD_LENGTH; c++) {
            const tile = createTile(r, c);
            board.appendChild(tile);
        }
    }
}

// Create a tile element
function createTile(row, col) {
    const tile = document.createElement("span");
    tile.id = `${row}-${col}`;
    tile.classList.add("tile");
    tile.innerText = "";
    return tile;
}

// Create the keyboard
function createKeyboard() {
    const keyboardLayout = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "\u232B"]
    ];

    keyboardLayout.forEach(row => {
        const keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        row.forEach(key => {
            const keyTile = createKeyTile(key);
            keyboardRow.appendChild(keyTile);
        });

        document.body.appendChild(keyboardRow);
    });
}

// Create a key tile element
function createKeyTile(key) {
    const keyTile = document.createElement("div");
    keyTile.innerText = key;
    keyTile.id = key === "Enter" ? "Enter" : key === "\u232B" ? "Backspace" : `Key${key}`;
    keyTile.addEventListener("click", processKey);
    keyTile.classList.add(key === "Enter" ? "enter-key-tile" : "key-tile");
    return keyTile;
}