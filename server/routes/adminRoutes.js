import express from 'express';
import { adminLogin } from '../controllers/adminController.js';
import { addProduct, removeProduct } from '../controllers/productController.js';
import { validate } from '../middlewares/validate.js';
import { adminLoginSchema } from '../validators/admin.js';
import { upload } from '../middlewares/upload.js';

const router = express.Router();

router.post(
  '/login',
  validate(adminLoginSchema),
  adminLogin
);
router.post('/product/add', upload.single("image"), addProduct);
router.delete('/product/:productId', removeProduct)

export default router; 