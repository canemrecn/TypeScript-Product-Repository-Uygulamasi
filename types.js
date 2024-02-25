var a = 5; // 'a' adında bir değişken tanımlanıyor ve değeri 5 olarak atanıyor.
var b = 'a'; // 'b' adında bir değişken tanımlanıyor ve değeri 'a' olarak atanıyor.
var c = true; // 'c' adında bir değişken tanımlanıyor ve değeri true olarak atanıyor.
var d; // 'd' adında bir değişken tanımlanıyor.
var e = [1, 2, 3]; // 'e' adında bir dizi tanımlanıyor ve içeriği [1, 2, 3] olarak atanıyor.
var f = [1, 2, 3]; // 'f' adında bir dizi tanımlanıyor ve içeriği [1, 2, 3] olarak atanıyor.
var g = [1, 'a', true]; // 'g' adında bir dizi tanımlanıyor ve içeriği [1, 'a', true] olarak atanıyor.
var h = ['a', 5, true]; // 'h' adında bir dizi tanımlanıyor ve içeriği ['a', 5, true] olarak atanıyor.
var krediPayment = 0; // 'krediPayment' adında bir değişken tanımlanıyor ve değeri 0 olarak atanıyor.
var havalePayment = 1; // 'havalePayment' adında bir değişken tanımlanıyor ve değeri 1 olarak atanıyor.
var eftPayment = 2; // 'eftPayment' adında bir değişken tanımlanıyor ve değeri 2 olarak atanıyor.

var Payment; // 'Payment' adında bir değişken tanımlanıyor.
(function (Payment) { // IIFE (Immediately Invoked Function Expression) kullanarak enum tanımlaması yapılıyor.
    Payment[Payment["kredi"] = 0] = "kredi"; // 'Payment' enumuna 'kredi' adında bir özellik ekleniyor ve değeri 0 olarak atanıyor.
    Payment[Payment["havale"] = 1] = "havale"; // 'Payment' enumuna 'havale' adında bir özellik ekleniyor ve değeri 1 olarak atanıyor.
    Payment[Payment["kapidaodeme"] = 2] = "kapidaodeme"; // 'Payment' enumuna 'kapidaodeme' adında bir özellik ekleniyor ve değeri 2 olarak atanıyor.
    Payment[Payment["etf"] = 3] = "etf"; // 'Payment' enumuna 'etf' adında bir özellik ekleniyor ve değeri 3 olarak atanıyor.
})(Payment || (Payment = {})); // Eğer 'Payment' tanımlı değilse, boş bir obje atanıyor.

var kredi = Payment.kredi; // 'kredi' adında bir değişken tanımlanıyor ve 'Payment' enumunun 'kredi' özelliği 'kredi' değişkenine atanıyor.
var havale = Payment.havale; // 'havale' adında bir değişken tanımlanıyor ve 'Payment' enumunun 'havale' özelliği 'havale' değişkenine atanıyor.
var etf = Payment.etf; // 'etf' adında bir değişken tanımlanıyor ve 'Payment' enumunun 'etf' özelliği 'etf' değişkenine atanıyor.
