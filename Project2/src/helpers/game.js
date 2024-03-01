// Evaluate the current guess
function evaluateGuess(guess) {
    correctGuesses = 0;
    let wordCount = countLetters(word);

    for (let c = 0; c < WORD_LENGTH; c++) {
        const currTile = document.getElementById(`${row}-${c}`);
        const letter = currTile.innerText;

        if (word[c] === letter) {
            handleCorrectGuess(currTile, letter);
            correctGuesses++;
            wordCount[letter]--;
        } else if (word.includes(letter) && wordCount[letter] > 0) {
            handlePresentGuess(currTile, letter);
            wordCount[letter]--;
        } else {
            handleAbsentGuess(currTile, letter);
        }
    }
}

// Count letters in a word
function countLetters(word) {
    const letterCount = {};
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
    return letterCount;
}

// Function to get the current guess
function getCurrentGuess() {
    let guess = "";
    for (let c = 0; c < WORD_LENGTH; c++) {
        const currTile = document.getElementById(`${row}-${c}`);
        const letter = currTile.innerText;
        guess += letter;
    }
    return guess.toUpperCase();
}

// Check if the guess is valid
function isValidGuess(guess) {
    return guessList.includes(guess);
}

// Handle correct guess
function handleCorrectGuess(currTile, letter) {
    currTile.classList.add("correct");
    let keyTile = document.getElementById("Key" + letter);
    keyTile.classList.remove("present");
    keyTile.classList.add("correct");
}

// Handle present guess
function handlePresentGuess(currTile, letter) {
    currTile.classList.add("present");
    let keyTile = document.getElementById("Key" + letter);
    if (!keyTile.classList.contains("correct")) {
        keyTile.classList.add("present");
    }
}

// Handle absent guess
function handleAbsentGuess(currTile, letter) {
    currTile.classList.add("absent");
    let keyTile = document.getElementById("Key" + letter);
    keyTile.classList.add("absent");
}