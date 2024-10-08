import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository {
  private products = [];

  save(product) {
    this.products.push(product);
  }

  async list() {
    return this.products;
  }
}
