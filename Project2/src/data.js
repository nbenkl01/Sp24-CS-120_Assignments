// Fetch the permitted words list from URL
function fetchWordList() {
    fetchResource(WORD_LIST_URL)
        .then(data => {
            wordList = data.split('\n').map(word => word.trim().toUpperCase());
            chooseRandomWord();
        })
        .catch(error => handleError("Error fetching word list", error));
}

// Fetch the permitted guesses list from URL
function fetchGuessList() {
    fetchResource(GUESS_LIST_URL)
        .then(data => {
            guessList = data.split('\n').map(guess => guess.trim().toUpperCase());
            guessList.push(...wordList);
        })
        .catch(error => handleError("Error fetching guess list", error));
}

// Fetch a resource from URL
async function fetchResource(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network unresponsive');
    }
    return await response.text();
}

// Handle errors
function handleError(message, error) {
    console.error(`${message}: ${error}`);
}

// Choose a random word from the word list
function chooseRandomWord() {
    word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word)
}