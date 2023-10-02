const mongoose = require('mongoose')

const productSchema = new Schema({
name:{
type:String,
required:true
},
price:{
    type:Number,
    required:true
},
featured:{
    type:Boolean,
    default:false
},
rating:{
    type:Number,
   default:5
},
createdAt:{
   default:Date.now()
},
company:{
    type:String,
   enum:{
    values:['apple' , 'microsoft' , ' google' , 'oracle' , 'dell'],
    message:`${values} is not supported`
   }
},

})