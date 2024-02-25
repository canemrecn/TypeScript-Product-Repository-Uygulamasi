import { ProductService } from './ProductService'; // './ProductService' modülünden ProductService sınıfı içe aktarılır.

let _productService = new ProductService(); // ProductService sınıfından _productService adında bir örnek oluşturulur.

let result; // result adında bir değişken tanımlanır.

result = _productService.getProducts(); // _productService üzerinden getProducts metodu çağrılır ve sonuç result değişkenine atanır.
result = _productService.getById(2); // _productService üzerinden getById metodu çağrılır ve sonuç result değişkenine atanır.

console.log(result); // result değişkeni konsola yazdırılır.
// Her bir satırın ne yaptığını açıklayan yorumlar eklendi.
