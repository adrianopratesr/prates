import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "./product.repository";

@Controller("/produtos")
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() dataProduct) {
    this.productRepository.save(dataProduct);
    return dataProduct;
  }

  @Get()
  async getProducts() {
    return this.productRepository.list();
  }
}
