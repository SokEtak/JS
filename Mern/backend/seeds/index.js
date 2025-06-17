import Product from "../models/product.models.js";
import products from "./products";

export const importData = async () => {
  try {
    await Product.deleteMany({});
    const importedProducts = await Product.insertMany(products);
    await importedProducts.catch((err) => {
      console.error("Error saving imported data:", err.message);
    });
    console.log("Data Imported Successfully");
  } catch (error) {
    console.error("Error importing data:", error.message);
  }
};
importData();
