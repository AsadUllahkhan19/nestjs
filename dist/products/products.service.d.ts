import { Product } from './product.model';
export declare class ProductService {
    products: Product[];
    insertProduct(title: string, desc: string, price: number): string;
    getProducts(): Product[];
    getSingleProduct(id: string): {
        product: Product;
    };
    updateProduct(productId: string, title: string, desc: string, price: number): void;
}
