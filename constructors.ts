interface Point {
    x: number; // Noktanın x koordinatını temsil eden bir number tipinde alan.
    y: number; // Noktanın y koordinatını temsil eden bir number tipinde alan.
}

interface Vehicle {
    currentLocation: Point; // Aracın mevcut konumunu temsil eden bir Nokta nesnesi.
    travelTo(point: Point): void; // Belirli bir noktaya seyahat etmek için kullanılan bir yöntem. Parametre olarak gidilecek nokta alır ve herhangi bir değer döndürmez (void).
}

class Taxi implements Vehicle { // Taxi sınıfı, Vehicle arayüzünü uygular.
    color: string; // Taxi nesnesinin rengini temsil eden bir string tipinde alan.
    currentLocation: Point; // Taxi nesnesinin mevcut konumunu temsil eden bir Nokta nesnesi.

    constructor(location?: Point, color: string = 'yellow') { // Taxi sınıfının yapıcı metodu.
        this.currentLocation = location || { x: 0, y: 0 }; // Varsayılan olarak (0,0) konumunu kullanır.
        this.color = color; // Taxi nesnesinin rengini ayarlar.
    }

    travelTo(point: Point): void { // Belirli bir noktaya seyahat etmek için kullanılan metot.
        console.log(`Taksi x: ${point.x}, y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1: Taxi = new Taxi({ x:2, y:5,}); // "taxi_1" adında bir Taxi nesnesi oluşturulur. Başlangıç konumu belirtilir.
taxi_1.travelTo({ x:1, y:2}); // "taxi_1" nesnesinin "travelTo" metodu çağrılarak belirtilen bir noktaya gitmesi sağlanır.
// taxi_1.color='Red'; // Taxi nesnesinin rengi değiştirilir.
console.log(taxi_1.currentLocation); // "taxi_1" nesnesinin mevcut konumu konsola yazdırılır.

let taxi_2 = new Taxi({x: 2, y: 5}, 'red'); // "taxi_2" adında bir Taxi nesnesi oluşturulur. Başlangıç konumu ve renk belirtilir.
let taxi_3 = new Taxi(); // "taxi_3" adında bir Taxi nesnesi oluşturulur. Varsayılan değerlerle oluşturulur.
