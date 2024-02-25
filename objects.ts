interface Point {
    x: number; // Noktanın x koordinatını temsil eden bir number tipinde alan.
    y: number; // Noktanın y koordinatını temsil eden bir number tipinde alan.
}

interface Vehicle {
    currentLocation: Point; // Aracın mevcut konumunu temsil eden bir Nokta nesnesi.
    travelTo(point: Point): void; // Belirli bir noktaya seyahat etmek için kullanılan bir yöntem. Parametre olarak gidilecek nokta alır ve herhangi bir değer döndürmez (void).
}

class Taxi implements Vehicle { // Taksi sınıfı, Vehicle arayüzünü uygular.
    currentLocation: Point; // Aracın mevcut konumunu temsil eden bir Nokta nesnesi.
    travelTo(point: Point): void { // Aracı belirli bir noktaya götüren yöntem.
        console.log('taksi x: ${point.x} Y: ${point.y} konumuna gidiyor.'); // Konsola taksinin belirli bir noktaya gittiğini yazdırır.
    }
}

class Bus implements Vehicle { // Otobüs sınıfı, Vehicle arayüzünü uygular.
    currentLocation: Point; // Aracın mevcut konumunu temsil eden bir Nokta nesnesi.
    travelTo(point: Point): void { // Aracı belirli bir noktaya götüren yöntem.
        console.log('otobüs x: ${point.x} Y: ${point.y} konumuna gidiyor.'); // Konsola otobüsün belirli bir noktaya gittiğini yazdırır.
    }
}

let taxi_1: Taxi = new Taxi; // "taxi_1" adında bir Taxi nesnesi oluşturulur.
taxi_1.travelTo({ x:1, y:2}); // "taxi_1" nesnesinin "travelTo" metodu çağrılarak belirtilen bir noktaya gitmesi sağlanır.
taxi_1.currentlocation = { x:2, y:5}; // "taxi_1" nesnesinin "currentLocation" özelliğine bir değer atanır.

let taxi_2 = new Taxi(); // "taxi_2" adında başka bir Taxi nesnesi oluşturulur.
taxi_2.travelTo({ x:5, y:6}); // "taxi_2" nesnesinin "travelTo" metodu çağrılarak belirtilen bir noktaya gitmesi sağlanır.
taxi_2.currentlocation = { x:2, y:5}; // "taxi_2" nesnesinin "currentLocation" özelliğine bir değer atanır.

console.log(taxi_1.currentlocation.x); // "taxi_1" nesnesinin "currentLocation" özelliğinin x koordinatı konsola yazdırılır.
console.log(taxi_1.currentlocation.y); // "taxi_1" nesnesinin "currentLocation" özelliğinin y koordinatı konsola yazdırılır.
