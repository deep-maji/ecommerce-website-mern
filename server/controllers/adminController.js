import Admin from '../models/admin.js';

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email, password });
    if (!admin) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    res.status(200).json({ 
      msg: "Login successful",
      admin: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        isAdmin: admin.isAdmin
      }
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}