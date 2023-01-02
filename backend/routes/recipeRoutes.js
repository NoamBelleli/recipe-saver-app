import express from 'express';
import { getRecipes, createRecipe, editRecipe, deleteRecipe } from '../controllers/recipeController.js';
import { protect } from '../middleware/authMiddleware.js';

const recipeRouter = express.Router();

recipeRouter.route('/').get(protect, getRecipes).post(protect, createRecipe)
recipeRouter.route('/:id').put(protect, editRecipe).delete(protect, deleteRecipe)

export default recipeRouter;
