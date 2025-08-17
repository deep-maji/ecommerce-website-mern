import User from '../models/user.js';
import generateToken from './authController.js';
import bcrypt from "bcrypt";

const saltRounds = 10;

export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ msg: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, saltRounds);

    const newUser = await new User({ name, email, password: hashed }).save();
    
    const token = generateToken(newUser.id);

    res.status(201).json({ 
      msg: "User created successfully",
      token: token,
      name: newUser.name,
      email: newUser.email,
      address: newUser.address,
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }
    
    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) return res.status(401).json({ msg: "Invalid email or password" });
    
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

export const updateUser = async (req, res) => {
  try {
    const userId = req.userId;
    
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    if(req.body.password) req.body.password = await bcrypt.hash(req.body.password, saltRounds)

    Object.assign(user, req.body);

    await user.save();
    res.status(200).json({msg: "User details updated"})
  
  }catch(err){
    console.error("Login error:", err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}