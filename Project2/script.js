// Constants
const MAX_GUESSES = 6;
const WORD_LENGTH = 5;
const WORD_LIST_URL = "https://gist.githubusercontent.com/scholtes/94f3c0303ba6a7768b47583aff36654d/raw/d9cddf5e16140df9e14f19c2de76a0ef36fd2748/wordle-La.txt";
const GUESS_LIST_URL = "https://gist.githubusercontent.com/scholtes/94f3c0303ba6a7768b47583aff36654d/raw/d9cddf5e16140df9e14f19c2de76a0ef36fd2748/wordle-Ta.txt";

// Variables
let row = 0;
let col = 0;
let gameOver = false;
let wordList = [];
let guessList = [];
let word;
let totalGuesses = 0;
let correctGuesses = 0;
let gameWon = false;

// Fetch the word, permitted guesses, and start the game
window.onload = function(){
    fetchWordList();
    fetchGuessList();
    initializeGame();
}