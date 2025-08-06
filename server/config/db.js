import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB');
  } catch (err) {
    console.error('DB connection error:', err.message);
    process.exit(1); // Stop the app if DB fails
  }
};

export default connectDB;
