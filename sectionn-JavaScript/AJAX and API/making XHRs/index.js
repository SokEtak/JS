const request = new XMLHttpRequest()

request.onload = function(){
    console.log('It\'s loaded')
    const data = JSON.parse(this.responseText)
    console.log(data.height)
}
request.onerror = function(){
    console.log('Error to load')
    console.log(this.responseText)
}
request.open("GET","https://swapi.dev/api/people/7/")
request.send()
