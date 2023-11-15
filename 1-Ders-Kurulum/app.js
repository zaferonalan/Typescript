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
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 0] = "Newspaper";
    Media[Media["Newsletter"] = 1] = "Newsletter";
    Media[Media["Magazine"] = 2] = "Magazine";
    Media[Media["Book"] = 3] = "Book";
})(Media || (Media = {}));
console.log(Media[2]);
console.log(Media.Magazine);
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZ\u0130NE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia.Newsletter);
console.log(PrintMedia["Newspaper"]);
