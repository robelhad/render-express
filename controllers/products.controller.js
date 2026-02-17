import ProductService from "../services/products.service.js";

class ProductController {
  constructor() {
    this.productService = new ProductService();
  }

  getAllProducts = async (req, res) => {
    try {
      const result = await this.productService.getAllProducts(req.query);

      res.status(200).json({
        message: "Products fetched successfully",
        data: result,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

export default ProductController;
