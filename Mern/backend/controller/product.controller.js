import Product from "../models/product.models.js";
import mongoose from "mongoose";

const validateProductId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }
};

const index = async (req, res) => {
  const products = await Product.find();
  return res.status(200).json(products);
};

const show = async (req, res) => {
  const { id } = req.params;
  validateProductId(id);
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  return res.status(200).json(product);
};

const store = async (req, res) => {
  const newProduct = new Product({ ...req.body });
  await newProduct.save();
  return res.status(201).json({
    message: "Product created successfully",
    product: newProduct,
  });
};

const update = async (req, res) => {
  const { id } = req.params;
  validateProductId(id);
  const updatedProduct = await Product.findByIdAndUpdate(id, { ...req.body });
  updatedProduct.createdAt = updatedProduct.createdAt;
  updatedProduct.updatedAt = Date.now();
  await updatedProduct.save();
  return res
    .status(200)
    .json({ message: "Product updated successfully", updatedProduct });
};

const destroy = async (req, res) => {
  const { id } = req.params;
  validateProductId(id);
  const deletedProduct = await Product.findByIdAndDelete(id);
  if (!deletedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }
  return res.status(200).json({ message: "Product deleted successfully" });
};

export const productController = {
  index,
  show,
  store,
  update,
  destroy,
};
