const fakeRequest = ((url)=>{
    return new Promise((resolve,reject)=>{
        const rand = Math.random()
        setTimeout(()=>{
            if(rand<0.5){
            resolve(`Here is your data from ${url}`)
            }else{
            reject("Connection Failed")
            }
        },1000)
    })
})

fakeRequest("url1")
    .then((reponse)=>{
        console.log("Done With Request")
        console.log(reponse)
    })
    .catch((err)=>{
        console.log("Request Timeout")
        console.log(err)
    })