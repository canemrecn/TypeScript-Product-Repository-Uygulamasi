const getAverage = (...a: number[]): string => { // Rest parametresi kullanılarak değişken sayıda sayısal argüman alır ve sonuç bir dize döndürür.
    let total = 0; // Toplam değeri tutmak için bir değişken oluşturulur ve 0'a eşitlenir.
    let count = 0; // Argüman sayısını tutmak için bir değişken oluşturulur ve 0'a eşitlenir.
    for (let i = 0; i < a.length; i++) { // Argümanlar üzerinde bir döngü oluşturulur.
        total += a[i]; // Her bir argüman toplam değere eklenir.
        count++; // Her bir argüman için sayacı arttırılır.
    }
    const result = total / count; // Toplam değer argüman sayısına bölünerek ortalama hesaplanır.
    return 'result : ' + result; // Ortalama sonucu bir dize olarak döndürülür.
}

getAverage(10, 20, 30, 40); // Ortalama hesaplanır ve sonuç dizesi konsola yazdırılır.
getAverage(10, 20, 30); // Ortalama hesaplanır ve sonuç dizesi konsola yazdırılır.
getAverage(10, 20); // Ortalama hesaplanır ve sonuç dizesi konsola yazdırılır.
