// Initialize the game
function initializeGame() {
    createGameBoard();
    createKeyboard();
    document.addEventListener("keyup", processInput);
}

// End the game
function endGame() {
    updateStatistics();
    displayStatsPopup();
}

// Restart the game
function restartGame() {
    location.reload();
}

// Update the game state
function updateGameState() {
    let guess = getCurrentGuess();

    if (!isValidGuess(guess)) {
        alert(`"${guess}" is not a valid guess`);
        return;
    }

    totalGuesses++;
    evaluateGuess(guess);

    if (correctGuesses === WORD_LENGTH) {
        gameWon = true;
        gameOver = true;
    }

    row++;
    col = 0;

    if (row === MAX_GUESSES && !gameOver) {
        gameOver = true;
        alert(`Oh no! The correct word was: "${word}"`);
    }

    if (gameOver) {
        endGame();
    }
}