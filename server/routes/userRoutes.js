import express from 'express';
import { validate } from '../middlewares/validate.js';
import { userLoginSchema, userSignupSchema } from '../validators/user.js';
import { loginUser, signupUser } from '../controllers/userController.js';
const router = express.Router();

router.post('/signup', 
  validate(userSignupSchema), 
  signupUser
);

router.post('/login', 
  validate(userLoginSchema),
  loginUser
);

export default router;
