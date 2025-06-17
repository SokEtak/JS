import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"; // Import the routes
import ExpressError from "./utils/ExpressError.js"; // Import ExpressError class

const app = express();

// app.use(cors()); // Enable CORS for all routes
app.use((req, res, next) => {
  return next();
});

// Configure environment variables
dotenv.config();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
connectDB().catch((err) => {
  console.error("Database connection failed:", err);
  process.exit(1); // Exit if DB connection fails
});

// Home route
app.get("/", (req, res) => {
  res.send("Hi from server");
});

// Use product routes
app.use("/api/products", productRoutes); // Mount the routes on /api/products

// Catch-all route for 404 errors
app.all(/"*"/, (req, res, next) => {
  console.log("Page Not Found");
  next(new ExpressError("Page Not Found", 404));
});

// General error handling middleware
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err; // Default to 500 if no status code
  if (!err.message) err.message = "Something went wrong!"; // Default error message
  console.error(err); // Log the error details
  res.status(statusCode).json({
    message: err.message, // Send the error message in JSON format
    statusCode,
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
