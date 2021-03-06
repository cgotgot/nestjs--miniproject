import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
      @Body('title') prodTitle: string, 
      @Body('description') prodDesc: string,
      @Body('price') prodPrice: number
    ) {
      const genId = this.productsService.insertProduct(
        prodTitle, 
        prodDesc, 
        prodPrice
      );
      return { id: genId };
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
      @Param('id') prodId: string,
      @Body('title') prodTitle: string, 
      @Body('description') prodDesc: string,
      @Body('price') prodPrice: number
    ) {
    this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return null;
  }
}
