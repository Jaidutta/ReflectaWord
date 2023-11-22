// get the value from the interface
// 1. starts or Controller function

function getValue() {
  

  // make sure the alert is turned off
  document.getElementById("alert").classList.add("invisible");

  // get userString from the page
  let userString = document.getElementById("userText").value;

  // check for a palindrome
  let returnedObj = checkForPalindrome(userString);
  
  // display the message to the screen
  displayMessage(returnedObj);
}

// generate numbers from startValue to endValue
// 2. Logic function(s) -- This could be multiple function if it is complex


// check if the string is a palindrome
function checkForPalindrome(text) {

  // Taco Cat 
  // taC ocaT
  //Taco, Cat
  
  // change the user Text to lowercase
  text = text.toLowerCase().trim();

  // remove spaces and special characters
  let regex = /[^a-z0-9]/gi;
  text = text.replace(regex, "");
    
  let revString = [];
  let returnObj = {};
  for (let index = text.length - 1; index >= 0; index--) {
    revString += text[index];
  }

  
  if(revString === text) {
    returnObj.msg = "Well Done! You have entered a Palindrome";
  } else {
    returnObj.msg = "Sorry! You did not enter a Palindrome";
  }
  returnObj.reversed = revString;

  return returnObj;
}


// display the numbers and mark the even numbers in bold
// 3. display or View function


// display a message to the user
function displayMessage(data) {
  
  document.getElementById("alertHeader").innerHTML = data.msg;
  document.getElementById("msg").innerHTML = `Your phrase reversed is ${data.reversed}`;

  // make the alert visible to the user
  document.getElementById("alert").classList.remove("invisible");
}
