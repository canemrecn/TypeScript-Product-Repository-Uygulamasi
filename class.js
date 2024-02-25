var Taxi = /** @class */ (function () { // Taxi sınıfı tanımlanıyor.
    function Taxi() { } // Taxi sınıfının yapıcı metodu, herhangi bir argüman almadan çağrıldığında yapılacak işlemleri tanımlar.
    Taxi.prototype.travelTo = function (point) { // Taxi sınıfına ait "travelTo" isimli bir metot tanımlanıyor. Bu metot, bir noktaya seyahat etme işlemini gerçekleştirir.
        console.log('taksi x: ${point.x} Y: ${point.y} konumuna gidiyor.'); // Belirtilen noktaya gidildiğine dair bir çıktıyı konsola yazdırır.
    };
    return Taxi; // Taxi sınıfı döndürülüyor.
}());

var Bus = /** @class */ (function () { // Bus sınıfı tanımlanıyor.
    function Bus() { } // Bus sınıfının yapıcı metodu, herhangi bir argüman almadan çağrıldığında yapılacak işlemleri tanımlar.
    Bus.prototype.travelTo = function (point) { // Bus sınıfına ait "travelTo" isimli bir metot tanımlanıyor. Bu metot, bir noktaya seyahat etme işlemini gerçekleştirir.
        console.log('otobüs x: ${point.x} Y: ${point.y} konumuna gidiyor.'); // Belirtilen noktaya gidildiğine dair bir çıktıyı konsola yazdırır.
    };
    return Bus; // Bus sınıfı döndürülüyor.
}());

// taxi_1 => 06 T 12
// taxi_1.currentLocation
// taxi_1.travelTo()
// taxi_2 => 06 T 13
// taxi_2.currentLocation
// taxi_2.travelTo()

