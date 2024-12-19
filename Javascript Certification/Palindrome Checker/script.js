// Get references to the DOM elements
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultElement = document.getElementById("result");

checkBtn.addEventListener("click", function () {
  const userInput = textInput.value.trim();

  // Check if input is empty
  if (userInput === "") {
    alert("Please input a value");
    return;
  }

  // Clean the input by removing non-alphanumeric characters and converting to lowercase
  const cleanedInput = userInput.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Function to check if the input is a palindrome
  function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }

  // Determine the result
  if (isPalindrome(cleanedInput)) {
    resultElement.innerText = `${userInput} is a palindrome`;
    resultElement.classList.remove("not-palindrome");
  } else {
    resultElement.innerText = `${userInput} is not a palindrome`;
    resultElement.classList.add("not-palindrome");
  }
});
