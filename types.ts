let a: number = 5; // 'a' adında bir değişken tanımlanıyor ve tipi number olarak belirleniyor, değeri 5 olarak atanıyor.
let b: string = 'a'; // 'b' adında bir değişken tanımlanıyor ve tipi string olarak belirleniyor, değeri 'a' olarak atanıyor.
let c: boolean = true; // 'c' adında bir değişken tanımlanıyor ve tipi boolean olarak belirleniyor, değeri true olarak atanıyor.
let d: any; // 'd' adında bir değişken tanımlanıyor ve tipi any olarak belirleniyor.
let e: number[] = [1,2,3]; // 'e' adında bir değişken tanımlanıyor, tipi number dizisi olarak belirleniyor ve içeriği [1,2,3] olarak atanıyor.
let f: Array<number> = [1,2,3]; // 'f' adında bir değişken tanımlanıyor, tipi number dizisi olarak belirleniyor ve içeriği [1,2,3] olarak atanıyor.
let g: any[] = [1,'a',true]; // 'g' adında bir değişken tanımlanıyor, tipi any dizisi olarak belirleniyor ve içeriği [1,'a',true] olarak atanıyor.
let h:[string,number,boolean] = ['a',5,true]; // 'h' adında bir değişken tanımlanıyor, tipi [string,number,boolean] olarak belirleniyor ve içeriği ['a',5,true] olarak atanıyor.

const krediPayment = 0; // 'krediPayment' adında bir sabit tanımlanıyor ve değeri 0 olarak atanıyor.
const havalePayment = 1; // 'havalePayment' adında bir sabit tanımlanıyor ve değeri 1 olarak atanıyor.
const eftPayment = 2; // 'eftPayment' adında bir sabit tanımlanıyor ve değeri 2 olarak atanıyor.

enum Payment {kredi=0, havale=1, kapidaodeme=2, etf=3}; // 'Payment' adında bir enum tanımlanıyor ve özellikleri sırasıyla kredi=0, havale=1, kapidaodeme=2, etf=3 olarak atanıyor.

let kredi = Payment.kredi; // 'kredi' adında bir değişken tanımlanıyor ve 'Payment' enumunun 'kredi' özelliği 'kredi' değişkenine atanıyor.
let havale = Payment.havale; // 'havale' adında bir değişken tanımlanıyor ve 'Payment' enumunun 'havale' özelliği 'havale' değişkenine atanıyor.
let etf = Payment.etf; // 'etf' adında bir değişken tanımlanıyor ve 'Payment' enumunun 'etf' özelliği 'etf' değişkenine atanıyor.
