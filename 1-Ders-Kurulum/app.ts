// console.log("Typescripte girdik");
// console.log("Zafer Günay Önalan");

//! Veri Türleri
// const age: number = 29;
// let firstname: string = "Zafer Günay";
// let lastname: string = "Önalan";
// let isUpdated: boolean = true;

// let employeeName: string = "Zafer Günay";
// let employeeDept: string = "Software Developer";

// let employeeDesc: string = `${employeeName} works in the ${employeeDept} department`;
// console.log(employeeDesc);

// !Array
// * 1. Yol
// let firstNames: string[] = ["Zafer", "Merve", "Zerrin"];
//  * 2.Yol
// let firstNames: Array<string> = ["Zafer", "Merve", "Zerrin"];
// console.log(firstNames);

// let arr = [1, 3, "Apple", "Orange", "Banana", true, false];

// let fruits: Array<string>;
// fruits = ["Apple", "Orange", "Banana"];
// console.log(fruits);

// let ids: Array<number>;
// ids = [20, 100, 500, 65];
// console.log(ids);

// let values: (string | number)[] = [20, "Zafer", 5, "Merve"];
// console.log(values);

// let values2: Array<string | number> = [20, "Zafer", 5, "Merve"];
// console.log(values2[2]);

// ! Tuple
// let Id: number = 1;
// let instructorName: string = "Zafer";

// let instructor: [number, string] = [1, "Zafer"]; // ilk değer number ikinci değer string olmak zorunda

// let user: [number, string, boolean, number, string];
// user = [1, "Zafer", true, 100, "Admin"];

// let employee: [number, string][];
// employee = [
//   [1, "Zafer"],
//   [2, "Merve"],
//   [3, "Zerrin"],
// ];

// console.log(employee);

// ! Object

// type person = {
//   firstname: string;
//   lastname: string;
//   age: number;
//   jobTitle: string;
// };

// let instructor: person;

// instructor = {
//   firstname: "Zafer Günay",
//   lastname: "Önalan",
//   age: 25,
//   jobTitle: "Software Developer",
// };

// console.log(instructor.age);

// //* 2.yol

// let person2: {
//   firstname: string;
//   lastname: string;
//   age: number;
//   jobTitle: string;
// };

// person2 = {
//   firstname: "Zafer Günay",
//   lastname: "Önalan",
//   age: 25,
//   jobTitle: "Software Developer",
// };

// console.log(person2);

// !Enum

// enum Media {
//   Newspaper,
//   Newsletter,
//   Magazine,
//   Book,
// }

// console.log(Media[2]);
// console.log(Media.Magazine);

// enum PrintMedia {
//   Newspaper = "NEWSPAPER",
//   Newsletter = "NEWSLETTER",
//   Magazine = "MAGAZİNE",
//   Book = "BOOK",
// }

// console.log(PrintMedia.Newsletter);
// console.log(PrintMedia["Newspaper"]);

// ! Union
// Hem string hem number hemde boolean değer alabilmemizi sağladı
// let code: string | number | boolean;
// code = 123;
// console.log(code);

// ! Any
// Any her değeri almasını sağlar

// let someThing: ant = "Hello";
// someThing = 1234;
// someThing = false;
// someThing = {
//   firstName: "Zafer Günay",
//   lastName: "Önalan",
// };
// console.log(someThing);

// let arr: any[] = ["Jhon", 123, true];
// console.log(arr);
