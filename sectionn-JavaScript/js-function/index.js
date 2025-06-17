//a function inside another function
function outter(){
    console.log("Outer block")
    inner()//call inner  function
    
    function inner(){
        console.log("Inner Block")
    }
}

function funcAsArgument(executor){
    executor()
}

function greeting(){
    console.log("Hello Guy")
}

outter()//call outter function

let squareNumber = function(n){
    return n*n
}

console.log(squareNumber(5))

funcAsArgument(greeting)

//methods

//this way is too long 
let math ={
    add:function(a,b){
        return a+b
    },
    sub:function(a,b){
        return a-b
    },
    multiply:function(a,b){
        return a*b
    }
}

//short-hand

let anotherMath = {
    add(a,b){
        return a+b
    },
    sub(a,b){
        return a-b
    }
}
console.log(math.multiply(12,5))

console.log(anotherMath.sub(12,5))

//this keyword

let person={
   fName : "Juki",
   lName : "Yukoya",
   displayFullName(){
    return `${this.fName} ${this.lName}`
   }
}

console.log(person.displayFullName())

let copyPerson = person.displayFullName()

console.log(copyPerson)
// console.log(copyPerson.fName)// undefine