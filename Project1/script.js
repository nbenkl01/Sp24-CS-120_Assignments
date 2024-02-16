// Cache frequently accessed DOM elements
const header = document.querySelector('.navbar');
const footer = document.querySelector('.footer');
const menuToggle = document.getElementById('navbarSupportedContent');
const downloadBtn = document.getElementById('download-btn');
const tourTable = document.getElementById('tour-table');
const daytimeTable = document.getElementById('daytime-table');

// Add class navbarDark on navbar scroll
let scrolling = false;
window.addEventListener('scroll', function() {
    if (!scrolling) {
        scrolling = true;
        setTimeout(function() {
            const top = window.scrollY;
            if (top >= 10) {
                footer.classList.add('footerDark');
                header.classList.add('navbarDark');
            } else {
                header.classList.remove('navbarDark');
                footer.classList.remove('footerDark');
            }
            scrolling = false;
        }, 10);
    }
});

// Collapse navbar after click on small devices
document.querySelectorAll('.nav-item').forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle(); });
});

// Schedule download
downloadBtn.addEventListener('click', function() {
    let tourTSV = 'Date\tCity\tVenue\tTime\n';
    let daytimeTSV = 'Sunday\tMonday\tTuesday\tWednesday\tThursday\tFriday\tSaturday\n';

    Array.from(tourTable.querySelectorAll('tr')).forEach(function(row) {
        let rowData = [];
        row.querySelectorAll('td').forEach(function(cell) {
            rowData.push(cell.innerText.trim());
        });
        tourTSV += rowData.join('\t') + '\n';
    });

    Array.from(daytimeTable.querySelectorAll('tr')).forEach(function(row) {
        let rowData = [];
        row.querySelectorAll('td').forEach(function(cell) {
            rowData.push(cell.innerText.trim());
        });
        daytimeTSV += rowData.join('\t') + '\n';
    });

    const combinedTSV = tourTSV + '\n' + daytimeTSV;
    downloadTSV(combinedTSV, 'combined_schedule');
});

function downloadTSV(data, filename) {
    const blob = new Blob([data], { type: 'text/tab-separated-values' });
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = filename + '.tsv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Display thankyou for message message
function displayMessage() {
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.textContent = "Thanks for the message, we will respond in short order. Look out for our pigeon!";
}