import User from '../models/user.js';
import generateToken from './authController.js';


export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ msg: "User already exists" });
    }

    const newUser = await new User({ name, email, password }).save();
    
    const token = generateToken(newUser.id);

    res.status(201).json({ 
      msg: "User created successfully",
      token: token
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }
    
    const token = generateToken(user.id)

    res.status(200).json({ 
      msg: "Login successful",
      token: token,
      name: user.name,
      email: user.email,
      address: user.address,
    });
    
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
