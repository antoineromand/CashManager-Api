import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ProductDTO } from '../dto/product.dto';
import { ProductService } from './product.service';

@Controller('private/api/company/product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  create(@Param('companyId') company: string, @Body() product: ProductDTO) {
    return this.productService.create(company, product);
  }

  @Get()
  findAll(@Param('companyId') id: string) {
    return this.productService.findAllByCompany(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(+id);
  }

  @Put(':id/:companyId')
  async update(@Param('id') id: string, @Param('companyId') company: string, @Body() product: ProductDTO): Promise<ProductDTO> {
    return await this.productService.update(+id, company, product);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.productService.remove(+id);
  }
}
