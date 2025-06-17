//first example
// const timer = document.querySelector('h1')
// console.log("first")
// setTimeout(()=>{
//     console.log("second") // printed after 3 seconds
// },3000)
// console.log("third")


// second example
// setTimeout(()=>{
//     document.body.style.backgroundColor = "red"
//     console.log("red")
//     setTimeout(()=>{
//         document.body.style.backgroundColor = "blue"
//         console.log("blue")
//         setTimeout(()=>{
//             document.body.style.backgroundColor = "green"
//             console.log("green")
//             setTimeout(()=>{
//                 console.log("pink")
//                 document.body.style.backgroundColor = "pink"
//                 console.log("No more color to change")
//             },1500)
//         },1500)
//     },1500)
// },1500)

//third 
// const delayChangeColor = (delay=1000,newColor,doNext)=>{
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor
//         doNext()
//     }, delay);
// }

// delayChangeColor(1000,"red",()=>{ 
//     delayChangeColor(1000,"purple",()=>{
//         delayChangeColor(1000,"pink",()=>{
//             delayChangeColor(1000,"yello",()=>{
//                 delayChangeColor(1000,"white",()=>{
//                 })  
//             })  
//         })  
//     })  
// })

// third example remake it with Promise

const delayedChangeColor = (color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color
            resolve()
        },delay)
    })
}
delayedChangeColor("red",1000)
    .then(()=>delayedChangeColor("blue",1000))
    .then(()=>delayedChangeColor("pink",1000))
    .then(()=>delayedChangeColor("orange",1000))
    .then(()=>delayedChangeColor("green",1000))


//fourth

//easy

// const heros = ['wanda','doctor', 'spiderman'];

// // function foundCallback(){
//     //     console.log('Hero found!');
//     // }
    
// // function notFoundCallback(){
// //     console.log('Hero not found!');
// // }
// // searchMarvelHeroes('wanda'.toLowerCase(),foundCallback,notFoundCallback)

// //hard
// function searchMarvelHeroes(hero, foundCallback, notFoundCallback) {
//     // Simulating searching in the Marvel universe
//     const marvelUniverseHeros = ['ironman', 'thor']; // List of Marvel universe heroes
    
//     if (marvelUniverseHeros.includes(hero.toLowerCase())) {
//         foundCallback(); // Hero found in Marvel universe
//     } else {
//         notFoundCallback(); // Hero not found in Marvel universe
//     }
// }

// function search(hero, searchHeroInTheList, doNextIfNotFound) {
//     if (heros.includes(hero.toLowerCase())) {
//         searchHeroInTheList(hero);  // First, check the local hero list
//     } else {
//         doNextIfNotFound();  // Proceed with next action if not found in the list
//     }
// }

// // Using the search function
// search('Wanda', 
//     (hero) => { // Callback when hero is found in the list
//         console.log('Hero found in the list');
        
//         searchMarvelHeroes(hero, // Search in the Marvel universe
//             () => { // Hero found in Marvel universe
//                 console.log('Hero found in the Marvel universe!');
//             }, 
//             () => { // Hero not found in Marvel universe
//                 console.log('Hero not found in the Marvel universe!');
//             }
//         );
//     },
//     () => { // Callback if hero is not found in the list
//         console.log('Hero not found in the list');
//     }
// );









