import express from 'express';
import { getRecipes, createRecipe, editRecipe, deleteRecipe } from '../controllers/recipeController.js';

const router = express.Router();

router.route('/').get(getRecipes).post(createRecipe)
router.route('/:id').put(editRecipe).delete(deleteRecipe)

export default router;
