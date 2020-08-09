// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var howMany = prompt("How many characters?");
    if (howMany < 8) {
        alert("Password must be 8-128 characters in length")
    }
    if (howMany >= 8) {
        prompt("Do you need to include special characters?")
    }
    prompt("Upper and lowercase?")

    prompt("Here's your new password!")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

    //const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //const uppercase = lowercase.join("").toUpperCase().split("");
    //const specialChars = arg.split("").filter(item => item.trim().length);
    //const numbers = ["0, 1, 2, 3, 4, 5, 6, 7, 8, 9"]
    //let hasNumber = false;
    //let hasUpper = false;
    //let hasLower = false;
    //let hasSpecial = false;

    //if (Number)


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
