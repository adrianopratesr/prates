import { Module } from "@nestjs/common";
import { ProductController } from "./controller.user";
import { ProductRepository } from "./product.repository";

@Module({
  controllers: [ProductController],
  providers: [ProductRepository],
})
export class ProductModule {}
