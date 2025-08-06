const mongoose = require('mongoose');

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
    minlength: 6
  },
  phone: {
    type: String
  },
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  cart: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      quantity: { type: Number, default: 1 }
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

export const User = mongoose.model('user', userSchema);