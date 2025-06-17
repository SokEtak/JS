//Event Delegation
const lis = document.querySelectorAll('li')
const container = document.querySelector('ul')
let i = 1

for (let li of lis) {
    li.addEventListener('click', (e) => {
        console.log(e);  // Log the event object  
        // li.remove();  // Remove the clicked <li> element
        e.target.remove()
        console.log(`${e.target.textContent} get remove from ul`);  // Log the index of the clicked item
        console.log(`total removed item:${i}`);
        i++;  // Increment the index after each removal
    });
}

container.addEventListener('click',(e)=>{
    let childCount=container.childElementCount  // Log the index of the clicked item
    console.log(e)
    // console.log("ul clicked")
    console.log(`ul children remianig:${childCount}`)
})