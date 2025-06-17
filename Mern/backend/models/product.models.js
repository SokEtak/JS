// import { ref } from "joi";
import e from "express";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, // Remove whitespace from both ends of the string
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Price must be positive"],
  },
  description: {
    type: String,
  },
  stock: {
    type: Number,
    required: [true, "Product stock is required"],
    default: 1,
    min: [1, "Stock must be at least 1 Or more"],
  },
  createdAt: {
    type: Date,
    // make it into readable date format in asian format
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  image_url: {
    type: String,
    required: [true, "Product image URL is required"],
  },
  Likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  reveiews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
      default: 0,
    },
  ],
  avaiablSize: [
    {
      type: String,
    },
  ],
  avaiableColor: {
    type: String,
    required: [true, "Product color is required"],
    enum: ["red", "blue", "green", "black", "white"],
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Author is required"],
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
