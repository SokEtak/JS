const multyply = (x,y)=>{x*y}

const square = (x)=>{multyply(x,x)}

const isRightTriangle = (a,b,c) => {
    return square(a) + square(b) === square(c)  //retrun true or false if (a+b) time by itself equal to c times by itself
} 

console.log("Before")
console.log(isRightTriangle(3,4,5))
console.log("After")