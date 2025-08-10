import User from '../models/user.js';
import Product from '../models/product.js';

export const addToCart = async (req, res) => {
  try {
    const userId = req.params.userId
    const { productId, quantity } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ msg: "Product not found" });

    const existingItem = user.cart.find(item => item.productId.toString() === productId);

    if (existingItem) {
      existingItem.quantity += quantity || 1;
    } else {
      user.cart.push({ productId, quantity: quantity || 1 });
    }

    await user.save();
    res.status(200).json({ msg: "Product added to cart", cart: user.cart });
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });
    
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ msg: "Product not found" });
    
    user.cart = user.cart.filter(item => !item.productId.equals(productId));

    await user.save();
    res.json({ msg: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ msg: "Error removing item from cart" });
  }
};

export const viewCart = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId).populate('cart.productId');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.status(200).json({ cart: user.cart });
  } catch (error) {
    console.error('View cart error:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};