function validateFloat(promptMessage) {
    let number;
    do {
        number = parseFloat(prompt(promptMessage));
        if (isNaN(number)) {
            alert("Please enter a valid number.");
        }
    } while (isNaN(number));
    return number;
}

function validateInt(promptMessage) {
    let number;
    do {
        number = parseInt(prompt(promptMessage));
        if (isNaN(number)) {
            alert("Please enter a valid integer.");
        }
    } while (isNaN(number));
    return number;
}

function showOptions() {
    let choice = parseInt(prompt("Choose an option:\n1-Test\n2-Enter Custom Values"));
    if (choice === 1) {
        runTest();
    } else if (choice === 2) {
        enterValues();
    } else {
        alert("Invalid choice. Please enter 1 or 2.");
        showOptions();
    }
}

function generateGoBackButton() {
    document.write("<button onclick=\"window.location.href='JS1.html'\">Return To ProblemSet 2-1 Page</button>");
}