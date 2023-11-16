// npm install --save-dev lite-server
// tsc app.ts --w

// ! İf-else

// let x: number = 55;
// let y: number = 25;

// if (x > y) {
//   console.log("X Y'den büyüktür");
// } else if (x < y) {
//   console.log("X Y'den küçüktür");
// } else {
//   console.log("X ve Y eşittir");
// }

// * TEK satır yazımı

// x > y
//   ? console.log("X Y den büyüktür")
//   : console.log("X Y den küçük veya eşittir");

// !Switch Case

// let day: number = 20;

// switch (day) {
//   case 0:
//     console.log("Pazar");
//     break;
//   case 1:
//     console.log("Pazartesi");
//     break;
//   case 2:
//     console.log("Salı");
//     break;
//   case 3:
//     console.log("Çarşamba");
//     break;
//   case 4:
//     console.log("Perşembe");
//     break;
//   case 5:
//     console.log("Cuma");
//     break;
//   case 6:
//     console.log("Cumartesi");
//     break;
//   default:
//     console.log("Böyle bir gün yok");
//     break;
// }

// ! For

// for (let i = 0; i < 3; i++) {
//   console.log("i degerim", i);
// }

// let arr = [13, 27, 32, 54];

// for (let item of arr) {
//   console.log(item);
// }

// console.log(" ");
// ? eğer index numarasını istiyorsa

// for (let item in arr) {
//   console.log(item);
// }

// ! While

// let counter = 10;

// while (counter < 5) {
//   console.log(counter);
//   counter++;
// }

// ? Do While 'de 1 kere kesin çalışır ondan sonra şarta bakar

// do {
//   console.log(counter);
//   counter++;
// } while (counter < 5);

// ! Function

// function add(a: number, b: number): number {
//   return a + b;
// }

// let toplam = add(10, 20);

// console.log(typeof toplam);

// function bastir(): void {
//   console.log("zafer");
//   return 35; Void geriye değer döndürmüyor
// }

// let writer = bastir();
// console.log(writer);

// function birlestir(ad: string, soyad: string = "günay"): string {
//   return ad + " " + soyad;
// }

// let degisken = birlestir("zafer", "Önalan");
// console.log(degisken);

// function carpim(a: number, b: number, c?: number): number {
// c? olan kısım değer girsemde olur girmesemde
//   console.log(typeof c);
//   if (typeof c !== "undefined") {
//     return a * b * c;
//   }
//   return a * b;
// }

// let writer = carpim(10, 5);
// console.log(writer);

// ? 1.yol
// function carpim(a: number, b: number) {
//   return a * b;
// }

// ? 2.yol arrow Fucntion
// let carpim = (a: number, b: number): number => a * b;

// let degisken = carpim(4, 5);
// console.log(degisken);

// !Function Overloading

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

let degisken = add("zafer", "günay");
let degisken2 = add(5, 6);
console.log(degisken);
console.log(degisken2);
