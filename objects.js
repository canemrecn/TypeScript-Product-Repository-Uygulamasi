var Taxi = /** @class */ (function () { // "Taxi" adında bir sınıf tanımlanır.
    function Taxi() { // Taxi sınıfının yapıcı metodu tanımlanır.
    }
    Taxi.prototype.travelTo = function (point) { // Taxi sınıfına ait bir metot tanımlanır. Bu metot, belirtilen bir noktaya gitmeyi simüle eder.
        console.log('taksi x: ${point.x} Y: ${point.y} konumuna gidiyor.'); // Belirtilen noktaya giden bir taksinin konum bilgisi konsola yazdırılır.
    };
    return Taxi; // Taxi sınıfı döndürülür.
}());

var Bus = /** @class */ (function () { // "Bus" adında bir sınıf tanımlanır.
    function Bus() { // Bus sınıfının yapıcı metodu tanımlanır.
    }
    Bus.prototype.travelTo = function (point) { // Bus sınıfına ait bir metot tanımlanır. Bu metot, belirtilen bir noktaya gitmeyi simüle eder.
        console.log('otobüs x: ${point.x} Y: ${point.y} konumuna gidiyor.'); // Belirtilen noktaya giden bir otobüsün konum bilgisi konsola yazdırılır.
    };
    return Bus; // Bus sınıfı döndürülür.
}());

var taxi_1 = new Taxi; // "taxi_1" adında yeni bir Taxi nesnesi oluşturulur.
taxi_1.travelTo({ x: 1, y: 2 }); // "taxi_1" nesnesinin "travelTo" metodu çağrılır ve belirtilen noktaya gitmesi sağlanır.
taxi_1.currentlocation = { x: 2, y: 5 }; // "taxi_1" nesnesinin "currentLocation" özelliğine bir değer atanır.
console.log(taxi_1.currentlocation.x); // "taxi_1" nesnesinin "currentLocation" özelliğinin x koordinatı konsola yazdırılır.
console.log(taxi_1.currentlocation.y); // "taxi_1" nesnesinin "currentLocation" özelliğinin y koordinatı konsola yazdırılır.
