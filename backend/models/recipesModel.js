import mongoose from "mongoose";

const recipeModel = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
  text: {
    type: String,
    required: [true, 'Please add a text Value']
  }
}, {
  timestamps: true,

})

const Recipe = mongoose.model('Recipe', recipeModel);


export { Recipe };