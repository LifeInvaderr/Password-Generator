// Assignment code here
// Question ELements
var length = Number(prompt("Enter the amount of characters between 8 and 128."));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Incorrect length, must be 8-128 characters."))

var lowercaseQues = confirm("Do you want to use lowercase letters?");
var uppercaseQues = confirm("Do you want to use uppercase letters?");
var numberQues = confirm("Do you want to use numbers?");
var symbolQues = confirm("Do you want to use symbols?");


// Object with Function
var randomFunc = {
  lower: lowercaseRandom,
  upper: uppercaseRandom,
  number: numberRandom,
  symbol: symbolRandom,
};


// DOM elments
var ResultEl = document.getElementById('password');

document.getElementById('generate').addEventListener('click', () => {
  ResultEl.value = generatePassword(lowercaseQues, uppercaseQues, numberQues, symbolQues, length)

});

console.log(generatePassword)



// Password Function

function generatePassword(lower, upper, number, symbol, length)

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





