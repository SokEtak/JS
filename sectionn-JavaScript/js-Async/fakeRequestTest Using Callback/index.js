//ex1
// A fake request function that simulates an API call
// const fakeRequestCallback = (url, success, failure) => {
//     // Generate a random delay between 500ms and 4500ms
//     const delay = Math.floor(Math.random() * 4500) + 500;

//     // Simulate the request delay using setTimeout
//     setTimeout(() => {
//         // If the delay is more than 4000ms, simulate a timeout error
//         if (delay > 4000) {
//             failure("Connection Timeout");
//         } else {
//             // Otherwise, simulate a successful request with data
//             success(`Here is your data from ${url}`);
//         }
//     }, delay);
// };

// // Make a series of fake requests to different URLs, one after another
// fakeRequestCallback('google.com', function(response) {
//     // Success callback for the first request
//     console.log("Request 1 succeeded");
//     console.log(response);

//     // Make a second request to YouTube
//     fakeRequestCallback('youtube.com', function(response) {
//         // Success callback for the second request
//         console.log("Request 2 succeeded");
//         console.log(response);

//         // Make a third request to Facebook
//         fakeRequestCallback('facebook.com', function(response) {
//             // Success callback for the third request
//             console.log("Request 3 succeeded");
//             console.log(response);

//             // Make a fourth request to TikTok
//             fakeRequestCallback('tiktok.com', function(response) {
//                 // Success callback for the fourth request
//                 console.log("Request 4 succeeded");
//                 console.log(response);
//             }, function(err) {
//                 // Error callback for the fourth request
//                 console.log("Error in Request 4:", err);
//             });
//         }, function(err) {
//             // Error callback for the third request
//             console.log("Error in Request 3:", err);
//         });
//     }, function(err) {
//         // Error callback for the second request
//         console.log("Error in Request 2:", err);
//     });
// }, function(err) {
//     // Error callback for the first request
//     console.log("Error in Request 1:", err);
// });


//ex2
let i = 0
// A fake request function that simulates an API call
const fakeRequestCallback = (url, success, failure, retries = 3) => {
    const delay = Math.floor(Math.random() * 4500) + 500
    i++
    setTimeout(() => {
        if (delay > 4000) {
            if (retries > 0) {
                console.log(`Timeout on ${url}. Retrying... (${retries} retries left)`);
                fakeRequestCallback(url, success, failure, retries - 1); // Retry with fewer retries
            } else {
                failure(`Connection Timeout on ${url}`);
            }
        } else {
            success(`Here is your data from ${url}`);
        }
    }, delay);
    console.log(`fakeRequestCallback calls ${i} times`) // last edited
};

// Make a series of fake requests to different URLs, one after another
fakeRequestCallback('google.com', function(response) {
    console.log("Request 1 succeeded");
    console.log(response);

    // Make a second request to YouTube
    fakeRequestCallback('youtube.com', function(response) {
        console.log("Request 2 succeeded");
        console.log(response);

        // Make a third request to Facebook
        fakeRequestCallback('facebook.com', function(response) {
            console.log("Request 3 succeeded");
            console.log(response);

            // Make a fourth request to TikTok
            fakeRequestCallback('tiktok.com', function(response) {
                console.log("Request 4 succeeded");
                console.log(response);
            }, function(err) {
                console.log("Error in Request 4:", err);
            });
        }, function(err) {
            console.log("Error in Request 3:", err);
        });
    }, function(err) {
        console.log("Error in Request 2:", err);
    });
}, function(err) {
    console.log("Error in Request 1:", err);
});

console.log("I'm the last line")
