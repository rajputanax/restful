const mongoose = require('mongoose');
'jxOryb3UokVw0OnJ';


const url= 'mongodb+srv://ANAS:jxOryb3UokVw0OnJ@resetful.dtuoiww.mongodb.net/resetful?retryWrites=true&w=majority'

const connectDb = ()=>{
    console.log('i am in db')
    return mongoose.connect(url , {
        useNewUrlParser  : true , 
        useUnifiedTopology : true
    } )
}




module.exports = connectDb;



