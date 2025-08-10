import express from 'express'
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/users', userRoutes);
app.use('/admin', adminRoutes);
app.use('/cart', cartRoutes);
app.use('/product', productRoutes);
app.use('/orders', orderRoutes);


app.listen(PORT,() => {
  console.log('App is listning on port 3000')
})