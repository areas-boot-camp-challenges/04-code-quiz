// - Add a start page with a “Start Quiz” button.
// - When the user clicks the “Start Quiz” button, start a countdown timer.
// - When the user starts the quiz, present a series of multiple-answer questions.
// - As the user answers questions, evaluate whether the answer is correct or incorrect.
// - As the user answers questions, store their answers in local storage (maybe).
// - At the end of the quiz, present the user with their total score.
// - At the end of the quiz, ask the user for their initials.
// - When the user submits their score, save it to local storage and display it on a high scores page.
// - Let the user clear the high scores.
// - If the user answer incorrectly, subtract time from the timer.
// - When the user finishes the quiz or time runs out, end the quiz.
// - Bonus: Use Bootstrap for UI.

// Save the start button element
let startButton = document.getElementById("start-button")
let secondsLeft = 10
console.log(secondsLeft) // ** display countdown

// Start the quiz
function startQuiz() {

  function countdown() {
    secondsLeft--
    console.log(secondsLeft) // ** display seconds left
    if (secondsLeft === 0) {
      clearInterval(timer)
      console.log("Time’s up!")
    }
  }

  let timer = setInterval( countdown, 1000 )

}

// Add listener to start button
startButton.addEventListener("click", startQuiz)