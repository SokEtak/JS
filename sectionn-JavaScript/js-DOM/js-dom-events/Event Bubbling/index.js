// Event bubbling is a concept in JavaScript's event handling mechanism, 
// where an event triggered on an element propagates (or "bubbles") up through 
// its parent elements, all the way to the root of the document (usually the document 
// object). This means that if you trigger an event on a child element, the event 
// will also be received by its parent elements, then its parent's parent, and so on.

document.querySelector('#parent').addEventListener('click', () => {
    console.log('Parent Clicked');
});

document.querySelector('#child').addEventListener('click', () => {
    console.log('Child Clicked');
});
