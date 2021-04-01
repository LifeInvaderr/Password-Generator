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
var charlength = Number(prompt("Enter the amount of characters between 8 and 128."));
while (isNaN(length) || length < 8 || length >128) length= Number(prompt("Incorrect length, must be 8-128 characters."))

// Questions about what characters to include
var lowerCase = confirm("Do you want to use lowercase letters?");
var upperCase = confirm("Do you want to use uppercase letters?");
var number = confirm("Do you want to use numbers?");
var symbol = confirm("Do you want to use symbols?");




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



// I tried this, however I ran into an issue in the loop running over and over ending up crashing browser
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
