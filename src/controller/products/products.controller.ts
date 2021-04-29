import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/product.entity';
import { Repository } from 'typeorm';

@Controller('products')
export class ProductsController {
    constructor(
        @InjectRepository(Product)
        private productRepo: Repository<Product>
    ){

    }

    @Get()
    index(){
        return this.productRepo.find();
    }

    @Get(':id')
    show(@Param() id: string){
        return this.productRepo.findOneOrFail(id)
    }

    @Post()
    store(@Body() body){
        const products = this.productRepo.create(body);
        return this.productRepo.save(products);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body){
        await this.productRepo.findOneOrFail(id);
        return this.productRepo.update({id: +id}, body);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        await this.productRepo.findOneOrFail(id);
        this.productRepo.delete(id);
    }

}
