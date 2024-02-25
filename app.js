"use strict"; // Katı mod aktif edilir, daha sıkı kurallar uygulanır.
Object.defineProperty(exports, "__esModule", { value: true }); // exports.__esModule değeri true olarak ayarlanır.
var ProductService_1 = require("./ProductService"); // ProductService modülü ProductService_1 değişkenine aktarılır.
var _productService = new ProductService_1.ProductService(); // ProductService sınıfından _productService adında bir örnek oluşturulur.
var result; // result adında bir değişken tanımlanır.
result = _productService.getProducts(); // _productService üzerinden getProducts metodu çağrılır ve sonuç result değişkenine atanır.
result = _productService.getById(2); // _productService üzerinden getById metodu çağrılır ve sonuç result değişkenine atanır.
console.log(result); // result değişkeni konsola yazdırılır.
// Her bir satırın ne yaptığını açıklayan yorumlar eklendi.
