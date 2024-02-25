"use strict"; // Katı modu etkinleştirir, hata ayıklama sürecini geliştirir ve bazı hatalı kodlama alışkanlıklarını engeller.
Object.defineProperty(exports, "__esModule", { value: true }); // Modül sistemi için gerekli bir konfigürasyonu yapar. Bu, modülün "ES module" olduğunu belirtir.

var SimpleDataSource_1 = require("./SimpleDataSource"); // './SimpleDataSource' modülünden SimpleDataSource sınıfı içe aktarılır.

var ProductService = /** @class */ (function () { // ProductService adında bir sınıf tanımlanıyor.
    function ProductService() { // ProductService sınıfının yapıcı metodu.
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource(); // SimpleDataSource sınıfından bir örnek oluşturulur.
        this.products = new Array(); // products adında bir dizi oluşturulur.
        this.dataSource.getProducs().forEach(function (p) { return _this.products.push(p); }); // DataSource'dan alınan ürünler, ProductService'nin products dizisine eklenir.
    } // Yapıcı metot tanımı sona eriyor.

    ProductService.prototype.getById = function (id) { // ProductService sınıfına ait getById metodu tanımlanıyor.
        return this.products.filter(function (p) { return p.id === id; })[0]; // Belirli bir id'ye sahip ürünü döndüren bir filtreleme işlemi gerçekleştirilir.
    }; // getById metodu tanımı sona eriyor.

    ProductService.prototype.getProducts = function () { // ProductService sınıfına ait getProducts metodu tanımlanıyor.
        return this.products; // Tüm ürünleri döndüren bir metot.
    }; // getProducts metodu tanımı sona eriyor.

    ProductService.prototype.saveProduct = function (product) { // ProductService sınıfına ait saveProduct metodu tanımlanıyor.
        if (product.id == 0 || product.id == null) { // Eğer ürünün id'si 0 veya null ise:
            product.id = this.generateId(); // Ürüne yeni bir id oluşturulur.
            this.products.push(product); // Ürün products dizisine eklenir.
        } // Eğer koşul sağlanmazsa:
        else { // Başka bir durumda:
            var index = this.products.findIndex(function (p) { return p.id === product.id; }); // Ürünün products dizisindeki indeksi bulunur.
            if (index >= 0) { // Eğer indeks 0'dan büyük veya eşitse:
                this.products.splice(index, 1, product); // Ürünün bilgileri güncellenir.
            } // Koşul sağlanmazsa herhangi bir işlem yapılmaz.
        } // İf-else yapısı sona eriyor.
    }; // saveProduct metodu tanımı sona eriyor.

    ProductService.prototype.deleteProduct = function (product) { // ProductService sınıfına ait deleteProduct metodu tanımlanıyor.
        var index = this.products.findIndex(function (p) { return p.id === product.id; }); // Ürünün products dizisindeki indeksi bulunur.
        if (index >= 0) { // Eğer indeks 0'dan büyük veya eşitse:
            this.products.splice(index, 1); // Ürün products dizisinden silinir.
        } // Koşul sağlanmazsa herhangi bir işlem yapılmaz.
    }; // deleteProduct metodu tanımı sona eriyor.

    ProductService.prototype.generateId = function () { // ProductService sınıfına ait generateId metodu tanımlanıyor.
        var key = 1; // key adında bir değişken oluşturulur ve 1 değeri atanır.
        while (this.getById(key) != null) { // Key'in karşılığı null olana kadar döngü devam eder.
            key++; // Key değeri bir arttırılır.
        } // while döngüsü sona eriyor.
        return key; // Döngü sona erdikten sonra key değeri döndürülür.
    }; // generateId metodu tanımı sona eriyor.

    return ProductService; // ProductService sınıfı döndürülüyor.
}()); // ProductService sınıfının tanımı sona eriyor.
exports.ProductService = ProductService; // ProductService sınıfını dışa aktarır, böylece bu sınıf başka modüller tarafından içe aktarılabilir hale gelir.
