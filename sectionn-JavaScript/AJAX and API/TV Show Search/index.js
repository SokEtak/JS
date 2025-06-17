const  container = document.querySelector('.container')
const  form = document.querySelector('#form-Contianer')
const  button = document.querySelector('#formButton')

button.addEventListener('click', async (e)=>{
    e.preventDefault()
    //query refer to the name attribute of input inside the form
    let searchTerm = form.elements.query.value
    const config = {params:{q:searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
    makeImage(res.data)
    form.elements.query.value=""
})

const makeImage = (shows) =>{

    for(let result of shows){
        const imageResult = result.show.image.medium
        const  imageUrl  =(result!=='undefine')? imageResult:'No Image To Display'
        const image = document.createElement('img')
        image.src = imageUrl
        container.appendChild(image)  
    }

}
