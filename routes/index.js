import { Router } from "express";
import productRoutes from "./products.routes.js";

const router = Router();

// API versioning
router.use("/v1/products", productRoutes);

export default router;
