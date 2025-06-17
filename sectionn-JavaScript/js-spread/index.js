

let myNum = [1,2,3,4,5,6,7,8,9,10]
console.log(Math.min(myNum))//NaN

//same as pass 1,2...10
console.log(Math.min(...myNum))//1

//spread in array literal
let arr1 = [1,2,3,4,5]
let arr2 = [1,2,3,4,5]
let arr3 = [...arr1,...arr2]

console.log(arr3)

// spread in object literals

const friend_list = {
    highSchoolFriends: ["Moki", "Lili", "Lolo"],
    primarySchoolFriends: ["Kiki", "Hoji", "Koko"]
  };
  
  const family_members = {
    father: "David",
    mother: "Sophia",
    brother: "Ethan",
    sister: "Emma"
  };
  
  const hobbies = {
    reading: "Fantasy Novels",
    painting: "Watercolor Landscapes",
    gaming: "Adventure RPGs",
    cooking: "Trying Out New Recipes"
  };
  
  const favorite_sports = {
    football: "Lionel Messi",
    basketball: "LeBron James",
    cricket: "Virat Kohli",
    tennis: "Serena Williams"
  };
  
  // Combine all objects into one person object
  const person = {
    ...family_members,
    ...hobbies,
    ...favorite_sports,
    friends: { ...friend_list }
  };
  
  console.log(person.brother);
  
  //Argument object

  // Function to calculate the sum of all arguments passed to it
function sum() {
    let sum = 0; // Initialize a variable to store the sum

    // Iterate over the `arguments` object
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]; // Add each argument to the `sum` variable
    }

    return sum; // Return the total sum
}

  let result = sum(1,2,3,4,5)//method at the top 
  console.log(result);
  /* 
Explanation of Argument Object:
1. The `arguments` object:
   - This is an array-like object available in every function.
   - It contains all the arguments passed to the function, regardless of their number.
   - It is zero-indexed, so you can access each argument with `arguments[0]`, `arguments[1]`, etc.

2. The for loop:
   - Loops through the `arguments` object using `arguments.length` to determine the total number of arguments passed.
   - On each iteration, the value of the current argument is added to the `sum` variable.

3. Return:
   - After the loop finishes, the total sum of all arguments is returned.

Usage Example:
    console.log(sum(1, 2, 3, 4)); // Output: 10
    console.log(sum(5, 10, 15));  // Output: 30

Note:
- The `arguments` object is not an array, so methods like `map` or `forEach` won't work on it.
- In modern JavaScript, you can use the rest operator (`...args`) to handle variable arguments more cleanly:
    
    Example:
    function sum(...args) {
        return args.reduce((total, current) => total + current, 0);
    }
    */
   
//Rest param

function sumAllNum(...nums){

    let sum = 0
    
    for(let num of nums){
        sum += num;  
    }    
    
    return sum
}

let total = sumAllNum(1,2,3)
console.log(total)

//Desrtuct
//Array-Destructuring
let cats = ["Orange-White","White-Orange","Black-White"]

let [cat1,cat2,cat3] = cats
console.log(cat3)

//Object-Destructuring

const programmingRating = {python:"Mediam",
    javaScript:"Very Good",
    kotlin:"Good" }
    
const {python,javaScript,kotlin} = programmingRating 
console.log(kotlin)


//Param Destructing

const fullName = ({first,last})=>{return `${first} ${last}`}

const runner = {
    first:"Kim",
    last:"Ko",
    isGoodAtCoding:true
}

console.log(fullName(runner))






