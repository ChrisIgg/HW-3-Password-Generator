// dependencies
var generateBtn = document.querySelector("#generate");

// returns the first "ELEMENT" (generate?) within the document that matches the specified selector
// line 28 in html

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordTextBox = document.querySelector("#password");

  // return random Password;
  passwordTextBox.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var generateBtn;
function verifyLength(pw) {
  // assume pw is integer
  // if pw < 8 || pw > 128 {
  //   pwNew = prompt("this is invalid, please enter again");
  //   return verifyLength(pw)
  // } else {
  //   return pw;
  // }
}
var passwordLength = [];
var passwordGroup = [];

function getPasswordLength() {
  var passwordLength = parseInt(prompt("pick a pw length, 8-128"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password has to be between 8 and 128 characters");
    return getPasswordLength();
  }
  return passwordLength;
}

function generatePassword() {
  // var inputIsCorrect = false;
  // while(!inputIsCorrect) {
  //   if (pw < 8) ... {
  //     pw = prompt("this was incorrect, re enter");
  //   } else {
  //     inputIsCorrect = true;
  //   }
  // }

  //     (VALIDATION)
  // if passwordLengh is less than 8 OR pwlLength is greater than 128
  //    then prompt user to redo input
  var randomPassword = "";
  var passwordLength = getPasswordLength();
  console.log(passwordLength);
  var numbers = confirm("You want number in ya pw?");
  var lowercases = confirm("ya want lowercase letters in your pw?");
  var uppercases = confirm("ya want upper cases in your pw too?");
  var special = confirm("specials too? or nah");

  var passwordArray = compileUserArrays(
    numbers,
    lowercases,
    uppercases,
    special
  );
  console.log(passwordArray);
  // randomly select characters from the pool until i have as many as the user wants
  // add each one to the random password
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordArray.length);
    var randomCharacter = passwordArray[randomIndex];
    console.log(randomCharacter);
    randomPassword += randomCharacter;
  }
  console.log(randomPassword);
  return randomPassword;
}
// 2:59

let lowerArrayString = "abcdefghijklmnopqrstuvwxyz";

var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerArray = lowerArrayString.split("");
var upperArray = String.prototype.toUpperCase.apply(lowerArrayString).split("");
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];

// const totalArray = numberArray.concat(lowerArray, upperArray, specialArray);

// needs to be called from generate password function
function compileUserArrays(numbers, lowercases, uppercases, special) {
  var passwordGroup = [];
  if (numbers) {
    passwordGroup = passwordGroup.concat(numberArray);
  } else {
    console.log("Didn't want numbers");
  }
  if (lowercases) {
    passwordGroup = passwordGroup.concat(lowerArray);
  } else {
    console.log("Didn't want lower cases");
  }
  if (uppercases) {
    passwordGroup = passwordGroup.concat(upperArray);
  } else {
    console.log("Didn't want upper cases");
  }
  if (special) {
    passwordGroup = passwordGroup.concat(specialArray);
  } else {
    console.log("Didn't want special cases");
  }
  console.log(passwordGroup);
  return passwordGroup;
}

// return "randomPasswordGenerated";

// randomPasswordGenerated = array = passwordGroup;

// return from array:live solution from mini project 28-unit 3

// const passwordAfterGroup = [];
// const finalPool = passwordAfterGroup.concat(
//   groupLower,
//   groupNumber,
//   groupUpper,
//   groupSpecial
// );
// console.log(finalPool);

// console.log(finalPool);

// function getComputerChoice() {
//   var randomNumber = Math.floor(Math.random() * options.length);
//   return options[randomNumber];

// }
// for loop creating a random number on each function

// this.length

// console.log(numberArray);
// console.log(lowerArray);
// console.log(upperArray);
// console.log(specialArray);

// // add all arrays to one source

// get user choice

// function getUserNumber() {
//   if (numbers);
//   return numberArray;
// }

// //  var numbers = true;
//  return numberArray;
// }

// let totalUserArray = [];

// totalUserArray.push(getUserNumber, getUserSpecial, getUserUpper, getUserLower);

// function getUserNumber() {
//   if (numbers) {
//     return numberArray;
//   } else {
//     console.log(No Number)
//   }
// }
// function getUserSpecials() {
//   if (special) {
//     return specialArray;
//   }
// }
// function getUserUpper() {
//   if (uppercases) {
//     return upperArray
//   }
// }
// function getUserLower() {
//   if (lowercases) {
//     return lowerArray
//   }
// }

// // !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
// let specialString = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
// const specialSplit = specialString.split("");

// console.log(specialString);
// console.log(specialSplit);

// // if approves of numbers then...
// if (numbers);
// {
//   var numberArray =
// }

// // i want a list of numbers
// var numberArray = numbers();

// // take all those numbers, and add them to another list

// var functionArray = [
//   function getNumbers() {
//     return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
//   },
//   function getLowerCases() {
//     return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
//   },
//   function getUpperCases() {
//     return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
//   },
//   function getSpecials() {
//     return String.fromCharCode(Math.floor(Math.random() * special.length));
// }

// function generatePassword() {
//   var passwordLength = prompt(
//     "Please Enter How Long You Want Your Password to Be (Between 8 and 128 characters)"
//   );
// }

// variable for all alphabets
// list and then function to split space
// function to lower case and upper case

// write out variable with numbers
// write out special characters

// ask user for apsswrod length
// prompt to choose alphabets
// prompt to choose upper case
// prompt to choose lower case
// prompt to choose specials

//
