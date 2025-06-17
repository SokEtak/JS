import express from "express";
import { catchAsync } from "../utils/CatchAsync.js";
import { productController } from "../controller/product.controller.js"; // Adjust the import path as necessary

import { validateProduct } from "../middlewares.js";

const router = express.Router();

router
  .route("/")
  .get(catchAsync(productController.index))
  .post(validateProduct, catchAsync(productController.store));

//edit:must add it later
//new:must add it later

router
  .route("/:id")
  .get(catchAsync(productController.show))
  .put(validateProduct, catchAsync(productController.update))
  .delete(productController.destroy);

export default router;
