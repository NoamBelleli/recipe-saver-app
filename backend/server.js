import express from 'express';
import dotenv from 'dotenv/config';
import router from './routes/recipeRoutes.js';

const port = process.env.PORT || 5000;

const app = express();

app.use('/api/recipes', router);

app.listen(port, ()=> console.log(`server started on port ${port}`))


