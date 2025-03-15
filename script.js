let randNum;
let mode;
let guessNum = 0;

function guessNumber(mode, randomNumber) {
  let guessedNumber = document.querySelector("#guessedNumber").value;
  console.log(`guessed Number is: ${guessedNumber}.`);
  if (guessedNumber <= 0 || guessedNumber > 100) {
    alert("Please enter a number between 0 and 100.");
    return;
  }
  guessNum += 1;
  // document.querySelector("#guessNumSpan").textContent = guessNum;
  switch (mode) {
    case "normal":
      break;
    case "hard":
      if (randomNumber > guessedNumber) {
        document.querySelector("#hintText").textContent = "Go Higher ⬆️";
        setTimeout(() => {
          document.querySelector("#hintText").textContent = "";
        }, 2000);
      } else if (randomNumber < guessedNumber) {
        document.querySelector("#hintText").textContent = "Go Lower ⬇️";
        setTimeout(() => {
          document.querySelector("#hintText").textContent = "";
        }, 2000);
      } else if (guessedNumber == randomNumber) {
        document.querySelector(
          "#winResult"
        ).textContent = `You Guessed it Right in ${guessNum} guesses! 🎉`;
        document.querySelector("#hintPara").style.display = "none";
        document.querySelector("#numberGuessingContainer").style.display =
          "none";
      }
      break;
  }
}

function playGame(modeName) {
  document.querySelector("#modesContainer").style.display = "none";
  document.querySelector("#numberGuessingContainer").style.display = "block";

  switch (modeName) {
    case "Normal":
      randNum = Math.floor(Math.random() * 100) + 1;
      console.log(randNum);
      document.querySelector("#hintPara").style.display = "block";
      document.querySelector("#guessButton").onclick = () => {
        guessNumber("normal", randNum);
      };
      break;
    case "Hard":
      randNum = Math.floor(Math.random() * 100) + 1;
      console.log(randNum);
      document.querySelector("#hintPara").style.display = "block";
      document.querySelector("#guessButton").onclick = () => {
        guessNumber("hard", randNum);
      };
      break;
    case "Custom":
      let customNumber = document.querySelector("#customNumber").value;
      console.log(customNumber);
      document.querySelector("#hintPara").style.display = "block";
      document.querySelector("#guessButton").onclick = () => {
        guessNumber("normal", customNumber);
      };
      break;
  }
}

function shareWin() {
  let shareName = document.querySelector("#shareName").value;
}
