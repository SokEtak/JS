//Store reference 
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/MongoRelationship')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

// Define the Country schema
const countrySchema = new Schema({
    countryCode: String,
    countryName: String,
    countryFlagUrl: String
});

// Define the User schema
const personSchema = new Schema({
    first: String,
    last: String,
    addresses: [{ type: Schema.Types.ObjectId, ref: 'Country' }] // Array of references to Country
});

// Create models for User and Country
const User = mongoose.model('User', personSchema);
const Country = mongoose.model('Country', countrySchema);

// Function to create a new User with a reference to a Country
const makeNewUser = async () => {
    // Step 1: Create and save a new Country document
    const newCountry = new Country({
        countryCode: "123",
        countryName: "New York",
        countryFlagUrl: "Flag.pic.com"
    });

    // Save the Country document to get its ObjectId
    await newCountry.save();
    console.log('Country saved:', newCountry);

    // Step 2: Create a new User document
    const newUser = new User({
        first: "Rock",
        last: "Star",
        addresses: [newCountry._id]  // Use the Country's ObjectId here
    });

    // Save the User document
    await newUser.save()
};

const findUser = async () =>{
    const u = User.findOne({first:"Rock"})
    // u.populate("addresses")
    .then(user =>{
        console.log(user)
    })
}
// Call the function to create a new User
makeNewUser();
findUser()

