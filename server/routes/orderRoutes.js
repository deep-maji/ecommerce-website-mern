import express from 'express';
import { cancelOrder, getUserOrders, placeOrder } from '../controllers/orderController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateUser, getUserOrders);
router.post('/', authenticateUser, placeOrder);
router.delete('/:orderId', authenticateUser, cancelOrder);


export default router; 