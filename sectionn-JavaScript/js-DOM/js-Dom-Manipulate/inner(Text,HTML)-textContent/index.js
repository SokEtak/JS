// innerText
let newText1 = document.querySelector('h1');
newText1.innerText += "<a>this is inner text</a>"; // Treated as plain text

// innerHTML
let newText2 = document.querySelector('h1');
newText2.innerHTML += "<i>this is italicized added text</i>"; // Treated as HTML,this line will set to <i></i> with new content

//it return a collection not an element , if u want to style it let do it individually
let h1ListSelector = document.querySelectorAll('h1')

// test.forEach(element=>{
//     element.innerHTML = "<i>new text</i>"
// })

let newText3 = document.querySelector('h1');
newText3.textContent = "new added string"; // Treated as plain text even if it looks like HTML

// Explanation of Changes:
// innerText: Displays the added string exactly as it is (e.g., the <a> tag remains visible as text).
// innerHTML: Parses the string and renders the HTML structure (e.g., <i> creates italicized text).
// textContent: Assigns the string as plain text, ignoring any HTML tags (e.g., <i> or <a> will be displayed as text, not as elements).





