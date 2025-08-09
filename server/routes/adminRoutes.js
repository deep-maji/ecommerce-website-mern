import express from 'express';
import { adminLogin } from '../controllers/adminController.js';
import { addProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/login', adminLogin);
router.post('/product/add', addProduct);

export default router; 