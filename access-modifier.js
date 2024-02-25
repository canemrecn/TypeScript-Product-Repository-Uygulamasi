var Taxi = /** @class */ (function () { // Bir sınıf tanımlanır. Bu sınıf Taxi adını taşır.
    function Taxi(location, color) { // Taxi sınıfının yapıcı metodu tanımlanır. location ve color parametreleri alır.
        this.location = location; // Taxi sınıfının location özelliği bu sınıfın nesnelerinin konumunu temsil eder.
        this.color = color; // Taxi sınıfının color özelliği bu sınıfın nesnelerinin rengini temsil eder.
    }
    Taxi.prototype.travelTo = function (point) { // Taxi sınıfına bir prototip metodu eklenir: travelTo. Bu metot, bir noktaya seyahat etmeyi sağlar ve konum bilgisini günceller.
        console.log("Taksi x: ".concat(this.location.x, ", y: ").concat(this.location.y, " konumundan x: ").concat(point.x, ", y: ").concat(point.y, " konumuna gidiyor."));
        this.location = point; // Yeni konumu güncelle
    };
    return Taxi; // Taxi sınıfı tanımı tamamlanır.
}());
var taxi_1 = new Taxi({ x: 2, y: 5, }); // "taxi_1" adında bir Taxi nesnesi oluşturulur. Başlangıç konumu belirtilir.
taxi_1.travelTo({ x: 1, y: 2 }); // "taxi_1" nesnesinin "travelTo" metodu çağrılarak belirtilen bir noktaya gitmesi sağlanır.
// BU KODDA HER KOD SATIRININ ALTINA YORUM SATIRI OLARAK NE İŞE YARADIĞINI YAZ
