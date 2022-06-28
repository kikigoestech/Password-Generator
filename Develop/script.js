// 1. Prompt the user for the password criteria
//   a. Password length 8 < 12
//   b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input
// 3. Generate password based on criteria
// 4. Display password to the page


var generateBtn = document.querySelector("#generate");

function generatePassword() {



 var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 var characterArray = ["!" , "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var resultArray = [];
var userArray = [];

uppercaseArray [1]


 var numCharacter = prompt("Choose password length 8-128");
 var uppercase = confirm ("Would you like your password to include uppercase letters?");
 var lowercase = confirm ("Would you like your password to include lowercase letters?");
 var numbers = confirm ("Would you like your password to include numbers?");
 var characters = confirm ("Would you like your password to include special characters?");





// if condition of arrays

if (numbers){
  resultArray = resultArray.concat(numberArray);
}

if (uppercase){
  resultArray = resultArray.concat(uppercaseArray);
}

if (lowercase){
  resultArray = resultArray.concat(lowercaseArray);
}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)

// for loop

for (var i = 0; i < numCharacter; i++) {

  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
}

 return userArray.join("") ;
}

 


 



 // Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




   

// 1. Prompt the user for the password criteria
//   a. Password length 8 < 12
//   b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input
// 3. Generate password based on criteria
// 4. Display password to the page
