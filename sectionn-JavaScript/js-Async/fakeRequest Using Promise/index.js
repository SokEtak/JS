// //version1
// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 2000) + 500;
//         setTimeout(() => {
//             if (delay > 1500) {
//                 reject("Mine-Connection Timeout");
//             } else {
//                 resolve(`Connection here is your fake data from ${url}`);
//             }
//         }, delay);
//     });
// };

// const request = fakeRequestPromise("url1");

// request
//     .then(() => {
//         console.log("Promise Resolved (1)");
//         console.log("Woo hoo! It worked perfectly!!!");

//         fakeRequestPromise("url2")
//             .then(() => {
//                 console.log("Promise Resolved (2)");
//                 console.log("Woo hoo! It worked perfectly!!!");

//                 fakeRequestPromise("url3")
//                     .then(() => {
//                         console.log("Promise Resolved (3)");
//                         console.log("Woo hoo! It worked perfectly!!!");

//                         fakeRequestPromise("url4")
//                             .then(() => {
//                                 console.log("Promise Resolved (4)");
//                                 console.log("Woo hoo! It worked perfectly!!!");
//                             })
//                             .catch(() => {
//                                 console.log("Request 4 Rejected");
//                                 console.log("Sorry, it's not working.");
//                             });
//                     })
//                     .catch(() => {
//                         console.log("Request 3 Rejected");
//                         console.log("Sorry, it's not working.");
//                     });
//             })
//             .catch(() => {
//                 console.log("Request 2 Rejected");
//                 console.log("Sorry, it's not working.");
//             });
//     })
//     .catch(() => {
//         console.log("Request 1 Rejected");
//         console.log("Sorry, it's not working.");
//     });

//version2
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4000) + 500;
        setTimeout(() => {
            if (delay > 3000) {
                reject("Connection Timeout");
            } else {
                resolve(`Connection here is your fake data from ${url}`);
            }
        }, delay);
    });
};

fakeRequestPromise("url1")
    .then((data)=>{
        console.log("Promise Resolved (1st request)");
        console.log("Woo hoo! It worked perfectly!!!");
        console.log(data);
        return fakeRequestPromise("url2")
    })
    .then((data)=>{
        console.log("Promise Resolved (2st request)");
        console.log("Woo hoo! It worked perfectly!!!");
        console.log(data);
        return fakeRequestPromise("url3")
    })
    .then((data)=>{
        console.log("Promise Resolved (3st request)");
        console.log("Woo hoo! It worked perfectly!!!");
        console.log(data);
        return fakeRequestPromise("url4")
    })
    .catch((err) => {
        console.log("Request Rejected");
        console.log(err);
    })
    



