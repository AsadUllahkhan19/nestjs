import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [];
  insertProduct(title: string, desc: string, price: number) {
      const prodId = new Date().toString()
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }
  getProducts(){
      return [...this.products]
  }
  getSingleProduct(id:string){
      const product = this.products.find(prod=>prod.id == id)
      return {product};
  }
  updateProduct(productId:string,title:string,desc:string,price:number){
      
  }
}
