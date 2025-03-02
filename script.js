let randNum;
let mode;

function guessNumber(mode) {
  let guessedNumber = document.querySelector("#guessedNumber").value;
  console.log(`guessed Number is: ${guessedNumber}.`);
  if (guessedNumber <= 0 || guessedNumber > 100) {
    alert("Please enter a number between 0 and 100.");
    return;
  }
  switch (mode) {
    case "normal":
      break;
  }
}

function playGame(modeName) {
  let guessNum = 0;
  document.querySelector("#modesContainer").style.display = "none";
  document.querySelector("#numberGuessingContainer").style.display = "block";

  switch (modeName) {
    case "Normal":
      randNum = Math.floor(Math.random() * 100) + 1;
      console.log(randNum);
      document.querySelector("#guessButton").onclick = () => {
        guessNumber("normal");
      };
      break;
    case "Hard":
      randNum = Math.floor(Math.random() * 100) + 1;
      console.log(randNum);
      document.querySelector("#guessButton").onclick = () => {
        guessNumber("hard");
      };
      break;
    case "Custom":
      let customNumber = document.querySelector("#customNumber").value;
      console.log(customNumber);
      document.querySelector("#guessButton").onclick = () => {
        guessNumber("normal");
      };
      break;
  }
}
