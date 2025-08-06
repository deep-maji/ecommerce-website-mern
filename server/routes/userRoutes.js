import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Wake up to reality!')
});

export default router;
