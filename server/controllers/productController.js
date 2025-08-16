import Admin from '../models/admin.js';
import Product from '../models/product.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching products" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching product" });
  }
};

export const addProduct = async (req, res) => {
  try{
    const adminId = req.userId;
    const isAdmin = await Admin.findById(adminId);
    
    if(!isAdmin) return res.status(401).json({msg: "You do not have permission!"})
    
    const newProduct = new Product(req.body);
    newProduct.image = req.file ? req.file.path.replace(/\\/g, "/") : null;
    await newProduct.save()
    res.status(201).json({
      success: true, product: newProduct
    })
  }catch(err){
    console.error("Adding product error:", err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

export const removeProduct = async (req, res) => {
  try {
    const adminId = req.userId;
    const isAdmin = await Admin.findById(adminId);
    
    if(!isAdmin) return res.status(401).json({msg: "You do not have permission!"})

    const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: `Product ${deletedProduct.name} deleted successfully` });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}
