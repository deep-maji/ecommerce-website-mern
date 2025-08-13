import User from '../models/user.js';
import  jwt  from "jsonwebtoken";

export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ msg: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ msg: "User created successfully" });
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
    
    const token = jwt.sign(
      {id: user.id},
      process.env.SECRET_KEY,
    )

    res.status(200).json({ 
      msg: "Login successful",
      token: token
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
