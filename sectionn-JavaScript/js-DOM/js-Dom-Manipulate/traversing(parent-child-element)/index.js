//check the parent of element
let firstAnchor = document.querySelector('a').parentElement // h1

// let firstAnchor= document.querySelector('a').parentElement.parentElement // div
// ...so on

//check the children 
let childrenOfFirstDiv = document.querySelector('#container1').children//[h1,h2,h1,h1,h1]

//countChildren
let childCount = document.querySelector('#container1').childElementCount//5

let childrenOfFirstAnchor = firstAnchor.children

childrenOfFirstAnchor[0] //first child of h1 inside container1

//next sibling
// is the next sibling node of the #container1 element, which includes text nodes, element nodes, or comment nodes.
// In this specific case, there is a newline character (text node) after the #container1 div before the #container2 div. So, nextSibling will refer to that text node.

let  nextSibling=document.querySelector('#container1').nextSibling 

//previous sibling
// This will give you the previous sibling node of the #container1 div.
// In your HTML, before #container1, there is whitespace (likely a newline character). This whitespace is treated as a text node. So, previousSibling will refer to that text node.

let  previousSibling = document.querySelector('#container1').nextSibling 

//next Element Sibling
let nextElementSibling = document.querySelector('#container1').nextElementSibling//#container2

//previous Element Sibling
let previousElementSibling = document.querySelector('#container2').previousElementSibling//#container1
