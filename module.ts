import { Taxi } from "./Taxi"; // './Taxi' modülünden Taxi sınıfı içe aktarılır.

let taxi_1: Taxi = new Taxi({ x:2, y:5 }); // Başlangıç noktası belirtilerek "taxi_1" adında bir Taxi nesnesi oluşturulur.
taxi_1.travelTo({ x:1, y:2 }); // "taxi_1" nesnesinin "travelTo" metodu çağrılarak belirtilen bir noktaya gitmesi sağlanır.

let currentLocation = taxi_1.location; // "taxi_1" nesnesinin mevcut konumu alınır.
taxi_1.location = { x:2, y:5 }; // "taxi_1" nesnesinin konumu yeniden ayarlanır.
// Her bir satırın ne yaptığını açıklayan yorumlar eklendi.
