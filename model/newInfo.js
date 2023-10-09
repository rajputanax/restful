const mongoose = require('mongoose');

const NewInfo = new mongoose.Schema({
    name: { type: String,
           },
    age: {
        type: Number,
    },
    // email: {
    //     type: String,
       
    // },
    address: {
        type: Object,
        street: {
            type: String
        },
        city: {
            type: String,
           

        }
    },
    interests: {
        "type": [String],

    },


}
)

module.exports=mongoose.model('newinfo', NewInfo);