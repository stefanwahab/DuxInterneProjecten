// scripts.js
const inputField = document.getElementById('inputField');
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const checkbox3 = document.getElementById('checkbox3');
const passwordField = document.getElementById('passwordField');
const entropyField = document.getElementById('entropyField');
const strengthField = document.getElementById('strengthField');

/*
We start with an empty string, then we check every box if it is checked.
If the box is checked, the possible characters are appended to the string 
of possible characters. Then randomly sample characters from this possible 
character string and add it to the password untill the desired length is 
reached.
*/
function handleSubmit() {
    if (isNaN(inputField.value)) {
        alert('Warning: Input field must contain a number.');
        return; 
    }

    if (inputField.value.trim() === '') {
        alert('Warning: Input field must contain a number.');
        return; 
    }

    console.log(inputField.value)
    
    var nothingChecked = true
    var passwordLength = inputField.value
    var possibleCharsString = ""
    if (checkbox1.checked) {
        possibleCharsString += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        nothingChecked = false
    }
    if (checkbox2.checked) {
        possibleCharsString += "1234567890"
        nothingChecked = false
    }
    if (checkbox3.checked) {
        possibleCharsString += "`~!@#$%^&*()_+=-\][|}{';:/.,?><"
        nothingChecked = false
    }

    if (nothingChecked) {
        alert('Warning: Please check a box.');
        return; 
    }

    console.log("possible characters: ", possibleCharsString)
    console.log("possible characters string length: ", possibleCharsString.length)
    console.log("password length: ", passwordLength)

    
    var password = ""

    while (password.length < passwordLength) {
        var randomInt = getRandomInt(possibleCharsString.length+1)
        password += possibleCharsString.charAt(randomInt)
    }

    var entropy = passwordLength*Math.log(possibleCharsString.length)/Math.log(2)
    passwordField.textContent = "Password: " + password
    entropyField.textContent =  "Entropy: " + String(entropy)
    
    if (entropy < 30) {
        strengthField.textContent = "Strength: Weak"
        return
    }
    if (entropy < 50) {
        strengthField.textContent = "Strength: Medium"
        return
    }
    else {
        strengthField.textContent = "Strength: Strong"
        return
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}