import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json({message: 'Get recipes'})
})

router.post('/', (req, res) => {
  res.status(200).json({message: 'Create recipe'})
})

router.put('/:id', (req, res) => {
  res.status(200).json({message: `Update recipe ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
  res.status(200).json({message: `delete recipe ${req.params.id}`})
})



export default router;
