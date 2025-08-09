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
    const newProduct = await new Product(req.body).save()
    res.status(201).json({
      success: true, product: newProduct
    })
  }catch(err){
    console.error("Adding product error:", err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}
