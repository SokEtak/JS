import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONOG_URI);
    // console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (err) {
    console.log("Something Went Wrong on db connection:", err.message);
    exit(1); //0 = success , 1 = failure
  }
};
