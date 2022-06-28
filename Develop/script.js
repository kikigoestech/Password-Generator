
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("Button clicked")

// 1. Prompt the user for the password criteria
//   a. Password length 8 < 12
//   b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input
// 3. Generate password based on criteria
// 4. Display password to the page


    return "Generated Password"; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var password=document.getElementById("password");

        document.getElementById("password").value = password;
 

 var passwordLength = window.prompt("Choose password length 8-10");
 var characters = window.prompt("Would you like your password to include uppercase letters?")
 var characters = window.prompt("Would you like your password to include lowercase letters?")
 var characters = window.prompt("Would you like your password to include numbers?")
 var characters = window.prompt("Would you like your password to include special characters?")
