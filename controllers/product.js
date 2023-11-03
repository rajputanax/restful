const PRODUCTS = require('../model/products')
const newInfo = require('../model/newInfo')

// .........................................................
// .........................................................

const getAllProducts = async (req,res)=>{
    const information = await newInfo.find({})
res.status(200).json(information)
}
// .........................................................
// .........................................................

const getTestProduct = async (req , res) => {
    const pro = await PRODUCTS.find(req.query)
    console.log("products  " , pro) 
    res.status(200).json(pro)
}
// .........................................................
// .........................................................
const createProduct = async(req,res)=>{
    console.log(req.body);
    const newProduct= await PRODUCTS.create({
        name:req.body.name,
        price:req.body.price,
    })
    res.status(200).json(newProduct)
}
// .........................................................
// .........................................................
module.exports = {getAllProducts,getTestProduct,createProduct }