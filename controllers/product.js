const mongoose = require('mongoose')
const getAllProducts = (_req,res)=>{
res.status(200).json({msg:"get all products"})
}
const getTestProduct = (_req , res) => {
    res.status(200).json({msg:"get test products"})
}

module.exports = {getAllProducts,getTestProduct }