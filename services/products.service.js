import prisma from "../prisma.js";

class ProductService {
  async getAllProducts(query) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const skip = (page - 1) * limit;

    const [products, totalResults] = await Promise.all([
      prisma.product.findMany({
        skip,
        take: limit,
        include: {
          variants: true,
          reviews: true,
          category: true,
        },
      }),
      prisma.product.count(),
    ]);

    const totalPages = Math.ceil(totalResults / limit);

    return {
      products,
      totalResults,
      totalPages,
      currentPage: page,
      resultsPerPage: limit,
    };
  }
}

export default ProductService;
