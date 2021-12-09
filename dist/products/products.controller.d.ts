import { ProductService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): {
        id: string;
    };
    getAllProducts(): import("./product.model").Product[];
    getProduct(prodId: string): {
        product: import("./product.model").Product;
    };
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): void;
}
