import { Vehicle } from "./Vehicle"; // './Vehicle' modülünden Vehicle arabirimi içe aktarılır.
import { Point } from "./Point"; // './Point' modülünden Point arabirimi içe aktarılır.

// Taxi sınıfı, Vehicle arabirimini uygular ve bir taksiyi temsil eder.
export class Taxi implements Vehicle { 
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
        return this._location; // Taksinin konumunu döndürür
    }

    // _location özelliğinin set metodu
    set location(value: Point) {
        // Negatif koordinatların kontrolü
        if (value.x<0 || value.y<0) {
            throw new Error('Koordinat bilgileri negatif olamaz'); // Hata fırlatılır
        }
        this._location = value; // Yeni konumu atar
    }
}
