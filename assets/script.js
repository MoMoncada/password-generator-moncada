
// Assignment Code

// required variables declaration
var charLength 
var selectedCharArray = []; // blank array to store all the different characters we choose to create the password

// character array possibilities declaration
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];



var generateBtn = document.querySelector("#generate"); // targets id= generate inside the <button> tag and stores it inside 'generateBtn'

generateBtn.addEventListener("click", writePassword);  // added "click" event that will trigger the 'writePassword' function



// ----- Clicking on the 'Generate Password' button will trigger a series of questions required to generate a random password ----- //


function userPromptsChoices () {
  
  selectedCharArray = [];

  // the project's requirements ask for a password between 8=128 characters
  charLength = parseInt(prompt("How many characters do you want in your password (password needs to have 8-128 characters)?")); // used 'parseInt' to make sure the answer returs as a number and not as a string

  
// We need to make sure the user enters a number AND a it's between 8-128
    if(isNaN(charLength) || charLength < 8 || charLength >128 ) { 
      alert("Character length needs to be a number (8-128 characters). Pay attention!");
      return false; 
    
  }


  //The 'confirm' method displays a dialog box with a message, an OK button, and a Cancel button.
   if (confirm("Do you want to use Numbers in your password?")) {
      selectedCharArray =  selectedCharArray.concat(numberChar);
  
  }
  
  if (confirm("Do you want to use Lower Case letters in your password?")) {
      selectedCharArray = selectedCharArray.concat(lowerCaseChar);
  
  }

  if (confirm("Do you want to use Upper Case letters in your password?")) {
      selectedCharArray = selectedCharArray.concat(upperCaseChar);

  }

  if (confirm("Do you want to use Special Characters in your password?")) {
      selectedCharArray = selectedCharArray.concat(specialChar);

  }
  
  if(selectedCharArray.length === 0) {  
      alert("You need to choose at least one type of character!");
}

     
return true;

 }

// ----- After the user has decided what characters to include in their password, the password can be generated ----- //

function generatePassword () { 
  var password = "";
    for(var i=0; i<charLength; i++) { // the for loop will run as many times as the user previously selected (between 8-128 times)
      var randOutput = Math.floor(Math.random() * selectedCharArray.length);
      password = password + selectedCharArray[randOutput]; // our blank array will fill up with random outputs of characters and added to the variable 'password'
 
  } 

return password; 
}




// ----- We need to display the password value into the input box for the user to see ----- //

// Write password to the #password input
function writePassword() {
  var promptsInfo = userPromptsChoices(); // if the user's choices are acceptable, the array is contained in 'PromptInfo'
  var passwordText = document.querySelector("#password"); // looks for the id = password inside the <textarea> tag

  if (promptsInfo) { 
       
       var finalPassword = generatePassword(); //  this function was defined in lines 68-77
       passwordText.value = finalPassword; // the value of 'passwordText" is stored inside 'finalPassword'

  } else {
    passwordText.value = ""; 
  }

}








