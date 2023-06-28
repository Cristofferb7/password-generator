// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


if(passObj.count < 8 | passObj.count > 128) {
  alert("that number is not between 8 and 128. Please enter a correct number.");

}
  function buildPassword(){


  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
