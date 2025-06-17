const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

const productSchema = mongoose.Schema({
    productId : {
        type:Number,
        min:[0,"Must be positive number"],
        unique:true,
    },
    productName:{
        type:String,
        required:[1,'Must be filled idiot!!'],
        maxlength:[50,"Name must no more than 50 letters!!!"],
    },
    price:{
        type:Number,
        required:[true,"Must be filled"],
        min:[0,"Must Be Positive Value"],
    },
    productDetail:{
        type:String,
        default:"No Detail Provided"
    }
})

//Model instance method
productSchema.methods.greet = function () {
    return console.log(`hi from ${this.productName}`);
};

// Define static method on the schema
productSchema.statics.findProductByName = async function (productName) {
    const foundProduct = await this.findOne({ productName }); // 'this' refers to the Model
    console.log("Found Product:", foundProduct);
    return foundProduct;
};

//Model: must be define after static or instance method created
const Product = mongoose.model('Product', productSchema)

//instances of Product Model
const pro1 = new Product({
    productId:3,
    productName:"Sting",
    price:10.05,    
    productDetail:"330 m.l energy drink from Thailand"
})

const pro2 = new Product({
    productId:6,
    productName:"Latasoy",
    price:10.05,    
    productDetail:"330 m.l energy drink from Thailand"
})
    
//save to db
// pro1.save()
// .then(function (res) { //after that do this method if no error occure, otherwise , do catch()
//     console.log(`${res.productName} added successfully`)
// })
// .catch(function(err){
    //     console.log(err)
    //   })
    

//update
//findOneAndUpdate params : (condition,new_value,[printUpdatedValue,enableValidation])
//   );
// Model.findOneAndUpdate(
//     condition,         // Query criteria to find the document
//     update,            // New values to update
//     options,           // Options for the operation (optional)
//     callback          // Optional callback function (optional)
        
//update with validation
        // Product.findOneAndUpdate({productName:"Pepsi"},{price:1.05},{new:true,runValidators:true})
        // .then(function (res) {
            //     console.log(res)
            // })
            // .catch(function(err){
                //     console.log(err)
                //   })
                
//instance method calling
// const newProduct = new Product({
//     productId:5,
//     productName:"Samurai",  
//     price:10.05,    
//     productDetail:"330 m.l energy drink from Cambodia"
// }).save()

pro2.greet()

//static method calling
Product.findProductByName("Samurai") // Just pass the name, not an object
    .then(data => {
        if (data) {
            console.log("Found product:",   data);
        } else {
            console.log("Product not found");
        }
    })
    .catch(err => {
        console.error("Error:", err);
    });





