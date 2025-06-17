const express = require('express');
const methodOverride = require('method-override')
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')))

app.use(methodOverride('_method'))

//for debug purpose
app.use(methodOverride(function(req, res) {
    console.log('Override method:', req.method);
    return req.body && req.body._method ? req.body._method : req.method;
}));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//fake comment
let comments = require('./comments.json');

// index
app.get('/comments', (req, res) => {

    res.render('comments/index', { comments});

});

//new
app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})

app.post('/comments',(req,res)=>{
    const {username , comment} = req.body
    console.log(username+":"+comment)
    comments.push({username,comment})
    res.redirect('/comments')
    // res.send("It worked!!")
})

//show
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;  // Get the id from the URL
    console.log(`Looking for comment with id: ${id}`);
    
    // Assuming `comments` is an array that contains all the comment objects
    const comment = comments.find(c => c.id === parseInt(id));  // Find the comment with the matching id
    // console.log(comment);  // Log the comment for debugging
    
    if (comment) {
        res.render("comments/show", { comment });  // Render the show page with the found comment
    } 
    else {
        res.status(404).send("Comment not found");  // If comment doesn't exist, return an error
    }
});

//edit
app.get('/comments/:id/edit',(req,res)=>{
    const { id } = req.params
    console.log(`Looking for comment with id: ${id}`)
    const comment = comments.find(c => c.id === parseInt(id))
    console.log(comment)
    // res.send("Edit")
    res.render('comments/edit', { comment })
})

//update
const fs = require('fs');

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;//comment refer to the field has attirbute name and value = comment
    const foundComment = comments.find(c => c.id === parseInt(id));
    
    if (foundComment) {
        foundComment.comment = newCommentText;
        fs.writeFileSync('./comments.json', JSON.stringify(comments, null, 2));//write to file
    }

    res.redirect('/comments');
});

app.delete('/comments/:id',(req,res)=>{
    const { id } = req.params;
    comments = comments.filter(c => c.id !== parseInt(id));

    res.redirect('/comments')    
})

app.get('/', (req, res) => {
    res.render('home');  // Renders home.ejs
});

//must add if want to test with get
app.get('/product', (req, res) => {
    console.log("req.query:",req.query);  // use query if method of the form was get
    res.send('Data received via get');
});

app.post('/product', (req, res) => {
    const {productName,qty} = req.body//use body if method of the form was post
    console.log(`req.body:product name-${productName}:quantity-${qty}`);  // Should now show { productName: '...', qty: '...' }
    res.send('Data received via POST');
});

app.listen(168, () => {
    console.log("Listening on port 168");
});