//onclick   
const btn1 = document.getElementById('btn1') //select first button
//anymous function
const getCurrentTime  =  () => alert(`${new Date().toString()}`)

//click the button to alert the time
btn1.onclick = getCurrentTime

const printSomeText = (string) => alert(string)

const btn2 = document.getElementById('btn2')

//should use addEventlistener()
// btn2.onclick = printSomeText("shafihfjaskn")
// btn2.onclick = printSomeText("hjdshafhd")

//eventlistener
const btn3 = document.getElementById('btn3') 

btn3.addEventListener('click',()=>{alert("Hello")},{once:true}) // it will run only the first time even if button got press many time
btn3.addEventListener('click',()=>{alert("hi")})
