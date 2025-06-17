//this method is we embed directly(not recommend for large data set)

const mongoose = require('mongoose');
const { type } = require('os');
mongoose.connect('mongodb://127.0.0.1:27017/MongoRelationship')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

const personSchema = mongoose.Schema({
    first:String,
    last:String,
    addresses:[{
        city:String,
        province:String,
        country:String
    }]
}) 

const Person  = new mongoose.model('Person',personSchema)


const addAdresses= async(id) =>{
    const p = await Person.findOne({_id:id})
    p.addresses.push({
        city:"New York",
        province:"",
        country:"US"
    })
    await p.save()
    console.log(p.addresses)
}

const addPerson = async () => {
    const p = new Person({
        first:"Koko",
        last:"Kaka",
        // method 1
        // addresses:[{
        //     city:"BTB",
        //     province:"Battambang",
        //     country:"Cam"
        // }]
    })
    //add addresses method2
    // p.addresses.push({
    //     city:"BTB",
    //     province:"Battambang",
    //     country:"Cam"
    // })
    //method3 use method
    // addAdresses()

    await p.save()
    console.log(p)
}

addPerson()
// addPerson('67bf210eab76ac8a48913892')