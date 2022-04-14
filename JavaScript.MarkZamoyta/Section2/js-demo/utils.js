// Dette er en general purpose funktion til at sætte text-værdien
// for et element til noget bestemt. Vi bruger det til at sætte noget tekst
// i header sektionen
function showMessage(message) {
    // NB: document is an object that refers to the whole web page
    document.getElementById('message').textContent = message;
}

function changePercentOff(percentage) {
    // NB: document is an object that refers to the whole web page
    document.getElementById('percent-off').textContent = percentage + "% OFF";
}

function logMessage() {
    console.log("Bamse");
}