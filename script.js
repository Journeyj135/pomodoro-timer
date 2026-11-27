// Store elements in variables
const timer = document.querySelector('#time');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

// keep track of time
let secondsRemaining = 25 * 60;

// Track timer; stop countdown-prevent multi countdowns
let countDown = null;

function formatTime(seconds) {
    // Calculate min&sec
    let minutes = Math.floor(secondsRemaining / 60);
    let  Seconds = secondsRemaining % 60;

    // pad min:sec
    let paddedMin = String(minutes).padStart(2, '0');
    let paddedSec = String(Seconds).padStart(2, '0');

    return `${paddedMin}:${paddedSec}`
}


// StartBtn; start timer
startBtn.addEventListener('click', () => {
    // Disable startBtn
    startBtn.disabled = true;

    // Countdown timer every second
    countDown = setInterval(() => {
         
        timer.textContent = formatTime(secondsRemaining--); 

        // Stop timer once 0 is reached; enable startbtn
        if(secondsRemaining === 0){
            clearInterval(countDown);
            startBtn.disabled = false;
        }
    }, 1000);
});


// Stop timer
stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    clearInterval(countDown);
});


// Reset timer
resetBtn.addEventListener('click', () => {
    // Enable startBtn
    startBtn.disabled = false;
    // Stop countdown
    clearInterval(countDown);
    //reset timer
    timer.textContent = '25:00';
    secondsRemaining = 25 * 60;
});