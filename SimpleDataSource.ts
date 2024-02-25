import { Product } from "./Product"; // "./Product" modülünden Product sınıfı içe aktarılır.

// SimpleDataSource sınıfı, ürün verilerini sağlar.
export class SimpleDataSource {
    private product: Array<Product>; // Ürünlerin tutulduğu dizi

    // SimpleDataSource sınıfının yapıcı metodu
    constructor() {
        // Ürünlerin oluşturulması ve diziye eklenmesi
        this.product = new Array<Product>(
            new Product(1, 'Samsung s5', 'Telefon', 1000), // ID'si 1 olan, Samsung s5 isimli, Telefon kategorisinde, 1000 fiyatındaki ürün
            new Product(2, 'Samsung s6', 'Telefon', 2000), // ID'si 2 olan, Samsung s6 isimli, Telefon kategorisinde, 2000 fiyatındaki ürün
            new Product(3, 'Samsung s7', 'Telefon', 3000), // ID'si 3 olan, Samsung s7 isimli, Telefon kategorisinde, 3000 fiyatındaki ürün
            new Product(4, 'Samsung s8', 'Telefon', 4000)  // ID'si 4 olan, Samsung s8 isimli, Telefon kategorisinde, 4000 fiyatındaki ürün
        );
    }

    // Ürünleri döndüren metot
    getProducs(): Product[] {
        return this.product; // Ürün dizisini döndürür
    }
}
