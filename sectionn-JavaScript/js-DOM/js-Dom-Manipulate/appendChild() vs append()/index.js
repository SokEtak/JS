//appendChild()
// Create a new image element
const newImage = document.createElement('img');

// Set the image source
newImage.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpa-OPGCHyX-GPQRrwoR289o79lh94R-ERw&s');

// Set the width and height styles
newImage.style.width = '200px';
newImage.style.height = '200px';

// Add a class to make the image circular
newImage.classList.add('circular-img');

// Append the image to the document body
document.body.appendChild(newImage);

//note from createElement untill append the image , let test it in brower tool



//append():can also append(add to the end of element) the text and box...

const container = document.querySelector('.container')

const newTextContent = "I am spiderman"

container.append(newTextContent)

// Create a new div element
const box1 = document.createElement('div');

// Set the width, height, and background color styles
box1.style.width = '200px';
box1.style.height = '200px';
box1.style.backgroundColor = 'purple';

// Append the div to the container
document.querySelector('.container').append(box1);

//prepend():same as append() excet  that it append to the beginning of the element

const div = document.querySelector('.container')


//insertAdjacentElement

// Create a new header element
const header = document.createElement('h1');
header.textContent = 'Header of the paragraph';

// Select the target div element
const paragraph = document.querySelector('div');

// Insert the header before the div element
paragraph.insertAdjacentElement('beforebegin', header);

// Create a new paragraph element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'lofasjdfhjashfjhasdjk';

// Insert the new paragraph at various positions relative to the div
paragraph.insertAdjacentElement('afterbegin', newParagraph); // Inside, before the first child
paragraph.insertAdjacentElement('afterend', newParagraph);   // Outside, after the div

// syntax: targetElement.insertAdjacentElement(where,elmenet)
//all available position
// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.

//another way : after()
// syntax: targetElement.after(newElement)
// ex: h1.after(newElement)
//insert it to new element

//another way : before() , work opsosite of after()







