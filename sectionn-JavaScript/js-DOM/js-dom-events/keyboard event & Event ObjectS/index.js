const input = document.querySelector('input')

// //trigger when any key press(or hold)
// input.addEventListener('keydown',()=>{console.log("key down")})
// //trigger when relesed    
// input.addEventListener('keyup',()=>{console.log("key up")})

// input.addEventListener('keydown',(e)=>{console.log(`key:${e.key}-code:${e.code}`)})

//look like a game
// const hero = document.querySelector('#hero');
// hero.style.transition = 'transform 0.2s ease';
// // Initialize position variables for x and y
// let posX = 0;
// let posY = 0;
// //look like real game
// window.addEventListener('keypress', (e) => {
//     console.log(e.key);

//     // Move left
//     if (e.key.toLowerCase() === "a") {
//         posX -= 50; // Move left by 10px
//     }
//     // Move right
//     else if (e.key.toLowerCase() === "d") {
//         posX += 50; // Move right by 10px
//     }
//     // Move up
//     else if (e.key.toLowerCase() === "w") {
//         posY -= 50; // Move up by 10px
//     }
//     // Move down
//     else if (e.key.toLowerCase() === "s") {
//         posY += 50; // Move down by 10px
//     } else {
//         console.log("Invalid key");
//     }

//     // // Apply the cumulative transform
//     hero.style.transform = `translate(${posX}px, ${posY}px)`;
// });


// //from Ai
// const hero = document.querySelector('#hero');

// // Initialize position variables for x and y
// let posX = 0;
// let posY = 0;
// let isMovingLeft = false;
// let isMovingRight = false;
// let isMovingUp = false;
// let isMovingDown = false;

// // Set up a CSS transition for smooth movement
// hero.style.transition = 'transform 0.2s ease'; // 0.2s is the timing for smooth animation

// window.addEventListener('keydown', (e) => {
//     console.log(e.key); // Logs the key pressed

//     // Only move if the key hasn't been pressed already
//     if (e.key.toLowerCase() === "a" && !isMovingLeft) {
//         isMovingLeft = true;
//         isMovingRight = false;
//         isMovingUp = false;
//         isMovingDown = false;
//     } else if (e.key.toLowerCase() === "d" && !isMovingRight) {
//         isMovingLeft = false;
//         isMovingRight = true;
//         isMovingUp = false;
//         isMovingDown = false;
//     } else if (e.key.toLowerCase() === "w" && !isMovingUp) {
//         isMovingLeft = false;
//         isMovingRight = false;
//         isMovingUp = true;
//         isMovingDown = false;
//     } else if (e.key.toLowerCase() === "s" && !isMovingDown) {
//         isMovingLeft = false;
//         isMovingRight = false;
//         isMovingUp = false;
//         isMovingDown = true;
//     }
// });

// window.addEventListener('keyup', (e) => {
//     console.log(e.key); // Logs the key released

//     // Stop the movement when the key is released
//     if (e.key.toLowerCase() === "a") {
//         isMovingLeft = false;
//     } else if (e.key.toLowerCase() === "d") {
//         isMovingRight = false;
//     } else if (e.key.toLowerCase() === "w") {
//         isMovingUp = false;
//     } else if (e.key.toLowerCase() === "s") {
//         isMovingDown = false;
//     }
// });

// // Update the position based on the current movement
// function updatePosition() {
//     if (isMovingLeft) {
//         posX -= 1; // Move left
//     }
//     if (isMovingRight) {
//         posX += 1; // Move right
//     }
//     if (isMovingUp) {
//         posY -= 1; // Move up
//     }
//     if (isMovingDown) {
//         posY += 1; // Move down
//     }

//     // Apply the cumulative transform
//     hero.style.transform = `translate(${posX}px, ${posY}px)`;

//     // Call this function repeatedly to keep moving the element
//     requestAnimationFrame(updatePosition);
// }

// // Start the position updates
// updatePosition();


// //another from ai

// const hero = document.querySelector('#hero');

// // Initialize position variables for x and y (starting at the origin)
// let posX = 0;
// let posY = 0;

// // Movement speed (in pixels per step)
// const speed = 10;

// // Initial direction
// let direction = 'right'; // Possible values: 'left', 'right', 'up', 'down'

// // Set up a CSS transition for smooth movement
// hero.style.transition = 'transform 0.1s linear'; // Smooth transition for movement

// // Listen for keydown to change direction
// window.addEventListener('keydown', (e) => {
//     if (e.key.toLowerCase() === 'a' && direction !== 'right') {
//         direction = 'left'; // Move left
//     } else if (e.key.toLowerCase() === 'd' && direction !== 'left') {
//         direction = 'right'; // Move right
//     } else if (e.key.toLowerCase() === 'w' && direction !== 'down') {
//         direction = 'up'; // Move up
//     } else if (e.key.toLowerCase() === 's' && direction !== 'up') {
//         direction = 'down'; // Move down
//     }
// });

// // Update position based on direction
// function move() {
//     switch (direction) {
//         case 'left':
//             posX -= speed; // Move left
//             break;
//         case 'right':
//             posX += speed; // Move right
//             break;
//         case 'up':
//             posY -= speed; // Move up
//             break;
//         case 'down':
//             posY += speed; // Move down
//             break;
//     }

//     // Apply the cumulative transform (moves the hero element)
//     hero.style.transform = `translate(${posX}px, ${posY}px)`;

//     // Call the move function again to keep the element moving
//     setTimeout(move, 100); // 100 ms interval for smooth, continuous movement
// }

// // Start the movement loop
// move();

//another one from ai
const hero = document.querySelector('#hero');

// Initialize position variables for x and y (starting at the origin)
let posX = 0;
let posY = 0;

// Movement speed (in pixels per step)
const speed = 10;

// Initial direction
let direction = 'right'; // Possible values: 'left', 'right', 'up', 'down'

// Movement state (is the hero moving?)
let isMoving = true; // Hero starts moving

// Set up a CSS transition for smooth movement
hero.style.transition = 'transform 0.1s linear'; // Smooth transition for movement

// Listen for keydown to change direction or stop movement
window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'a' && direction !== 'right') {
        direction = 'left'; // Move left
    } else if (e.key.toLowerCase() === 'd' && direction !== 'left') {
        direction = 'right'; // Move right
    } else if (e.key.toLowerCase() === 'w' && direction !== 'down') {
        direction = 'up'; // Move up
    } else if (e.key.toLowerCase() === 's' && direction !== 'up') {
        direction = 'down'; // Move down
    } else if (e.key === ' ' || e.key === 'Spacebar') {
        // Toggle the movement state on spacebar press
        isMoving = !isMoving;
    }
});

// Update position based on direction
function move() {
    if (isMoving) {
        switch (direction) {
            case 'left':
                posX -= speed; // Move left
                break;
            case 'right':
                posX += speed; // Move right
                break;
            case 'up':
                posY -= speed; // Move up
                break;
            case 'down':
                posY += speed; // Move down
                break;
        }

        // Apply the cumulative transform (moves the hero element)
        hero.style.transform = `translate(${posX}px, ${posY}px)`;
    }

    // Call the move function again to keep the element moving (if isMoving is true)
    setTimeout(move, 100); // 100 ms interval for smooth, continuous movement
}

// Start the movement loop
move();


