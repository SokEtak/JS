const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Person')
  .then(() => console.log('MongoDB connected'));

// Define the schema first
const personSchema = new mongoose.Schema({
  first: String,
  last: String,
  dob: String,
  relationshipState: String
});

// Define virtual property
personSchema.virtual('personInfo').get(function () {
  return `First Name: ${this.first}, Last Name: ${this.last}, DOB: ${this.dob}, relationshipState: ${this.relationshipState}`;
});

// Define middleware before model creation
personSchema.pre('save', async function () {
  console.log("I'm about to save");
});

personSchema.post('save', async function () {
  console.log("Just saved!!!");
});

// Create the model after defining middleware
const Person = mongoose.model('Person', personSchema);

// Create and save a new instance
const p = new Person({ first: "Petter", last: "Parker", dob: "12/12/2012", relationshipState: "Single" });

p.save()
  .then(() => {
    console.log('Saved successfully');
  })
  .catch(err => {
    console.log('Save failed:', err);
  });
