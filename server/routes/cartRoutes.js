import express from 'express';
import { addToCart, removeFromCart, viewCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/:userId/add', addToCart);
router.get('/:userId', viewCart);
router.delete('/:userId/remove/:productId', removeFromCart)

export default router;
