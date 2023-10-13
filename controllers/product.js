const products = require('../model/products')
const newInfo = require('../model/newInfo')
const getAllProducts = async (req,res)=>{
    const proData = await products.find({})
res.status(200).json(proData)
}
const getTestProduct = async (req , res) => {
    const info = await newInfo.find({})
    res.status(200).json(info)
}

module.exports = {getAllProducts,getTestProduct }