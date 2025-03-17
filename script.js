let shareName = prompt(
  "Enter your name in the given textbox. It will be used to display your name in the winning card."
);
console.log(shareName);

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
  switch (mode) {
    case "normal":
      break;
    case "hard":
      if (guessNum < 10) {
        guessNum += 1;
        guessNumberDisplay(guessNum);
        console.log("guessNum <= 10");
      } else {
        guessNum = 0;
        // document.querySelector("#loseContainer").style.display = "block";
        document.querySelector("#hintPara").style.display = "none";
        document.querySelector("#numberGuessingContainer").style.display =
          "none";
      }
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
        ).textContent = `You Guessed it Right in ${guessNum} guesses! 🎉 Sreenshot the below container to share your victory with your friends! (Landscape mode recommended on mobile.)`;
        document.querySelector("#hintPara").style.display = "none";
        document.querySelector("#numberGuessingContainer").style.display =
          "none";
        let congratsMessage = `${shareName} has guessed the random number in Hard mode!`;
        document.querySelector("#congratsMessageHard").textContent =
          congratsMessage;
        document.querySelector("#hardScreenshotContainer").style.display =
          "block";
        document.querySelector("#congratsMessageHard").style.display = "block";
        document.querySelector("#congratsMessageNormal").style.display = "none";
        document.querySelector("#congratsMessageCustom").style.display = "none";
      }
      break;
  }
}

function playGame(modeName) {
  document.querySelector("#guessNumSpan").textContent = "0";
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

// function shareWin(difficulty) {
//   switch (difficulty) {
//     case "Normal":
//       document.querySelector("#congratsMessageNormal").textContent =
//         congratsMessage;
//       document.querySelector("#congratsMessageNormal").style.display = "block";
//       document.querySelector("#congratsMessageHard").style.display = "none";
//       document.querySelector("#congratsMessageCustom").style.display = "none";
//       break;
//     case "Hard":
//       document.querySelector("#congratsMessageHard").textContent =
//         congratsMessage;
//       document.querySelector("#congratsMessageHard").style.display = "block";
//       document.querySelector("#congratsMessageNormal").style.display = "none";
//       document.querySelector("#congratsMessageCustom").style.display = "none";
//       break;
//     case "Custom":
//       document.querySelector("#congratsMessageCustom").textContent =
//         congratsMessage;
//       document.querySelector("#congratsMessageCustom").style.display = "block";
//       document.querySelector("#congratsMessageHard").style.display = "none";
//       document.querySelector("#congratsMessageNormal").style.display = "none";
//       break;
//   }
// }
function guessNumberDisplay(currentGuessNum) {
  document.querySelector("#guessNumSpan").textContent = currentGuessNum;
}
