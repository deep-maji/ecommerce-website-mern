import express from 'express';
import { validate } from '../middlewares/validate.js';
import { userLoginSchema, userSignupSchema } from '../validators/user.js';
import { loginUser, signupUser, updateUser } from '../controllers/userController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/signup', 
  validate(userSignupSchema), 
  signupUser
);

router.post('/login', 
  validate(userLoginSchema),
  loginUser
);

router.patch('/',
  authenticateUser,
  updateUser
)

export default router;
