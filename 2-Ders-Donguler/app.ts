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

let day: number = 20;

switch (day) {
  case 0:
    console.log("Pazar");
    break;
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Salı");
    break;
  case 3:
    console.log("Çarşamba");
    break;
  case 4:
    console.log("Perşembe");
    break;
  case 5:
    console.log("Cuma");
    break;
  case 6:
    console.log("Cumartesi");
    break;
  default:
    console.log("Böyle bir gün yok");
    break;
}
