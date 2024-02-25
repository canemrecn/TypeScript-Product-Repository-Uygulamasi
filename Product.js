"use strict"; // Katı modu etkinleştirir, hata ayıklama sürecini geliştirir ve bazı hatalı kodlama alışkanlıklarını engeller.
Object.defineProperty(exports, "__esModule", { value: true }); // Modül sistemi için gerekli bir konfigürasyonu yapar. Bu, modülün "ES module" olduğunu belirtir.

var Product = /** @class */ (function () { // Product adında bir sınıf tanımlanıyor.
    function Product(id, name, category, price) { // Product sınıfının yapıcı metodu.
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product; // Product sınıfı döndürülüyor.
}());
exports.Product = Product; // Product sınıfını dışa aktarır, böylece bu sınıf başka modüller tarafından içe aktarılabilir hale gelir.
