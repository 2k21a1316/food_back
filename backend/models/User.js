const mongoose = require("mongoose");
// destructuring
const { Schema } = mongoose;
const Userschema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});
module.exports=mongoose.model('user',Userschema)//create model of name user and do crud operation by model