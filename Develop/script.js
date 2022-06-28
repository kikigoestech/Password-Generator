
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("Button clicked")

// 1. Prompt the user for the password criteria
//   a. Password length 8 < 12
//   b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input
// 3. Generate password based on criteria
// 4. Display password to the page

// making sure click works 
    return "Generated Password"; 
}

// Write password to the #password input


 function writePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var password=document.getElementById("password");

        document.getElementById("password").value = password;
 

 var passwordLength = window.prompt("Choose password length 8-16");
 var characters = window.prompt("Would you like your password to include uppercase letters?")
 var characters = window.prompt("Would you like your password to include lowercase letters?")
 var characters = window.prompt("Would you like your password to include numbers?")
 var characters = window.prompt("Would you like your password to include special characters?")

 