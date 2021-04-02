// Assignment code here
// Question ELements
var length = Number(prompt("Enter the amount of characters between 8 and 128."));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Incorrect length, must be 8-128 characters."))

// console.log(length);

var lowercaseQues = confirm("Do you want to use lowercase letters?");
var uppercaseQues = confirm("Do you want to use uppercase letters?");
var numberQues = confirm("Do you want to use numbers?");
var symbolQues = confirm("Do you want to use symbols?");


var ResultEl = document.getElementById('password');

generateBtn.addEventListener("click", () => {
  var haslower = lowercaseQues.true;
  var hasuppercase = uppercasecaseQues.true;
  var hasnumber = numberQues.true;
  var hassymbol = symbolQues.true;
  
  ResultEl.innerText = generatePassword(haslower, hasupper, hasnumber, hassymbol, length);
});

// Object with Function
var randomFunc = {
  lower: lowercaseRandom,
  upper: uppercaseRandom,
  number: numberRandom,
  symbol: symbolRandom,
};



// Password Functions of where to grab from
function lowercaseRandom() {
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function uppercaseRandom() {
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function numberRandom() {
  var numberval = "0123456789";
  return numberval[Math.floor(Math.random() * numberval.length)]
}

function symbolRandom() {
  var symbolval = "!@#$%&*";
  return symbolval[Math.floor(Math.random() * symbolval.length)]
}









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// I tried this, however I ran into an issue in the loop running over and over, eventually crashing browser
function promptForNumber(text) {
  if (text == '') {
    text = "Please enter a number from 1 to 100";
  }
  var number = parseInt(window.prompt(text, ""));
  checkNumber(number);

}
function checkNumber(number) {

  if (number <= 100 && number >= 1) {
    document.write("Your number (" + number + ")  matches requirements", "");
  } else if (isNaN(number)) {
    promptForNumber("It is not a number. Please enter a number from 1 to 100", "");
  } else {
    promptForNumber("Your number (" + number + ") is not between 1 and 100", "");
  }

}
