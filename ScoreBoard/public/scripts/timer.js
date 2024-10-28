let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}
function setTimer(){
    
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('timer');
    display.value = 
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);
}