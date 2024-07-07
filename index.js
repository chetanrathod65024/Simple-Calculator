// Select the input element with id 'inputBox' and assign it to the variable 'input'
let input = document.getElementById("inputBox");

// Select all button elements in the document and assign them to the variable 'buttons'
let buttons = document.querySelectorAll("button");

// Initialize an empty string to store the input sequence
let string = "";

// Convert the NodeList of buttons into an array to use array methods on it
let arr = Array.from(buttons);

// Iterate over each button in the array
arr.forEach((button) => {
  // Add a click event listener to each button
  button.addEventListener("click", (e) => {
    // Check if the clicked button's inner HTML is '='
    if (e.target.innerHTML == "=") {
      // Evaluate the string as a mathematical expression and assign the result back to 'string'
      string = eval(string);
      // Update the input box's value to display the result
      input.value = string;
    }
    // Check if the clicked button's inner HTML is 'AC'
    else if (e.target.innerHTML == "AC") {
      // Clear the string and update the input box to be empty
      string = "";
      input.value = string;
    }
    // Check if the clicked button's inner HTML is 'DEL'
    else if (e.target.innerHTML == "DEL") {
      // Remove the last character from the string
      string = string.substring(0, string.length - 1);
      // Update the input box to reflect the changed string
      input.value = string;
    }
    // For any other button (numbers and operators)
    else {
      // Append the clicked button's inner HTML to the string
      string += e.target.innerHTML;
      // Update the input box to reflect the new string
      input.value = string;
    }
  });
});