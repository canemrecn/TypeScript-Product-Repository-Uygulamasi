import { Product } from "./Product"; // './Product' modülünden Product arayüzü içe aktarılır.

export interface IProductService {
    getById(id: number): Product; // Belirli bir ürünün id'sine göre ürünü getiren metot.
    getProducts(): Array<Product>; // Tüm ürünleri getiren metot.
    saveProduct(product: Product): void; // Bir ürünü kaydeden metot.
    deleteProduct(product: Product): void; // Bir ürünü silen metot.
}
// Her bir metodun ne yaptığını açıklayan yorumlar eklendi.
