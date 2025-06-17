const btn = document.querySelector('#btn1');
const h1 = document.querySelector('h1');
const body = document.querySelector('body');

const getRandNumber = () =>{ return Math.floor(Math.random() * 256) }

btn.addEventListener('click', () => {
    // Generate random RGB values
    const r = getRandNumber()
    const g = getRandNumber()
    const b = getRandNumber()

    // Create RGB color string
    const myrgb = `rgb(${r},${g},${b})`;
    
    // Apply the color to the body background
    body.style.backgroundColor = myrgb;
    
    // Update the h1 text content to display the color
    h1.textContent = `Current color: ${myrgb}`;
});
