console.log("Hello, World!");
// This is a simple JavaScript file that logs "Hello, World!" to the console.
// It can be used to test if the JavaScript environment is set up correctly.
// You can add more complex JavaScript code here as needed.
// For example, you can create functions, manipulate the DOM, or make API calls.
// Here's a simple function that adds two numbers and logs the result
function add(a, b) {
    return a + b;
}
// You can call the function and log the result
console.log(add(2, 3)); // This will log 5 to the console
// You can also create event listeners to respond to user interactions
document.addEventListener('click', function() {
    console.log('Document was clicked!');
});
// This will log a message to the console whenever the document is clicked
// You can also manipulate the DOM by selecting elements and changing their properties
const heading = document.querySelector('h1');
heading.textContent = 'Hello, JavaScript!';
// This will change the text of the first <h1> element in the document
// You can also create and append new elements to the document
const newElement = document.createElement('p');
newElement.textContent = 'This is a new paragraph.';