import express from 'express';
import { adminLogin } from '../controllers/adminController.js';
import { addProduct, removeProduct } from '../controllers/productController.js';
import { validate } from '../middlewares/validate.js';
import { adminLoginSchema } from '../validators/admin.js';
import { upload } from '../middlewares/upload.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post(
  '/login',
  validate(adminLoginSchema),
  adminLogin
);
router.post('/product/add', upload.single("image"), authenticateUser, addProduct);
router.delete('/product/:productId', authenticateUser, removeProduct)

export default router; 