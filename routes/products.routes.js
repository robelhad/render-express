import { Router } from "express";
import ProductController from "../controllers/products.controller.js";

const router = Router();
const productController = new ProductController();

router.get("/", productController.getAllProducts);

export default router;
