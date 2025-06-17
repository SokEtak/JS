const express = require('express')
const path = require('path')
const app = express()
const redditData = require('./data.json')

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'public')))

app.set('views',path.join(__dirname,'/views'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/cats',(req,res)=>{
    const cats = ["Roska","Ricku","koliu","Juvilua","Willsmooth","Jacko"]
    res.render('cats',{cats})
})

app.get('/random',(req,res)=>{
    const num = Math.floor(Math.random()*10)
    res.render('random',{num})
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    // console.log(data)
    res.render('subreddit',{...data})
});


app.get(`*`,(req,res)=>{
    res.send("Couldn't found this url!!!")
})

app.listen(3000,()=>{
    console.log("Listenning from port 3000")
})
