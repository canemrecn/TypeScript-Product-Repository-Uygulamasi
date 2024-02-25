"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product"); // './Product' modülünden Product sınıfı içe aktarılır.

// SimpleDataSource sınıfı, ürün verilerini sağlar.
var SimpleDataSource = /** @class */ (function () {
    // SimpleDataSource sınıfının yapıcı metodu
    function SimpleDataSource() {
        // Ürün verilerinin oluşturulması
        this.product = new Array(
            new Product_1.Product(1, 'Samsung s5', 'Telefon', 1000), // ID'si 1 olan, Samsung s5 isimli, Telefon kategorisinde, 1000 fiyatındaki ürün
            new Product_1.Product(2, 'Samsung s6', 'Telefon', 2000), // ID'si 2 olan, Samsung s6 isimli, Telefon kategorisinde, 2000 fiyatındaki ürün
            new Product_1.Product(3, 'Samsung s7', 'Telefon', 3000), // ID'si 3 olan, Samsung s7 isimli, Telefon kategorisinde, 3000 fiyatındaki ürün
            new Product_1.Product(4, 'Samsung s8', 'Telefon', 4000)  // ID'si 4 olan, Samsung s8 isimli, Telefon kategorisinde, 4000 fiyatındaki ürün
        );
    }
    // Ürünleri döndüren metot
    SimpleDataSource.prototype.getProducs = function () {
        return this.product; // Ürün dizisini döndürür
    };
    return SimpleDataSource; // SimpleDataSource sınıfı dışa aktarılır.
}());
exports.SimpleDataSource = SimpleDataSource; // SimpleDataSource sınıfı dışa aktarılır.
