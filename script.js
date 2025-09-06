// =============================================
// PART 1: VARIABLE DECLARATIONS & CONDITIONALS
// =============================================

// Variable declarations using different methods
let userName = "John Doe"; // let allows reassignment
const userAge = 25;        // const cannot be reassigned
var userStatus = "active"; // var (older method, function-scoped)

// Conditional example
function checkNumber() {
    const numberInput = prompt("Enter a number:");
    const number = parseInt(numberInput);
    const resultElement = document.getElementById('number-result');
    
    if (isNaN(number)) {
        resultElement.textContent = "Please enter a valid number!";
        resultElement.className = "highlight";
    } else if (number > 0) {
        resultElement.textContent = `${number} is positive!`;
        resultElement.className = "";
    } else if (number < 0) {
        resultElement.textContent = `${number} is negative!`;
        resultElement.className = "";
    } else {
        resultElement.textContent = "The number is zero!";
        resultElement.className = "";
    }
}

// =============================================
// PART 2: CUSTOM FUNCTIONS (at least 2)
// =============================================

// Function 1: Greet user
function greetUser() {
    const name = prompt("What's your name?");
    const resultElement = document.getElementById('function-result');
    
    if (name && name.trim() !== "") {
        resultElement.textContent = `Hello, ${name.trim()}! Welcome to our page!`;
        resultElement.className = "highlight";
    } else {
        resultElement.textContent = "Hello, stranger!";
        resultElement.className = "";
    }
}

// Function 2: Calculate area
function calculateArea() {
    const width = parseFloat(prompt("Enter width:"));
    const height = parseFloat(prompt("Enter height:"));
    const resultElement = document.getElementById('function-result');
    
    if (isNaN(width) || isNaN(height)) {
        resultElement.textContent = "Please enter valid numbers!";
    } else {
        const area = width * height;
        resultElement.textContent = `The area of the rectangle is: ${area}`;
    }
}

// =============================================
// PART 3: LOOPS (at least 2 examples)
// =============================================

function runLoops() {
    const outputElement = document.getElementById('loop-output');
    outputElement.innerHTML = ""; // Clear previous output
    
    // Loop 1: for loop (array iteration)
    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    let fruitList = "<h3>For Loop (Array Iteration):</h3><ul>";
    
    for (let i = 0; i < fruits.length; i++) {
        fruitList += `<li>${fruits[i]} - Index: ${i}</li>`;
    }
    fruitList += "</ul>";
    
    // Loop 2: while loop
    let counter = 1;
    let whileOutput = "<h3>While Loop (Counting):</h3><ul>";
    
    while (counter <= 5) {
        whileOutput += `<li>Count: ${counter}</li>`;
        counter++;
    }
    whileOutput += "</ul>";
    
    outputElement.innerHTML = fruitList + whileOutput;
}

// =============================================
// PART 4: DOM INTERACTIONS (at least 3)
// =============================================

// DOM Interaction 1: Change element style
function changeTitle() {
    const title = document.getElementById('main-title');
    title.style.color = title.style.color === 'red' ? 'black' : 'red';
}

// DOM Interaction 2: Create and append new element
function addListItem() {
    const list = document.getElementById('item-list');
    const newItem = document.createElement('li');
    newItem.textContent = `New item ${list.children.length + 1}`;
    list.appendChild(newItem);
}

// DOM Interaction 3: Toggle element visibility
function toggleVisibility() {
    const section = document.getElementById('part4');
    section.classList.toggle('hidden');
}

// Additional DOM interaction on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    
    // Change background color after 2 seconds
    setTimeout(() => {
        document.body.style.backgroundColor = '#e8f4f8';
    }, 2000);
});
