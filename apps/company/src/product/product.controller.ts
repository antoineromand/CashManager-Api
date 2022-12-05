import { JwtAuthGuard } from '@app/auth';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { ProductDTO } from '../dto/product.dto';
import { ProductService } from './product.service';

@Controller('private/api/company/product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }
  @UseGuards(JwtAuthGuard)
  @Post(':companyId')
  create(@Param('companyId') company: string, @Body() product: ProductDTO) {
    return this.productService.create(company, product);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':companyId')
  findAll(@Param('companyId') id: string) {
    return this.productService.findAllByCompany(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':companyId/:id')
  findOneByCompanyAndId(@Param('companyId') id: string) {
    return this.productService.findAllByCompany(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':companyId/:id')
  async update(@Param('id') id: string, @Param('companyId') company: string, @Body() product: ProductDTO): Promise<ProductDTO> {
    return await this.productService.update(+id, company, product);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.productService.remove(+id);
  }
}
