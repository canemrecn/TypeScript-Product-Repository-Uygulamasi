import { IProductService } from "./IProductService"; // './IProductService' modülünden IProductService arayüzü içe aktarılır.
import { Product } from "./Product"; // './Product' modülünden Product sınıfı içe aktarılır.
import { SimpleDataSource } from "./SimpleDataSource"; // './SimpleDataSource' modülünden SimpleDataSource sınıfı içe aktarılır.

export class ProductService implements IProductService { // ProductService sınıfı, IProductService arayüzünü uygular.

    private dataSource: SimpleDataSource; // dataSource adında bir SimpleDataSource örneği oluşturulur.
    private products: Array<Product>; // products adında bir Product dizisi oluşturulur.

    constructor() { // ProductService sınıfının yapıcı metodu.
        this.dataSource = new SimpleDataSource(); // dataSource örneği oluşturulur.
        this.products = new Array<Product>(); // products dizisi oluşturulur.
        this.dataSource.getProducs().forEach(p => this.products.push(p)); // DataSource'dan alınan ürünler, products dizisine eklenir.
    } // Yapıcı metot tanımı sona eriyor.

    getById(id: number): Product { // ProductService sınıfına ait getById metodu tanımlanıyor.
        return this.products.filter(p => p.id === id)[0]; // Belirli bir id'ye sahip ürünü döndüren bir filtreleme işlemi gerçekleştirilir.
    } // getById metodu tanımı sona eriyor.

    getProducts(): Product[] { // ProductService sınıfına ait getProducts metodu tanımlanıyor.
        return this.products; // Tüm ürünleri döndüren bir metot.
    } // getProducts metodu tanımı sona eriyor.

    saveProduct(product: Product): void { // ProductService sınıfına ait saveProduct metodu tanımlanıyor.
        if (product.id == 0 || product.id == null) { // Eğer ürünün id'si 0 veya null ise:
            product.id = this.generateId(); // Ürüne yeni bir id oluşturulur.
            this.products.push(product); // Ürün products dizisine eklenir.
        } else { // Eğer id 0 veya null değilse:
            let index = this.products.findIndex(p => p.id === product.id); // Ürünün products dizisindeki indeksi bulunur.
            if (index >= 0) { // Eğer indeks 0'dan büyük veya eşitse:
                this.products.splice(index, 1, product); // Ürünün bilgileri güncellenir.
            }
        }
    } // saveProduct metodu tanımı sona eriyor.

    deleteProduct(product: Product): void { // ProductService sınıfına ait deleteProduct metodu tanımlanıyor.
        let index = this.products.findIndex(p => p.id === product.id); // Ürünün products dizisindeki indeksi bulunur.
        if (index >= 0) { // Eğer indeks 0'dan büyük veya eşitse:
            this.products.splice(index, 1); // Ürün products dizisinden silinir.
        }
    } // deleteProduct metodu tanımı sona eriyor.

    private generateId(): number { // ProductService sınıfına ait generateId metodu tanımlanıyor.
        let key = 1; // key adında bir değişken oluşturulur ve 1 değeri atanır.
        while (this.getById(key) != null) { // Key'in karşılığı null olana kadar döngü devam eder.
            key++; // Key değeri bir arttırılır.
        }
        return key; // Döngü sona erdikten sonra key değeri döndürülür.
    } // generateId metodu tanımı sona eriyor.

} // ProductService sınıfı tanımı sona eriyor.

