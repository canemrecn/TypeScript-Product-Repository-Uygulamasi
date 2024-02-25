import { Point } from "./Point"; // './Point' modülünden Point arabirimi içe aktarılır.

// Vehicle arabirimi, araçların sahip olması gereken yöntemleri tanımlar.
export interface Vehicle {
    travelTo(point: Point): void; // Belirli bir noktaya seyahat etmek için kullanılan bir yöntem. Parametre olarak gidilecek nokta alır ve herhangi bir değer döndürmez (void).
}
