require('dotenv').config()
const connectDb = require("./db/connect");
const Product = require('./model/products')
const InfoNow = require ( './model/newInfo')

const ProductJson = require("./products.json")
const newInfo = require ("./newJson.json")

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URL)
        await Product.create(ProductJson);
        await InfoNow.create(newInfo);
        console.log('success');
    }
    catch (err) {
        console.log(err)
    }
   

}

start();
