function startExam() {
    document.getElementById("exam").style.display = "block";
    startTimer();
}

function saveAnswer() {
    localStorage.setItem("examAnswer", "New Delhi");
    alert("Answer saved successfully!");
}

function simulateFailure() {
    localStorage.setItem("examStatus", "saved");

    document.getElementById("rollbackStatus").textContent =
        "✓ Exam progress has been saved successfully.";
}

function rollbackExam() {
    let status = localStorage.getItem("examStatus");

    if (status === "saved") {
        document.getElementById("rollbackStatus").textContent =
            "✓ Automated rollback successful! Exam session restored.";
    } else {
        document.getElementById("rollbackStatus").textContent =
            "No saved exam session found.";
    }
}

function startTimer() {
    let timeLeft = 60;

    let timerInterval = setInterval(function () {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        document.getElementById("timer").textContent =
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").textContent = "00:00";
            alert("Time is up!");
        }

    }, 1000);
}