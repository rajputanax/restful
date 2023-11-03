const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 3,
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
 
},
{
  timestamps:true
}
);

module.exports = mongoose.model('Products', productSchema);