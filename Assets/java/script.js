// Assignment Code
var generateBtn = document.querySelector("#generate");
var choiceArray= [];
// added multiple arrays 
var specialCharacterArray = ["!", "#", "$", "%", "&", "()", "*", "+", "-", ".", "/", ":", ";", "<", "=",">", "?", "@", "[", "_"]; 
var lowerCaseArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacterArray = [	"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


// 1. promt for password criteria
function getPrompts(){
  choiceArray = [];
  characterLenght = parseInt(prompt("how many characters"));

  // 2.validate the input.
  if(characterLenght< 8 || characterLenght > 128) {
    alert("that number is not between 8 and 128. Please enter a correct number.");
    return false; 

}

if (confirm ("would you like lowercase letters in your password?")) {
choiceArray = choiceArray.concat(lowerCaseArray);
}

if (confirm ("would you like uppercase letters in your password?")) {
choiceArray = choiceArray.concat(upperCaseCharacterArray);
}

if (confirm ("would you like special characters in your password?")) {
choiceArray = choiceArray.concat(specialCharacterArray);
}


if (confirm ("would you like numbers in your password?")) {
choiceArray = choiceArray.concat(numberArray);
}

if (choiceArray.length == 0){
  alert("Cannot Create based selection");

return false;
}


return true;

}


  // 3. Generate password based on criteria.
function writePassword(){
  var correctPromts= getPrompts();

  if(correctPromts){

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
else{
  passwordText.value = "";
}
}



function generatePassword(){

  var password = "";
  for (let i = 0; i < characterLenght; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArray.length);

    password = password + choiceArray[randomLetter];
    
  } ;
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

