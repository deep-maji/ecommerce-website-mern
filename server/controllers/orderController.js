import User from '../models/user.js';
import Order from '../models/order.js';

export const placeOrder = async (req, res) => {
  try {
    const { userId } = req.params;
    const { totalAmount } = req.body; 

    const user = await User.findById(userId).populate('cart.productId');
    if (!user) return res.status(404).json({ msg: "User not found" });

    if (user.cart.length === 0) {
      return res.status(400).json({ msg: "Cart is empty" });
    }

    const order = new Order({
      userId,
      products: user.cart.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity
      })),
      totalAmount
    });

    await order.save();

    user.orders.push({ orderId: order._id, date: new Date() });

    user.cart = [];

    await user.save();

    res.status(201).json({ msg: "Order placed successfully", orderId: order._id });
  } catch (err) {
    console.error("Order error:", err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId }).populate('products.productId');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching orders" });
  }
};


export const cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ msg: "Order not found" });
    }

    if (order.status === "Cancelled") {
      return res.status(400).json({ msg: "Order is already cancelled" });
    }

    order.status = "Cancelled";
    await order.save();

    res.json({ msg: "Order cancelled successfully", order });
  } catch (err) {
    console.error("Cancel order error:", err);
    res.status(500).json({ msg: "Failed to cancel order" });
  }
};
