import express from 'express';
import { addToCart, viewCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/:userId/add', addToCart);
router.get('/:userId', viewCart);

export default router;
