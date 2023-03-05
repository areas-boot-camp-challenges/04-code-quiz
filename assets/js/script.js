// Elements.
const startButton = document.getElementById("start-button")
const timerDisplay = document.getElementById("timer")
const questions = document.getElementById("questions")
const submitButtons = document.getElementsByClassName("submit-button")

// Hide all questions except for the first one.
const allQuestions = document.getElementsByClassName("question")
for (let i = 1; i < allQuestions.length; i++) {
  allQuestions[i].classList.add("hidden")
}

let countdownInterval = null

// Start the quiz.
startButton.addEventListener("click", function() {
  // Initialize the countdown.
  let countdown = 75

  // Update the timer display every second.
  countdownInterval = setInterval(() => {
    // Subtract one from the countdown.
    countdown -= 1
    
    // Update the timer display.
    timerDisplay.innerHTML = countdown
    
    // If the countdown reaches 0, stop the countdown and display "Time’s Up!"
    if (countdown <= 0) {
      clearInterval(countdownInterval)
      timerDisplay.innerHTML = "Time’s Up!"
      questions.classList.add("hidden block")
    }
  }, 1000)

  // Display the first question.
  allQuestions[0].classList.remove("hidden")
})

// Handle submit button clicks.
for (let i = 0; i < submitButtons.length; i++) {
  submitButtons[i].addEventListener("click", function() {
    // Hide the current question.
    const currentQuestion = this.parentElement
    currentQuestion.classList.add("hidden")
    
    // If this is the last question, stop the timer and display the results.
    if (currentQuestion === allQuestions[allQuestions.length - 1]) {
      clearInterval(countdownInterval)
      timerDisplay.innerHTML = "Quiz complete!"
      questions.classList.add("hidden")
      return
    }
    
    // Otherwise, display the next question.
    const nextQuestion = currentQuestion.nextElementSibling
    nextQuestion.classList.remove("hidden")
  })
}
