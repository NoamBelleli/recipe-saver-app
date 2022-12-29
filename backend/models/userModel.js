import mongoose from "mongoose";
const userModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
  },
  npassword: {
    type: String,
    required: [true, 'Please add a password']
  },
 
},
  {
  timestamps: true
})

export default userModel;
