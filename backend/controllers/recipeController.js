import asyncHandler from 'express-async-handler'

//@desc Get recipes
//@route GET /api/recipes
//@access Private
const getRecipes = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get recipes'})
})

//@desc Create recipe
//@route POST /api/recipes
//@access Private
const createRecipe = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }  
  res.status(200).json({ message: 'Create recipe' })
})

//@desc Edit recipe
//@route PUT /api/recipes/:id
//@access Private
const editRecipe = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Edit recipe ${req.params.id}`})
})

//@desc Delete recipe
//@route DELETE /api/recipes/:id
//@access Private
const deleteRecipe = asyncHandler(async (req, res) => {
  res.status(200).json({message: `delete recipe ${req.params.id}`})
} )

export { getRecipes, createRecipe, editRecipe, deleteRecipe } ;