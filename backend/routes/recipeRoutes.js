import express from 'express';
import { getRecipes, createRecipe, editRecipe, deleteRecipe } from '../controllers/recipeController.js';

const recipeRouter = express.Router();

recipeRouter.route('/').get(getRecipes).post(createRecipe)
recipeRouter.route('/:id').put(editRecipe).delete(deleteRecipe)

export default recipeRouter;
