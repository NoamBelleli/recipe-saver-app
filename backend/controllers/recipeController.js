//@desc Get recipes
//@route GET /api/recipes
//@access Private


const getRecipes = (req, res) => {
  res.status(200).json({message: 'Get recipes'})
}

//@desc Create recipe
//@route POST /api/recipes
//@access Private

const createRecipe = (req, res) => {
  res.status(200).json({ message: 'Create recipe' })
}

//@desc Edit recipe
//@route PUT /api/recipes/:id
//@access Private

const editRecipe = (req, res) => {
  res.status(200).json({message: `Edit recipe ${req.params.id}`})
}

//@desc Delete recipe
//@route DELETE /api/recipes/:id
//@access Private

const deleteRecipe = (req, res) => {
  res.status(200).json({message: `delete recipe ${req.params.id}`})
} 


export { getRecipes, createRecipe, editRecipe, deleteRecipe } ;