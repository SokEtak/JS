//noraml example
// // Start the first fetch request to get information about a Star Wars character (person 7)
// fetch("https://swapi.dev/api/people/7/")
//     .then(response => {
//         // Log the response object to see the status of the request (but not the actual data yet)
//         console.log("Request 1: Response for person 7 received.", response);
        
//         // Check if the request was successful (status code 200)
//         if (!response.ok) {
//             throw new Error("Failed to fetch person 7 data");
//         }
        
//         // If the response is successful, we parse the JSON data and return it to the next `then`
//         return response.json();
//     })
//     .then((data) => {
//         // Log the parsed data for person 7 to the console
//         console.log("Request 1: Data for person 7:", data);
        
//         // After getting person 7's data, initiate a second fetch request for person 8
//         console.log("Request 2: Now fetching data for person 8...");
//         return fetch("https://swapi.dev/api/people/8/");
//     })
//     .then((response) => {
//         // Log the response object for the second request
//         console.log("Request 2: Response for person 8 received.", response);
        
//         // Check if the second request was successful
//         if (!response.ok) {
//             throw new Error("Failed to fetch person 8 data");
//         }
        
//         // Parse the JSON data for person 8 and return it to the next `then`
//         return response.json();
//     })
//     .then((data) => {
//         // Log the data received for person 8 to the console
//         console.log("Request 2: Data for person 8:", data);
//     })
//     .catch(err => {
//         // If any error occurs at any step (like network failure or non-200 response), it will be caught here
//         console.log("Error encountered:", err);
//     });


//Fetch API using async and await keyword

const fecthRandomPerson = async () =>{
    try{
        console.log("Making request....")
        const baseUrl = "https://swapi.dev/api/people/"
        const rand = Math.floor(Math.random()*83)
        // const rand = 83
        const req1 = await fetch(`${baseUrl}/${rand}/`)
        const data = await req1.json()
        setTimeout(()=>{
            console.log("Request  Resolved")
            console.log(`Here is your requested data from person ${rand}:`,data)
        },1000)
    }catch(e){
        console('Error',e)
    }

}
setTimeout(()=>{
    console.log("Please wait , We're making your request as soon as posible")
    fecthRandomPerson()
},1000)

// let people = []
// const fetchPeople = async() =>{
//     const baseUrl = "https://swapi.dev/api/people/"
//     let i = 1
//     while(i<=10){
//         try{
//             const data = await fetch(`${baseUrl}/${i}/`)
//             const person = await data.json()
//             people.push(person)
//             console.log("Request  Resolved")
//             console.log(`Person${i} added successfully`)
//         }catch(err){
//             console.log(`Failded to add Person${i}`)
//             continue
//         }
//         i++
//     }
// }
// fetchPeople()