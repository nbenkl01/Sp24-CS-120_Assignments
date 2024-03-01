// Update game statistics
function updateStatistics() {
    incrementCookie("gamesPlayed");

    if (gameWon) {
        incrementCookie("gamesWon");
        incrementCookie(totalGuesses.toString()+"Guesses");
        incrementCookie("currentStreak");
    } else {
        totalGuesses++;
        setCookie("currentStreak", 0);
    }

    const winPercentage = (getStat("gamesWon") / getStat("gamesPlayed")) * 100;
    setCookie("winPercentage", winPercentage);

    if (getStat("currentStreak") > getStat("maxStreak")) {
        incrementCookie("maxStreak");
    }
}

// Display game statistics in a popup window
function displayStatsPopup() {
    const statusPopup = document.getElementById("statusPopup");

    const guessDistribution = generateGuessDistribution();
    const statisticsTable = generateStatisticsTable();

    statusPopup.innerHTML = `
        <h2>Statistics</h2>
        ${statisticsTable}
        <h3>Guess Distribution</h3>
        <div id='guess-chart'>${guessDistribution}</div>
    `;
    statusPopup.style.display = "block";

    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart Game";
    restartButton.addEventListener("click", restartGame);
    statusPopup.appendChild(restartButton);
}

// Generate guess distribution HTML
function generateGuessDistribution() {
    let guessDistribution = "";
    for (let guess = 1; guess <= 6; guess++) {
        guessDistribution += `<div class='guess-row'><span class='guess-label'>${guess}</span>`;
        const guessCount = parseInt(getCookie(guess.toString()+"Guesses")) || 0;
        if (guess === totalGuesses) {
            guessDistribution += `<div class='guess-bar green' style='width: ${guessCount * 10}px;'>${guessCount}</div></div>`;
        } else if (guessCount > 0) {
            guessDistribution += `<div class='guess-bar' style='width: ${guessCount * 10}px;'>${guessCount}</div></div>`;
        } else {
            guessDistribution += `<div class='guess-bar empty' style='width: ${guessCount * 10}px;'>${guessCount}</div></div>`;
        }
    }
    return guessDistribution;
}

// Generate statistics table HTML
function generateStatisticsTable() {
    const winPercentage = parseFloat(getCookie("winPercentage")) || 0;
    return `
        <table class="statistics-table">
            <tr>
                <td><span class="large">${getStat('gamesPlayed')}</span></td>
                <td><span class="large">${winPercentage.toFixed(2)}</span></td>
                <td><span class="large">${getStat('currentStreak')}</span></td>
                <td><span class="large">${getStat('maxStreak')}</span></td>
            </tr>
            <tr>
                <td>Games Played</td>
                <td>Win %</td>
                <td>Current Streak</td>
                <td>Max Streak</td>
            </tr>
        </table>
    `;
}