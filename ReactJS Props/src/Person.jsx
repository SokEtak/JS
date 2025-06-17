export default function Person({name,from}){
    console.log(name)
    return (
    <>
        <h1>Hello ,{name}</h1>
        <footer>From,{from}</footer>
    </>
);
}