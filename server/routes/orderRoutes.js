import express from 'express';
import { cancelOrder, getUserOrders, placeOrder } from '../controllers/orderController.js';
const router = express.Router();

router.get('/:userId', getUserOrders);
router.post('/:userId', placeOrder);
router.delete('/:orderId', cancelOrder);


export default router; 