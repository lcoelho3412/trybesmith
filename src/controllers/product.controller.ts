import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  public productService = new ProductService();

  async createProduct(req: Request, res: Response) {
    const product = req.body;
    const productCreated = await this.productService.create(product);
    return res.status(201).json(productCreated);
  }

  async getAll(_req: Request, res: Response) {
    const allProducts = await this.productService.getAll();

    return res.status(200).json(allProducts);
  }
}
