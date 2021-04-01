// Assignment code here




// Password Functions of where to grab from
function lowerCase() {
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function upperCase() {
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function number() {
  var numberval = "0123456789";
  return numberval[Math.floor(Math.random() * numberval.length)]
}

function symbol() {
  var symbolval = "!@#$%&*";
  return symbolval[Math.floor(Math.random() * symbolval.length)]
}

// Console.logs to see work

console.log(lowerCase() + upperCase() + number() + symbol());

console.log(upperCase());

console.log(number());

console.log(symbol());

// Question to ask for character length




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function promptForNumber( text)
{
    if(text == '' ){
     text = "Please enter a number from 1 to 100";   
    }
    var number = parseInt(window.prompt(text, ""));
    checkNumber(number);

}
function checkNumber(number){

    if (number <= 100 && number >= 1) {
    document.write("Your number (" + number + ")  matches requirements", "");
} else if (isNaN(number)) {
    promptForNumber("It is not a number. Please enter a number from 1 to 100", "");
} else {
    promptForNumber("Your number (" + number + ") is not between 1 and 100", "");
}

}
