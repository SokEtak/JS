//Store reference 
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/MongoRelationship')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

// Define the Country schema
const userSchema = new Schema({
    name:String,
    gender:String,
    age:Number
});

const tweetSchema = new Schema({
    text:String,
    likes:Number,
    user:{type:Schema.Types.ObjectId,ref:'User'}
})

const User =  mongoose.model('User',userSchema)
const Tweet =  mongoose.model('Tweet',tweetSchema)

const makeTweet = async () => {
    const u = new User({
        name:"Joki",
        gender:"Male",
        age:45
    })
    await u.save()
    const tweet = new Tweet({
        text:"kokmajfjkdsjkfhjd",
        likes:2637265,
    })
    tweet.user = u._id
    await tweet.save()
}

const findTweet = async (id) =>{
    // const tweet = Tweet.find({_id:id})
    const tweet = Tweet.find({})
    .populate("user")
    .then(tweet =>{
        console.log(tweet)
    })
}

// makeTweet()
findTweet()
