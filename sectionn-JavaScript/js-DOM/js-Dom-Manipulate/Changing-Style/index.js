// Select the first <h1> element inside the <body> tag
let h1 = document.querySelector('h1')

// CSS style is written as:
// element {
//     property: value
// }
// Example:
// h1 {
//     color: red
//     font-size: 12px
//     font-family: Arial
// }

// In JavaScript, styling is applied using camelCase, not hyphenated names.

// JavaScript equivalent of the CSS styles:

// Set the text color of the <h1> element to red
h1.style.color = 'red'  // Equivalent to 'color: red' in CSS

// Set the font size of the <h1> element to 12px
h1.style.fontSize = '12px'  // Equivalent to 'font-size: 12px' in CSS

// Set the font family of the <h1> element to Arial
h1.style.fontFamily = 'Arial'  // Equivalent to 'font-family: Arial' in CSS


// Select all <h1> elements in the document
let allH1 = document.querySelectorAll('h1')

// Loop through all <h1> elements and apply styles to each
for (let indiviudalH1 of allH1) {
    // Set the background color of each <h1> element to red
    indiviudalH1.style.background = "red" 
    
    // Set the font size of each <h1> element to 50px
    indiviudalH1.style.fontSize = "50px"  
    
    // Set the text color of each <h1> element to white
    indiviudalH1.style.color = "white"  
}

// Use getComputedStyle to retrieve the computed styles of the first <h1> element
// This will return an object containing the actual styles applied to the element
let computedStyle = window.getComputedStyle(h1)

// Log the 'fontStyle' property to the console to check the computed font style
computedStyle.fontStyle  // Returns the font style of the first <h1>

// To change the font style, you need to directly modify the element's style
computedStyle.fontStyle.fontStyle="italic" // no affect
h1.style.fontStyle = 'italic'  // Sets the font-style of the first <h1> element to italic
