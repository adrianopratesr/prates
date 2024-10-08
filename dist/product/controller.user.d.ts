import { ProductRepository } from "./product.repository";
export declare class ProductController {
    private productRepository;
    constructor(productRepository: ProductRepository);
    createProduct(dataProduct: any): Promise<any>;
    getProducts(): Promise<any[]>;
}
