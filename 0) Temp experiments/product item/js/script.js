function countdown(seconds) {
    let minutesDisplay, secondsDisplay;
    setInterval(calculate, 1000);

    function calculate() {
        if ( seconds >= 0 ) {
            minutesDisplay = parseInt(seconds / 60);
            secondsDisplay = parseInt(seconds % 60);

            document.getElementById("time").innerText = `${("0" + minutesDisplay).slice(-2)}:${("0" + secondsDisplay).slice(-2)}`;
            seconds--;
        } else {
            clearInterval(this);
        }
    }
}

countdown(120);