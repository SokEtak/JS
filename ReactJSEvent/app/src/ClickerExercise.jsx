export default function ClickerExercise({message,buttonText}){
    const myAlert = ()=>{ alert(message||"No Message Provided!!!") }
    return(
        <>
            <button onClick={myAlert}>{buttonText||"Button Has No Text"}</button>
        </>
    )
}