
function getDate(){
    let demo = document.getElementById('demo').innerHTML += Date()
}

function clearDate(){

    let isDeleted = prompt("Are u sure to remove it? [y/n]:")
    let demo = document.getElementById('demo')
    let demoHeader = document.getElementById('demoHeader')

    if(demo !== '' || null || undefined){
        if(isDeleted){
            demoHeader.innerHTML = "Date Removed"
            demo.innerHTML = ""

            setTimeout(() => {
                demoHeader.innerHTML = "What dat is today?";
            }, 3000);

        }else{
            demoHeader.innerHTML="remove the date was cencel"
        }
    }
}

let a = "12"
console.log("Hello js")
