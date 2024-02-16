// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const footer = document.querySelector('.footer');
console.log(header)
console.log(footer)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=10) {
        footer.classList.add('footerDark');
        header.classList.add('navbarDark');
    }else {
        header.classList.remove('navbarDark');
        footer.classList.remove('footerDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

// Schedule download
function downloadTSV(data, filename) {
    let blob = new Blob([data], { type: 'text/tab-separated-values' });
    let a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = filename + '.tsv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.getElementById('download-btn').addEventListener('click', function () {
    let tourRows = document.querySelectorAll('#tour-table tr');
    let daytimeRows = document.querySelectorAll('#daytime-table tr');
    let tourTSV = 'Date\tCity\tVenue\tTime\n';
    let daytimeTSV = 'Day\tSunday\tMonday\tTuesday\tWednesday\tThursday\tFriday\tSaturday\n';

    tourRows.forEach(function(row) {
        let rowData = [];
        row.querySelectorAll('td').forEach(function(cell) {
            rowData.push(cell.innerText.trim());
        });
        tourTSV += rowData.join('\t') + '\n';
    });

    daytimeRows.forEach(function(row) {
        let rowData = [];
        row.querySelectorAll('td').forEach(function(cell) {
            rowData.push(cell.innerText.trim());
        });
        daytimeTSV += rowData.join('\t') + '\n';
    });

    downloadTSV(tourTSV, 'tour_schedule');
    downloadTSV(daytimeTSV, 'daytime_tred');
});

function displayMessage() {
    var messageContainer = document.getElementById("messageContainer");
    messageContainer.textContent = "Thanks for the message, we will respond in short order. Look out for our pigeon!";
}