// script.js

// Get the header element
var header = document.querySelector("header");

// Add an event listener to the header element
header.addEventListener("click", function() {

   // Generate a random number between 0 and 255
   var random = Math.floor(Math.random() * 256);

   // Convert the random number to a hexadecimal string
   var hex = random.toString(16);

   // Pad the hexadecimal string with zeros if necessary
   if (hex.length < 2) {

       hex = "0" + hex;

   }

   // Create a random color code using three hexadecimal strings
   var color = "#" + hex + hex + hex;

   // Change the background color of the header element to the random color
   header.style.backgroundColor = color;

});

// Get the button element
var button = document.querySelector("button");

// Add an event listener to the button element
button.addEventListener("click", function() {

   // Create an array of quotes from the tech heroes
   var quotes = [

       "That brain of mine is something more than merely mortal; as time will show.",

       "Search engines are not merely 'finding' what was already there; they are helping to construct our social reality.",

       "We have to be able to interrogate systems that we place in positions of authority."

   ];

   // Get a random index from the array
   var index = Math.floor(Math.random() * quotes.length);

   // Get the quote at that index
   var quote = quotes[index];

   // Get the paragraph element
   var paragraph = document.querySelector("p");

   // Change the text content of the paragraph element to the quote
   paragraph.textContent = quote;

});

// Get the form element
var form = document.querySelector("form");

// Add an event listener to the form element
form.addEventListener("submit", function(event) {

   // Prevent the default action of submitting the form
   event.preventDefault();

   // Get the input element
   var input = document.querySelector("input");

   // Get the value of the input element
   var value = input.value;

   // Check if the value is empty or not
   if (value === "") {

       // Alert the user to enter a value
       alert("Please enter a value");

   } else {

       // Alert the user that the value is submitted
       alert("You submitted: " + value);

   }

});
