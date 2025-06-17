let random_stuff = [] // empty array

//add item into array
random_stuff[0] = 12 
random_stuff[1] = 123 
random_stuff[2] = 1234 
random_stuff.push('cat')
random_stuff.push(NaN)
random_stuff.push(3.14)
random_stuff.unshift("added item")
random_stuff.push("hello")

console.log(random_stuff)
//remove item
random_stuff.pop() //remove from the end
console.log(random_stuff)
random_stuff.shift() // remove first element
console.log(random_stuff)

//more method

let arr1 = [1,2,3,4,5,6]
let arr2 = ['a','b','c']

//includes method

console.log(arr1.includes())

//indxof
console.log(arr1.indexOf(1))

//concat
let merged_arr = arr1.concat(arr2)
console.log(`merged array:${merged_arr}`)

let newArray = ["Hello","Javascript"] 

let newTxt = newArray.join("-") // combine 2 array into string and separate it with (-) sign
console.log(newTxt)//Hello-Javascript

//slice:slice but not delete from the element
let sliceedArr = arr1.slice(0,3) //slice(cut) 3 element , 0 is the start index
console.log(sliceedArr)

//splice:slice and delete from the element
let splicedArray = arr1.splice(2,5)
console.log(splicedArray)


//const with array:behave like normal array exept that it cannot reassign value

const users = ["Nori","Koki","Kuji"]

users.push("kli")
users.pop(0) //remove at index 0
console.log(users)
users[2] = "Jiku" // modify an exsiting element
console.log(users)

// users = ["juju","kiki"] //error:cannot redefine


//nested array

let nestedArray = [
                    [1,2,3,4],
                    [5,6,7,8]
                ]
console.log(nestedArray[1][2]) //[row] [column]

//array and loop 

//nested loop
for(let i = 1; i <=5; i++){
    console.log(`row:${i}`)
    for(let o = 1; o<=3; o++){
        console.log(o)
    }
}

// for...of loop(foreach)
 
let newArr = [1,2,3,7,8,9]

for (el of newArr){
    console.log(el )
}

