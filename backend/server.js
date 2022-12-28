import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv/config';
import router from './routes/recipeRoutes.js';
import { errorHandler } from './middleware/errorMiddlewar.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/recipes', router);

app.use(errorHandler);

app.listen(port, ()=> console.log(`server started on port ${port}`))


