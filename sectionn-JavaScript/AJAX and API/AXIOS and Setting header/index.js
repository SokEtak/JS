// axios.get("https://catfact.ninja/fact")
// .then(res=>{
//     console.log("Response:",res.data)
// })
// .catch(err=>{
//     console.log("Error encountered:",err)
// })


// const getPerson = async (id=1)=>{
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//     console.log("Here is your data from person ",id)
//     console.log(res.data)
// }
// getPerson(10)

// setting header with axios
const button = document.querySelector('#button');
const container = document.querySelector('.container');
const jokeContainer = document.querySelector('#jokes-Container');
let i = 1;

const getDadJoke = async () => {
    try {
        const config = {headers: { Accept: 'application/json' }};
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;  // Return the joke string
    } catch (e) {
        console.log("Error encountered:", e);
        return null;  // Return null if no joke is fetched
    }
};

// Function to add a new joke
const addNewJoke = async (id) => {
    const newJokeText = await getDadJoke();  // Get the joke
    if (!newJokeText) return;  // Skip if joke is not fetched

    const newLi = document.createElement('li');
    newLi.textContent = `${id}. ${newJokeText}`;
    jokeContainer.appendChild(newLi);  // Append the new joke

    // Add transition effect to the new list item
    setTimeout(() => {
        newLi.classList.add('show');
    }, 10);  // Slight delay to trigger the transition
    // Scroll to the bottom of the container after adding a new joke
    jokeContainer.scrollTop = jokeContainer.scrollHeight;
};


// Add event listener to the button
button.addEventListener('click', () => {
    const amountOfJokes = document.querySelector('#jokeAmount').value || 1;  // Get number of jokes to fetch
    let y = 0;

    // Fetch jokes based on the selected amount
    while (y < amountOfJokes) {
        addNewJoke(i);  // Add the joke
        y++;
        i++;  // Increment the joke ID
    }
});



