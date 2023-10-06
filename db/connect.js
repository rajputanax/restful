const mongoose = require('mongoose');
const url= 'mongodb+srv://ANAS:jxOryb3UokVw0OnJ@resetful.dtuoiww.mongodb.net/resetful?retryWrites=true&w=majority'

const connectDb = ()=>{
    console.log('i am in db')
   const connection = mongoose.connect(url , {
        useNewUrlParser  : true , 
        useUnifiedTopology : true
    } )
    return connection;
}




module.exports = connectDb;



