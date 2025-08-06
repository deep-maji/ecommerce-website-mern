import express from 'express'
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

// routes
app.use('/users', userRoutes);
app.use('/admin', adminRoutes);


app.listen(PORT,() => {
  console.log('App is listning on port 3000')
})