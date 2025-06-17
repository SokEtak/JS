export default function Dice({numSides = 6}){
    const roll = Math.floor(Math.random()*numSides+1)

    return(
        <>
            <h1>Sides:{numSides}-Roll:{roll}</h1>
        </>
    );
}