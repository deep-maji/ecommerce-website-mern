import express from 'express';
import { addToCart, removeFromCart, viewCart } from '../controllers/cartController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateUser, viewCart);
router.post('/', authenticateUser, addToCart);
router.delete('/:productId', authenticateUser, removeFromCart)

export default router;
