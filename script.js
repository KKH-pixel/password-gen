// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //TODO: your code here 

//Pseudo Code

//create global variables
    //password length


    //passwordLength is user define function define by us.
    //function is keyword  
    
        //lowercase array
    var passLower = "abcdefghijklmnopqrstuvwxyz".split("");
    
        //uppercase array
    var passUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    
        //special characters array
    var passSpecial = "~`!@#$%^&*()-_+={}[]|/:;'<>,.?".split("");
    
        //numbers array
    var passNums = "0123456789".split("");
    
        //array to hold all characters user wants in password/poss characters array
    var passFinal = [];

//variables for responses to confirms/prompts


//display a prompt asking user for password
    //TODO: match edge cases - is a number && is greater than or = to 8 and less than or = to 129
    

while (true) {
    var passLength = prompt("Please enter length of your password (8-128 characters)");

    if (isNaN(passLength)) {
        alert("You must enter a number.");
        continue;
    }
    if (passLength < 8){
        alert("Password must be between 8 - 128 characters.");
        continue;
    }
    if (passLength > 128){
        alert("Password must be between 8 - 128 characters.");
        continue;
    }
    break;
}

//TODO: ensure that they answered true to at least one confirm
//display confirms for all different character types (listed & README)

while (true) {
    var confUpper = confirm("Do you want to use uppercase letters?");
    var confLower = confirm("Do you want to use lowercase letters?");
    var confNums = confirm("Do you want to use numbers?");
    var confSpecial = confirm("Do you want to use any special characters?");
    if (confUpper || confLower || confNums || confSpecial){
        break;
    }
    alert("You must choose at least one option.");
}

// check IF user answered true to any of the confirms & add that array to the poss characters array  

if (confUpper === true) {
    passFinal = passFinal.concat(passUpper);
}
if (confLower === true) {
    passFinal = passFinal.concat(passLower);
}
if (confNums === true) {
    passFinal = passFinal.concat(passNums);
}
if (confSpecial === true) {
    passFinal = passFinal.concat(passSpecial);
}

console.log(passFinal)
// create a variable that will hold the final password

// create a loop for as long as the password length
    //for each iteration, select a random character out of the possible character array and add it to the final password variable

var extraSecretPassword = ""
for (i = 0; i <= passLength; i++) {
    var randomIndex = Math.floor(Math.random() * passFinal.length);
    var randomChar = passFinal[randomIndex];
    extraSecretPassword = extraSecretPassword + randomChar;
}

// return the final password from the generate password function

  return extraSecretPassword
}

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);
