//removecChild() : remove child from a container(safe)

// const container = document.querySelector('ul')
// const firstLi = document.querySelector('li')

// //remove() : remove itself from it parant(not safe)
// const uselessHeader = document.querySelector('.uselessHeader')

let colors = [
    "pink", "red", "blue", "purple", "cyan", "orange",
    "yellow", "lime", "teal", "navy", "magenta",
    "gold", "silver", "brown", "maroon", "olive", "coral",
    "chocolate", "indigo", "violet", "turquoise", "aquamarine",
    "crimson", "plum", "salmon", "khaki", "lavender", "peach",
    "mint", "beige", "mustard", "skyblue", "periwinkle", "rose",
    "amber", "emerald", "sapphire", "ruby", "ivory", "tan",
    "chartreuse", "denim", "eggplant", "umber", "ash", "jade",
    "copper", "bronze", "sand", "orchid", "steelblue", "seagreen",
    "slategray", "azure", "thistle", "wheat", "blush", "moccasin",
    "honeydew", "linen", "papayawhip"
  ]  // Fixed array

const boxContainer = document.querySelector('.box-container'); // Ensure this class exists in HTML

let i = 0;
while (i < 100) {
    let box = document.createElement('div');
    box.style.width = '30px';
    box.style.height = '30px';

    // Generate a random index for colors
    const randomColor = Math.floor(Math.random() * colors.length);
    console.log(randomColor)
    box.style.backgroundColor = `${colors[randomColor]}`;

    // Center text inside the box
    box.style.display = 'flex';
    box.style.justifyContent = 'center';
    box.style.alignItems = 'center';

    box.textContent = `${i + 1}`; // Display the number inside the box
    box.style.marginBottom = '10px';

    // Append the box to the container
    boxContainer.appendChild(box);
    i++;
}
