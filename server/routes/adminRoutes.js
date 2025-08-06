import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Now feel the pain');
});

export default router; 