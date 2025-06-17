const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/animalShelter')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

// Define the schema for model
const schema = new mongoose.Schema({
  name: String,
  age: Number,
  color: String
});

//Model
const Cat = mongoose.model('Cat', schema);
const Dog = mongoose.model('Dog', schema);

// Create instances(for insert one)
// const mangase = new Cat({
//   name: "Mangase",
//   age: 12,
//   color: "brown"
// });

// Save instances to DB
// mangase.save().then(() => console.log('Mangase saved'));

//for insert many(don't need to use .save(),it save to db automatically)
// Cat.insertMany([
//   {name:"Josh",age:12,color:"navy"},
//   {name:"Jacky",age:11,color:"golden"},
//   {name:"Jusha",age:22,color:"orange"},
//   {name:"Koko",age:32,color:"brown"},
//   {name:"Hajha",age:15,color:"black"},
// ])

// Dog.insertMany([
//   {name:"Jaja",age:12,color:"navy"},
//   {name:"Jojo",age:11,color:"golden"},
//   {name:"Jinku",age:22,color:"orange"},
//   {name:"Lolipop",age:32,color:"brown"},
//   {name:"Gahsha",age:15,color:"black"},
// ])

