import { Vehicle } from "./Vehicle"; // './Vehicle' modülünden Vehicle arayüzü içe aktarılır.
import { Point } from "./Point"; // './Point' modülünden Point arayüzü içe aktarılır.

export class Bus implements Vehicle { // Bus sınıfı, Vehicle arayüzünü uygular.
    
    travelTo(point: Point): void { // travelTo metodunu uygular, ancak burada bir hata fırlatılmıştır. Alt sınıflar bu metodu kendi mantıklarına göre uygulamalıdır.
        throw new Error("Method not implemented."); // Hata fırlatılır, çünkü travelTo metodu henüz uygulanmamıştır.
    }

}
// Her bir satırın ne yaptığını açıklayan yorumlar eklendi.
