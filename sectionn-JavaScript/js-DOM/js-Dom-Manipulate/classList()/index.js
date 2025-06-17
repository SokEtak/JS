// Selects the first element in the document with the class 'simple'
let default_div = document.querySelector('.simple');

// Adds the 'border-radius' class to the selected element.
// This does not remove any existing classes, so the element will now have both 'simple' and 'border-radius' classes.
// The styles for both classes will be applied to the element.

default_div.classList.add('border-radius');

// Toggles the 'border-radius' class on the selected element.
// If the 'border-radius' class is present, it will be removed; if it is absent, it will be added.
// This allows for dynamically adding or removing the class.

default_div.classList.toggle('border-radius');

// Checks if the 'border-paragraph' class is present on the selected element.
// Returns 'true' if the class is found, otherwise 'false'.
// This can be useful for conditional logic or checks.
default_div.classList.contains('border-paragraph');

