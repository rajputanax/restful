require('dotenv').config()
const connectDb = require("./db/connect");
const Product = require ('./model/products') 

const ProductJson = require("./products.json")

const start = async () => {
try{
    await connectDb(process.env.MONGO_URL)
    await Product.create(ProductJson);
    console.log('success');
}
catch(err){
console.log(err)
}

}

start()