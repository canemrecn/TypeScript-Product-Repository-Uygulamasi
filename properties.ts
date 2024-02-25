// Point arabirimi, bir noktanın x ve y koordinatlarını temsil eder.
interface Point {
    x: number; // Noktanın x koordinatını temsil eden bir number tipinde alan.
    y: number; // Noktanın y koordinatını temsil eden bir number tipinde alan.
}

// Vehicle arabirimi, araçların sahip olması gereken yöntemleri tanımlar.
interface Vehicle {
    travelTo(point: Point): void; // Belirli bir noktaya seyahat etmek için kullanılan bir yöntem. Parametre olarak gidilecek nokta alır ve herhangi bir değer döndürmez (void).
}

// Taxi sınıfı, Vehicle arabirimini uygular ve bir taksiyi temsil eder.
class Taxi implements Vehicle { 
    private _location: Point; // Taksinin konumunu tutan özel bir değişken
    private _color?: string; // Taksinin rengini tutan opsiyonel bir değişken

    // Taxi sınıfının yapıcı metodu
    constructor(location: Point, color?: string) {
        this._location = location; // Başlangıç konumunu ayarlar
        this._color = color; // Taksinin rengini ayarlar (isteğe bağlı)
    }

    // Belirli bir noktaya seyahat etmeyi sağlayan metot
    travelTo(point: Point): void {
        console.log(`Taksi x: ${this._location.x}, y: ${this._location.y} konumundan x: ${point.x}, y: ${point.y} konumuna gidiyor.`);
        this.location = point; // Yeni konumu günceller
    }

    // _location özelliğinin get metodu
    get location(){
        return this._location;
    }

    // _location özelliğinin set metodu
    set location(value: Point) {
        // Negatif koordinatların kontrolü
        if (value.x < 0 || value.y < 0) {
            throw new Error('Koordinat bilgileri negatif olamaz');
        }
        this._location = value; // Yeni konumu atar
    }
}

// Taxi sınıfının kullanımı
let taxi_1: Taxi = new Taxi({ x:2, y:5,}); // "taxi_1" adında bir Taxi nesnesi oluşturulur.
taxi_1.travelTo({ x:1, y:2}); // "taxi_1" nesnesinin "travelTo" metodu çağrılarak belirtilen bir noktaya gitmesi sağlanır.
let currentLocation = taxi_1.location; // "taxi_1" nesnesinin mevcut konumu alınır
taxi_1.location = ({ x:2, y:5,}); // "taxi_1" nesnesinin konumu değiştirilir
