//for each
let numbers =[1,2,3,4,5,6]

//  numbers.forEach(function(n){
//     console.log(n*n)
// })

numbers.forEach(function(n){
    if(n%2 === 0){
        console.log(n)        
    }
}) 

//map 
let square = numbers.map(function(n){
    return n*n 
})
console.log(square)        

//Find method
let players = ["Mr. Fa","Mr. Fe","Mr. Sico","Mrs. koli","Mrs. jiji"] 

let foundPlayers = players.find(player=>{
    return player.includes("Mr")
})

console.log(foundPlayers) //Mr. Fa

//filter method

//print only even number
numbers.filter(n=>{
    if( n % 2 === 0){
       console.log(n) 
    }
})

//some method
let words = ["Hello","Kilo","Green","dog","He","She","Hi","ABCDEF"]

// Check if there is any word in the 'words' array with a length greater than 5
let isContainMoreThan5Characters = words.some(word=>{
    return word.length>5
})
console.log(isContainMoreThan5Characters)

//if any word from the list contain 'h' or 'H' result will be true 
console.log(words.some(word => word[0] === 'H' || 'h'))

// Check if there is any word in the 'words' array with a length less than 2
console.log(words.some(word=>word.length<2))

//Every method

let words_list = ["H","H","H","H","Hi"]

//return a boolean value. true if all elment in word_list length equal to 1
console.log(words_list.every(word=>word.length===1))

//return a boolean value. true if all elment in word_list start with letter 'H'
console.log(words_list.every(word=>word[0]==='H'))

//reduce method
let list = [1, 2, 3, 4, 5];

// Use the reduce method to sum the elements of the array
let sum = list.reduce((accumulator, currentValue) => { 
    // accumulator starts at the first element and is updated after each iteration
    // currentValue is the current element being processed in the array
    return currentValue + accumulator; 
});

// Output the final sum of the elements
console.log(sum); // Outputs 15

// Array of words to be joined into a sentence
let batchOfWords = ["I", "like", "programming", "so", "much."];

// Use the reduce method to combine the words into a sentence
let sentence = batchOfWords.reduce((sentenceAccumulator, currentWord) => {
    // Concatenate the current word to the accumulator, adding a space before it
    return `${sentenceAccumulator} ${currentWord}`;
});

// Output the resulting sentence
console.log(sentence);  // Output: "I like programming so much."

//find out the max  
let scores = [21, 45, 67, 89, 15, 54, 72, 98, 46, 56, 78, 34];

// Use reduce to find the maximum score
let max = scores.reduce((maxScore, currentScore) => {
    // Compare the current score with the maximum score so far
    // If currentScore is greater than maxScore, update maxScore to currentScore
    return (maxScore > currentScore) ? maxScore : currentScore;
},
0); //initial value of reduce method

// Output the maximum score
console.log(max); // Output: 98

//short-hand
max = scores.reduce((maxScore,currentScore)=>Math.max(maxScore,currentScore))
console.log(max); // Output: 98

let votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y' ];


let totalVote = 
votes.reduce((tally,vote) => {tally[vote] = (tally[vote] || 0) +1 
    return tally
},
{}) //initial value
console.log(totalVote)

// Purpose: The reduce function is used to aggregate the array into a single object (tally) that contains the count of each vote type ('y' and 'n').

// Arguments of reduce:

// The first argument is a callback function (tally, vote):
// tally: The accumulator, which is the object used to store counts.
// vote: The current element of the votes array being processed.
// The second argument {} is the initial value of the tally object (an empty object).
// Inside the Callback Function:

// tally[vote] = (tally[vote] || 0) + 1;:
// tally[vote]: Access the current count for the vote (either 'y' or 'n').
// (tally[vote] || 0): If tally[vote] is undefined (doesn't exist yet), it defaults to 0.
// +1: Increment the count for that vote.
// return tally;: Return the updated accumulator (tally) for the next iteration.

//another example
console.log([1,2,3].reduce((a,c)=>{ return a+c },0)) // 0 is the initial value which is passed to a for the first iteration


//arrow function

// //n is parameter
// let triple = (n)=>{return n*n*n}

// console.log(triple(2))

// //b set to 2 if no value pass to b ,other wise it will set to passed value
// let multiply = (a , b = 2) => {return a*b}

// console.log(multiply(2,3))


// //from a to e it does the same thing 

// //regular function expression
// let a = function(n){
//     console.log(n) 
// }

// // arrow function with parenthesis around params
// let b  = (n) =>{console.log(n)}

// //no need parenthesis when there is only 1 prarameter , if there is more than 1 should enclose it by parenthesis
// let c = n =>{console.log(n)}

// //implicit return 
// let d = n => 
//             (console.log(n))

// //one-liner implicit return 

// let e = n => console.log(n)
