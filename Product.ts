export class Product { // Product sınıfı tanımlanıyor.
    constructor( // Product sınıfının yapıcı metodu.
        public id?: number, // id özelliği, varsayılan olarak bir numara.
        public name?: string, // name özelliği, varsayılan olarak bir string.
        public category?: string, // category özelliği, varsayılan olarak bir string.
        public price?: number, // price özelliği, varsayılan olarak bir numara.
    ) {} // Yapıcı metot tanımı sona eriyor.
} // Product sınıfı tanımı sona eriyor.
