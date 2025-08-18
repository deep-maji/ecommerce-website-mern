import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    required: true,
  },
  phone: {
    type: String
  },
  address: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
  cart: [
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      default: 1
    }
  }
 ],
  orders: [
    {
      orderId: mongoose.Schema.Types.ObjectId,
      date: Date
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('user', userSchema);
export default User;