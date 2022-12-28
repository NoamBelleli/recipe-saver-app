import mongoose from "mongoose";



const recipeModel = mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add a text Value']
  }
}, {
  timestamps: true,

})

export default recipeModel;