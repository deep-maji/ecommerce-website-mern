import express from 'express';
import Admin from '../models/admin.js';

const router = express.Router();

router.post('/signup', async(req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(409).json({ msg: "Admin already exists" });
    }

    const newAdmin = new Admin({ name, email, password });
    await newAdmin.save();

    res.status(201).json({ msg: "Admin created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default router; 