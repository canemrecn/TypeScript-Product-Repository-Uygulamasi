interface Point {
    x: number; // Noktanın x koordinatını temsil eden bir number tipinde alan.
    y: number; // Noktanın y koordinatını temsil eden bir number tipinde alan.
}

interface Passenger {
    name: string; // Yolcunun adını temsil eden bir string tipinde alan.
    phone: string; // Yolcunun telefon numarasını temsil eden bir string tipinde alan.
}

interface Vehicle {
    currentLocation: Point; // Aracın mevcut konumunu temsil eden bir Point arayüzüne ait alan.
    travelTo(point: Point): void; // Belirli bir noktaya seyahat etmek için kullanılan bir yöntem. Parametre olarak gidilecek nokta alır ve herhangi bir değer döndürmez (void).
    getDistance(pointA: Point, pointB: Point): number; // İki nokta arasındaki mesafeyi hesaplamak için kullanılan bir yöntem. İki nokta alır ve mesafeyi bir sayı olarak döndürür.
    addPassenger(passenger: Passenger): void; // Yolcuyu araca eklemek için kullanılan bir yöntem. Yolcu parametresi alır ve herhangi bir değer döndürmez (void).
    removePassenger(passenger: Passenger): void; // Yolcuyu araçtan çıkarmak için kullanılan bir yöntem. Yolcu parametresi alır ve herhangi bir değer döndürmez (void).
}

// taxi_1 => 06 T 12
// taxi_1.currentLocation
// taxi_1.travelTo()
// taxi_2 => 06 T 13
// taxi_2.currentLocation
// taxi_2.travelTo()
