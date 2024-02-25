interface Point { // Nokta tipini temsil eden bir arayüz tanımlanıyor.
    x: number; // Noktanın x koordinatını temsil eden bir sayı.
    y: number; // Noktanın y koordinatını temsil eden bir sayı.
}

interface Vehicle { // Aracı temsil eden bir arayüz tanımlanıyor.
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

// taxi_1 => 06 T 12
// taxi_1.currentLocation
// taxi_1.travelTo()
// taxi_2 => 06 T 13
// taxi_2.currentLocation
// taxi_2.travelTo()
