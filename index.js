// Setting the initial timer value
let timer;
let isRunning = false; // Initial start position of timer
let [hours, mins, sec, millisec] = [0, 0, 0, 0];

// Accessing the buttons and display to update 
let timerDisplay = document.querySelector(".s-display"); // Updated selector to match the class
let startbtn = document.querySelector(".start");
let resetbtn = document.querySelector(".reset");
let stopbtn = document.querySelector(".stop");

// Adding events to the buttons 
startbtn.addEventListener("click", startTimer);
stopbtn.addEventListener("click", stopTimer);
resetbtn.addEventListener("click", resetTimer);

// Function to start the timer 
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 10);
    }
}

// Function to stop the timer
function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    [hours, mins, sec, millisec] = [0, 0, 0, 0];
    // Updating the display
    updateDisplay();
}

// Function to run the timer logic
function updateTimer() {
    // Timer logic
    millisec += 10;
    if (millisec >= 1000) {
        millisec = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            mins++;
            if (mins === 60) {
                mins = 0;
                hours++;
            }
        }
    }
    // Updating the display for every millisecond
    updateDisplay();
}

// Function to update the timer on display
function updateDisplay() {
    timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(sec).padStart(2, '0')}:${String(Math.floor(millisec / 10)).padStart(2, '0')}`;
}
