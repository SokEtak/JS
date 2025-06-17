const form = document.querySelector('form')
let counter = 0
//ex1 new version vdo
// Event listener for form submission
//simple example
// form.addEventListener('submit', (e) => {
//     // Prevents the default form submission behavior (e.g., page reload)
//     // Without e.preventDefault(), the browser would automatically submit the form, 
//     // send the data to the server, and reload the page or navigate away.
//     // With e.preventDefault(), the form submission is stopped, 
//     // allowing for custom behavior (like validation or AJAX requests) without page reload.
//     e.preventDefault()
//     console.log(`form submitted:${++counter} times`) //added more
// })

//example 2:New version vdo
// const input = form.elements.input
// const list = document.querySelector('#itemNameList')

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     // e.
//     console.log(`${input.value}`)
//     const item = document.createElement('li')
//     item.innerHTML=input.value
//     list.append(item)
// })

//example 3:orignal version vdo
const list = document.querySelector('#itemNameList')  // Select the list where items will be displayed

form.addEventListener('submit', (e) => {
    e.preventDefault()  // Prevent the default form submission behavior

    // Get the input values when the form is submitted
    const itemNameInput = document.querySelector('#product')  // Get the item name input element
    const qtyInput = document.querySelector('#qty')  // Get the quantity input element

    const itemNameValue = itemNameInput.value  // Get the value from the item name input field
    const qtyValue = qtyInput.value  // Get the value from the quantity input field

    console.log(`${itemNameValue}: ${qtyValue}`)  // Log the item name and quantity to the console

    // Create a new list item and append it to the list
    const item = document.createElement('li')  // Create a new <li> element
    item.innerHTML = `${itemNameValue} - ${qtyValue}`  // Set the inner content of the <li> with item name and quantity
    list.append(item)  // Append the new <li> to the list

    // Reset the input fields after the form submission
    itemNameInput.value = ""  // Clear the item name input field
    qtyInput.value = ""  // Clear the quantity input field
})


