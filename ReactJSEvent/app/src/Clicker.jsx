import Form from "./Form"

function handleClick(){
    return console.log("Button clicked")
}

function handleNonClickEvent(){
    return console.log("any text inside non click event")
}


export default function Clicker(){
    return(
        <>
            <p onMouseEnter={handleNonClickEvent}>Hower this p tag</p>
            <button onClick={handleClick}>click me</button><br />
            <button onMouseEnter={handleNonClickEvent}>Hower me</button>
            <Form/>
            
        </>
    )    
}