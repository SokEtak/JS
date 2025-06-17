export default function Slot() {
    const slotNumber = [];
    for (let i = 0; i < 3; i++) {
        const rand = Math.floor(Math.random() * 3) + 1; // Generates a random number between 1 and 3
        slotNumber[i] = rand;
    }
    const isMatched =(slotNumber[0] === slotNumber[1] && slotNumber[1] === slotNumber[2])
    const isPerfectSlot = isMatched? "Win" : "Lose";

    return (
        <>
            <span>{slotNumber.map((num, index) => (
                <span key={index}>{num} </span>
            ))}</span>
            <h1>{isPerfectSlot}</h1>
        </>
    );
}
