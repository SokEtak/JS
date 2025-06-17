const createNewButton = (element) => {
    const newButton = document.createElement(element)
    newButton.textContent="Click"
    newButton.style.width='55px'
    newButton.style.height='55px'
    newButton.style.margin='2px'
    return newButton
}
//select element
const parent =  document.querySelector('#container')

let i = 0

while(i<=20){
    const newButton = createNewButton('button')
    parent.appendChild(newButton)
    i++
}

// Function to generate a random RGB color
const getRandomColor = () => {
    // Helper function to generate a random number between 0 and 255
    const randNum = () => { 
        return Math.floor(Math.random() * 255); 
    };

    // Return an RGB color string using three random numbers
    return `rgb(${randNum()},${randNum()},${randNum()})`; // Example: "rgb(123,45,67)"
};

// Function to apply a random background color to the clicked element
function colorize() {
    // `this` refers to the element that triggered the event (in this case, the button clicked)
    console.log(this); // Logs the button element to the console for debugging
    this.style.backgroundColor = getRandomColor(); // Set the background color to a random RGB value
    this.textContent="clicked";
}

// Select all buttons in the document
const buttons = document.querySelectorAll('button'); 

// Attach an event listener to each button
for (let button of buttons) {
    // When a button is clicked, call the `colorize` function
    button.addEventListener('click', colorize); 
}
