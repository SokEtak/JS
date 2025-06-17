//async keyword
// async function greet(){//return a promise even if no body inside this function(autmatic return promise) with Fullfilled promise State but undefined Result(must return to define)
//     return "Any promise reult text" //prommise state fulfilled with promise result string
// }

// const welcome = async() => { 
//     // return new Error("My error message") //fullfiled state with Error promise result 

//     throw("My error message from welcome as async")//promise state "rejectd" with error message
// } 

// welcome().then((data)=>console.log(data))//printed if no error or fullfilled ,ignore the return string
//          .catch((err)=>{console.log(err)})//printed if error or rejected  ,ignore the return string


//await keyword
// delayPrint function simulates an asynchronous operation (like a delay)
// async function delayPrint() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(Math.random());
//             resolve("Done"); // Resolving with "Done" after printing
//         }, 1500); // Delay of 1.5 second
//     });
// }

// // Function to call delayPrint three times and log the results
// async function printTripleTimes() {
//     const print1 = await delayPrint();
//     const print2 = await delayPrint();
//     const print3 = await delayPrint();

//     // Log the results from the promises
//     console.log(print1);  // "Done"
//     console.log(print2);  // "Done"
//     console.log(print3);  // "Done"
// }

// // Call the function to test
// printTripleTimes();


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.5) {
                resolve(`Here is your data from ${url}`);
            } else {
                reject("Connection Failed");
            }
        }, 1000);
    });
};

// Async function to handle the request and errors
async function getData() {
    try {
        const data = await fakeRequest("url1");  // Await the promise to resolve
        console.log(data);  // Will log the data if the promise resolves
    } catch (err) {
        console.log("Error occurred:", err);  // Will log if the promise is rejected
    }
}

// Call the async function to test
getData();

// The fakeRequest function is the same as before, returning a promise that resolves or rejects randomly.
// The getData function is marked as async so we can use await to wait for the result of fakeRequest.
// The try...catch block inside getData catches any errors that may occur if the promise is rejected (i.e., "Connection Failed").