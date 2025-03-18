let shareName = window.prompt(
  "Enter your name in the given textbox. It will be used to display your name in the winning card."
);

console.log(shareName);

if (shareName == null || shareName == "") {
  for (let i = 0; i < 10000; i++) {
    shareName = window.prompt(
      "Enter your name in the given textbox. It will be used to display your name in the winning card."
    );
    console.log(shareName);
    if (shareName != null && shareName != "") {
      break;
    }
  }
}
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
      guessNum += 1;
      guessNumberDisplay(guessNum);
      if (randomNumber > guessedNumber) {
        let difference = randomNumber - guessedNumber;
        console.log(difference);
        if (difference <= 5) {
          document.querySelector("#hintText").textContent =
            "You are EXTREMELY close...⬆️";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        } else if (difference <= 10) {
          document.querySelector("#hintText").textContent =
            "You are very close...⬆️";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        } else if (difference <= 15) {
          document.querySelector("#hintText").textContent =
            "You are pretty close...⬆️";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        } else if (difference > 15) {
          document.querySelector("#hintText").textContent =
            "You are quite far... Try going higher.";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        }
      } else if (randomNumber < guessedNumber) {
        let difference = guessedNumber - randomNumber;
        console.log(difference);
        if (difference <= 5) {
          document.querySelector("#hintText").textContent =
            "You are EXTREMELY close...⬇️";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        } else if (difference <= 10) {
          document.querySelector("#hintText").textContent =
            "You are very close...⬇️";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        } else if (difference <= 15) {
          document.querySelector("#hintText").textContent =
            "You are pretty close...⬇️";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        } else if (difference > 15) {
          document.querySelector("#hintText").textContent =
            "You are quite far... Try going lower.";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        }
      } else if (guessedNumber == randomNumber) {
        document.querySelector(
          "#winResult"
        ).textContent = `Congratulations! The number was ${randomNumber}, you guessed it in ${guessNum} guesses! 🎉 Screenshot the below container to share your victory with your friends! (Landscape mode recommended on mobile.) Or click the below button to play again.`;
        document.querySelector("#playAgainButton").style.display = "block";
        document.querySelector("#hintPara").style.display = "none";
        document.querySelector("#numberGuessingContainer").style.display =
          "none";
        let congratsMessage = `${shareName} has guessed the random number in Normal mode!`;
        document.querySelector("#congratsMessageNormal").textContent =
          congratsMessage;
        document.querySelector("#normalScreenshotContainer").style.display =
          "block";
        document.querySelector("#congratsMessageHard").style.display = "none";
        document.querySelector("#congratsMessageNormal").style.display =
          "block";
        document.querySelector("#congratsMessageCustom").style.display = "none";
      }
      break;

    case "hard":
      if (guessNum < 10) {
        guessNum += 1;
        guessNumberDisplay(guessNum);
        console.log("guessNum <= 10");
      } else {
        guessNum = 0;
        document.querySelector(
          "#winResult"
        ).textContent = `Sorry, you lost! The random number was ${randomNumber}. Click the below button to play again.`;
        document.querySelector("#playAgainButton").style.display = "block";
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
        ).textContent = `Congratulations! The number was ${randomNumber}, you guessed it in ${guessNum} guesses! 🎉 Screenshot the below container to share your victory with your friends! (Landscape mode recommended on mobile.) Or click the below button to play again.`;
        document.querySelector("#playAgainButton").style.display = "block";
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

    case "custom":
      guessNum += 1;
      guessNumberDisplay(guessNum);
      if (randomNumber > guessedNumber) {
        let difference = randomNumber - guessedNumber;
        console.log(difference);
        if (difference <= 5) {
          document.querySelector("#hintText").textContent =
            "You are EXTREMELY close...⬆️";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        } else if (difference <= 10) {
          document.querySelector("#hintText").textContent =
            "You are very close...⬆️";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        } else if (difference <= 15) {
          document.querySelector("#hintText").textContent =
            "You are pretty close...⬆️";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        } else if (difference > 15) {
          document.querySelector("#hintText").textContent =
            "You are quite far... Try going higher.";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        }
      } else if (randomNumber < guessedNumber) {
        let difference = guessedNumber - randomNumber;
        console.log(difference);
        if (difference <= 5) {
          document.querySelector("#hintText").textContent =
            "You are EXTREMELY close...⬇️";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        } else if (difference <= 10) {
          document.querySelector("#hintText").textContent =
            "You are very close...⬇️";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        } else if (difference <= 15) {
          document.querySelector("#hintText").textContent =
            "You are pretty close...⬇️";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        } else if (difference > 15) {
          document.querySelector("#hintText").textContent =
            "You are quite far... Try going lower.";
          setTimeout(() => {
            document.querySelector("#hintText").textContent = "";
          }, 2000);
        }
      } else if (guessedNumber == randomNumber) {
        document.querySelector(
          "#winResult"
        ).textContent = `Congratulations! The number was ${randomNumber}, you guessed it in ${guessNum} guesses! 🎉 Screenshot the below container to share your victory with your friends! (Landscape mode recommended on mobile.) Or click the below button to play again.`;
        document.querySelector("#playAgainButton").style.display = "block";
        document.querySelector("#hintPara").style.display = "none";
        document.querySelector("#numberGuessingContainer").style.display =
          "none";
        let congratsMessage = `${shareName} has guessed the random number in Custom mode!`;
        document.querySelector("#congratsMessageCustom").textContent =
          congratsMessage;
        document.querySelector("#customScreenshotContainer").style.display =
          "block";
        document.querySelector("#congratsMessageHard").style.display = "none";
        document.querySelector("#congratsMessageNormal").style.display = "none";
        document.querySelector("#congratsMessageCustom").style.display =
          "block";
      }
      break;
  }
}

function playGame(modeName) {
  document.querySelector("#guessNumSpan").textContent = "0";
  document.querySelector("#modesContainer").style.display = "none";
  document.querySelector("#numberGuessingContainer").style.display = "block";
  guessNum = 0;

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
      let customNumber = Number(
        window.prompt(
          "Enter a number between 1 and 100. After you enter, pass the device to your friend."
        )
      );

      console.log(customNumber);

      if (isNaN(customNumber) || customNumber == "") {
        for (let i = 0; i < 10000; i++) {
          customNumber = Number(
            window.prompt(
              "Enter a number between 1 and 100. After you enter, pass the device to your friend."
            )
          );
          console.log(customNumber);
          if (!isNaN(customNumber) && customNumber != "") {
            break;
          }
        }
      }
      document.querySelector("#hintPara").style.display = "block";
      document.querySelector("#guessButton").onclick = () => {
        guessNumber("custom", customNumber);
      };
      break;
  }
}

function guessNumberDisplay(currentGuessNum) {
  document.querySelector("#guessNumSpan").textContent = currentGuessNum;
}

function playAgainFunction() {
  document.querySelector("#playAgainButton").style.display = "none";
  document.querySelector("#congratsMessageHard").style.display = "none";
  document.querySelector("#congratsMessageNormal").style.display = "none";
  document.querySelector("#congratsMessageCustom").style.display = "none";
  document.querySelector("#normalScreenshotContainer").style.display = "none";
  document.querySelector("#hardScreenshotContainer").style.display = "none";
  document.querySelector("#customScreenshotContainer").style.display = "none";
  document.querySelector("#winResult").textContent = "";
  document.querySelector("#guessedNumber").value = "";
  document.querySelector("#modesContainer").style.display = "block";
}
