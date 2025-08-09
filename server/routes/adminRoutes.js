import express from 'express';
import { adminLogin } from '../controllers/adminController.js';
import { addProduct } from '../controllers/productController.js';
import { validate } from '../middlewares/validate.js';
import { adminLoginSchema } from '../validators/admin.js';

const router = express.Router();

router.post('/login',validate(adminLoginSchema), adminLogin);
router.post('/product/add', addProduct);

export default router; 