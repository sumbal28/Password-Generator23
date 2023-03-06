let generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Array of uppercase characters to be included in password
  let uppercaseArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // Array of lowercase characters to be included in password

  let lowercaseArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // Array of numeric characters to be included in password
  let numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Array of special characters to be included in password
  let characterArray = [
    "@",
    "%",
    "+",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];

  let resultArray = [];
  let userArray = [];

  uppercaseArray[1];

  // Creating variables to prompt user for password options
  let numCharacter = prompt("How many number of character? between 7 to 100");
  let numbers = confirm("want numbers in password?");
  let uppercases = confirm("Want uppercases in password?");
  let lowercases = confirm("Want lowercases in password?");
  let characters = confirm("Want special characters in password?");

  if (numbers) {
    resultArray = resultArray.concat(numbArray);
  }

  if (uppercases) {
    resultArray = resultArray.concat(uppercaseArray);
  }

  if (lowercases) {
    resultArray = resultArray.concat(lowercaseArray);
  }

  if (characters) {
    resultArray = resultArray.concat(characterArray);
  }

  console.log(resultArray);

  for (let i = 0; i < numCharacter; i++) {
    userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
  }
  return userArray.join("");
}
// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function copyToClipboard() {}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
