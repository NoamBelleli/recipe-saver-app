import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose';
import {Recipe} from '../models/recipesModel.js';
import {User} from '../models/userModel.js';


//@desc Get recipes
//@route GET /api/recipes
//@access Private
const getRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find({user: req.user.id})
  res.status(200).json(recipes)
})

//@desc Create recipe
//@route POST /api/recipes
//@access Private
const createRecipe = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }  
  const recipe = await Recipe.create({
    text: req.body.text,
    user: req.user.id,
  })
  res.status(200).json(recipe)
})

//@desc Edit recipe
//@route PUT /api/recipes/:id
//@access Private
const editRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)
  if (!recipe) {
    res.status(400)
    throw new Error('Recipe not found')
  }
  const user = await User.findById(req.user.id)
// check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }
// make sure the logged in user matches the recipe user
  if (recipe.user.toString() !== user.id) {
    res.status(401)
    throw new Error('user not authorized')
  }
  
  const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedRecipe)
})

//@desc Delete recipe
//@route DELETE /api/recipes/:id
//@access Private
const deleteRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)
  if (!recipe) {
    res.status(400)
    throw new Error('Recipe not found')
  }

  const user = await User.findById(req.user.id)
  // check for user
    if (!user) {
      res.status(401)
      throw new Error('User not found')
    }
  // make sure the logged in user matches the recipe user
    if (recipe.user.toString() !== user.id) {
      res.status(401)
      throw new Error('user not authorized')
    }

  await recipe.remove()
  res.status(200).json({id: req.params.id})
} )

export { getRecipes, createRecipe, editRecipe, deleteRecipe } ;