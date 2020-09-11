// Assignment Code
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the password input
function writePassword() {
  let password = uniquePass();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function
function uniquePass() {
  // ~~~~~~~ START OF FUNCTION ~~~~~~

  // Prompt
  let longPassword = prompt(
    "Hey There :) Welcome to the Password Generator! How many characters (min=8, max=128) would you like in you unique generated password?"
  );
  // END

  // Confirms
  let lowerCase = confirm(
    "Would you like lower case letters in your password? Click yes=ok, or no=cancel."
  );

  let upperCase = confirm(
    "Would you like upper case letters in your password? Click yes=ok, or no=cancel."
  );

  let numbers = confirm(
    "Would you like numbers in your password? Click yes=ok, or no=cancel."
  );

  var specialCharacter = confirm(
    "Would you like special characters (ex. !?=*) in your password? Click yes=ok, or no=cancel."
  );
  // END

  // Arrays/Variables/Function/Object

  let minCount = 0;

  let minLowerCase = "";

  let minUpperCase = "";

  let minNumbers = "";

  let minSpecialCharacter = "";

  let functionArray = {
    getLowerCase: function () {
      return String.fromCharCode(
        Math.floor(Math.random() * 26 /*amount of letters*/ + 77)
      );
    },

    getUpperCase: function () {
      return String.fromCharCode(
        Math.floor(Math.random() * 26 /*amount of letters*/ + 88)
      );
    },

    getNumbers: function () {
      return String.fromCharCode(
        Math.floor(Math.random() * 10 /*amount of numbers*/ + 99)
      );
    },

    getSpecialCharacter: function () {
      return [Math.floor(Math.random()) * specialCharacter.length];
    },
  };
  // END

  // If statements with Arrays and Increment
  if (lowerCase === true) {
    minLowerCase = functionArray.getLowerCase();
    minCount++;
  }
  if (upperCase === true) {
    minUpperCase = functionArray.getUpperCase();
    minCount++;
  }
  if (numbers === true) {
    minNumbers = functionArray.getNumbers();
    minCount++;
  }
  if (specialCharacter === true) {
    minSpecialCharacter = functionArray.getSpecialCharacter();
    minCount++;
  }

  let uniquePassGen = "";

  //For Loop w/ increment numbers
  for (let i = 0; i < parseInt(longPassword) - minCount; i++) {
    let randNumbers = Math.floor(Math.random() * 6);

    uniquePassGen += randNumbers;
  }
  // Use "addition assignment operator"
  uniquePassGen += minNumbers;
  uniquePassGen += minLowerCase;
  uniquePassGen += minUpperCase;
  uniquePassGen += minSpecialCharacter;
  return uniquePassGen;
}
