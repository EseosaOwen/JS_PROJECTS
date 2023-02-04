/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'

const totalScore = {computerScore: 0, playerScore: 0}


function getComputerChoice() {
  let choiceList = ["rock", "paper", "scissors"];
  let compChoice = Math.floor(Math.random() * choiceList.length)
  return choiceList[compChoice];
}

console.log(getComputerChoice());

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0

function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score; let compScore;

  // All situations where human draws, set `score` to 0
  if(playerChoice == computerChoice){
      score = 0;
      // compScore = 0; 
  }
  // // All situations where human wins, set `score` to 1
  // // make sure to use else ifs here

  else if(playerChoice == "paper" && computerChoice == "rock"){
      score = 1;
      // compScore = -1;
  }

  else if(playerChoice == "rock" && computerChoice == "scissors"){
    score = 1
    // compScore = -1;
  }

  else if(playerChoice == "scissors" && computerChoice == "paper"){
    score = 1
    // compScore = -1;

  }

  // Otherwise human loses (aka set score to -1)
  else{
    score = -1
    // compScore = 1;
  }

  // // return score
  return score
  // return score
  // return compScore
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  playerScore = document.querySelector("#player-score");
  hands = document.querySelector("#hands");
  result - document.querySelector("#result");

  // score = getResult();
  computerChoice = getComputerChoice();
  
  playerScore.innerText = `Your Score: ${totalScore.playerScore} & computer Score: ${totalScore.computerScore}`


  hands.innerText = `person: ${playerChoice} vs bot: ${computerChoice}`
  if(score == 1){
      result.innerText = "You Win"
  }

  else if(score == -1){
    result.innerText = "You Lose"
  }

  else if(score == 0){
    result.innerText = "Draw"
  }
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  let score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score
  showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  rpsBtn = document.querySelectorAll(".rpsButton")
  rpsBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      // console.log(getResult())
      onClickRPS(btn.value);
    });
  });

  let endGameButton = document.querySelector("#endGameButton");
  endGameButton.addEventListener("click", () => {
    // let resultContainer = document.querySelector(".resultContainer");
    // resultContainer.innerHTML = `<div></div>`
    endGame();
  });

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let playerScore = document.querySelector("#player-score");
  let hands =  document.querySelector("#hands");
  let result = document.querySelector("#result")
  playerScore.innerText = "";
  hands.innerText = "";
  result.innerText = "";
  totalScore.computerScore = 0;
  totalScore.playerScore = 0;
}

playGame();

// We use functions with parameters so that our apps can be dynamic, a function that has parameters means that at runtime(calling the function) we have to pass in those paramter values and then the functon carries out its work based on those values

