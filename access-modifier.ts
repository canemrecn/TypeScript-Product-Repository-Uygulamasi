interface Point {
    x: number; // Noktanın x koordinatını temsil eden bir number tipinde alan.
    y: number; // Noktanın y koordinatını temsil eden bir number tipinde alan.
}

interface Vehicle {
    travelTo(point: Point): void; // Belirli bir noktaya seyahat etmek için kullanılan bir yöntem. Parametre olarak gidilecek nokta alır ve herhangi bir değer döndürmez (void).
}

class Taxi implements Vehicle { // Taxi sınıfı, Vehicle arayüzünü uygular.
    constructor(private location: Point, private color?: string) {
        // Yapıcı fonksiyon, bir nokta ve isteğe bağlı bir renk alır.
    }

    travelTo(point: Point): void {
        // Belirli bir noktaya seyahat etmek için kullanılan metod. Konum bilgisini günceller.
        console.log(`Taksi x: ${this.location.x}, y: ${this.location.y} konumundan x: ${point.x}, y: ${point.y} konumuna gidiyor.`);
        this.location = point; // Yeni konumu güncelle
    }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 }); // "taxi_1" adında bir Taxi nesnesi oluşturulur. Başlangıç noktası belirtilir.
taxi_1.travelTo({ x: 1, y: 2 }); // "taxi_1" nesnesinin "travelTo" metodu çağrılarak belirtilen bir noktaya gitmesi sağlanır.
// Yapılan işlemlerle ilgili yorumlar satır başlarına eklenmiştir.
