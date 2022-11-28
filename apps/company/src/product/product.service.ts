import { Company, Product } from '@app/entities';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductDTO } from '../dto/product.dto';


@Injectable()
export class ProductService {
  async create(id: string, product: ProductDTO) {
    const company = await Company.findOne({ where: { id: id } })
    return await Product.createQueryBuilder().insert().into(Product).values({ name: product.name, price: product.price, company: company }).execute();
  }

  findAll() {
    return `This action returns all product`;
  }

  async findAllByCompany(id: string) {
    const company = await Company.findOne({ where: { id: id } })
    return await Product.find({ where: { company: { id: id } } });
  }

  async findOne(id: number) {
    return await Product.findOne({ where: { id: id } })
  }

  async update(id: number, company_id: string, product: ProductDTO) {
    const company = await Company.findOne({ where: { id: company_id } })
    if(company === null) throw new HttpException('Error in updating the product', HttpStatus.NOT_FOUND)
    const result = await Product.createQueryBuilder().update().set({ name: product.name, price: product.price, company: company }).where("id = :id", { id: id }).execute();
    if(result.affected === 0) throw new HttpException('No update on the product.', HttpStatus.NOT_MODIFIED)
    return product;
  }

  async remove(id: number) {
    return await (await Product.findOne({ where: { id: id } })).remove();
  }
}
