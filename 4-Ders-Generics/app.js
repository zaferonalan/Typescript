// function getRandomNumber(items: number[]): number {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }
// let numbers = [1, 54, 65, 7, 8];
// console.log(getRandomNumber(numbers));
// function getRandomString(items: string[]): string {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }
// let strings = ["Zafer", "Merve", "Zerrin"];
// console.log(getRandomString(strings));
// ? any kullanımı önerilmemktedir
// function getRandomElement(items: any[]): any {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }
// console.log(getRandomElement(strings));
// console.log(getRandomElement(numbers));
// ? Generik Kullanılmalı
// function getRandomElementGeneric<T>(items: T[]): T {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }
// let degiskenlerim = [true, false, true];
// console.log(getRandomElementGeneric<number>(numbers));
// console.log(getRandomElementGeneric<string>(strings));
// console.log(getRandomElementGeneric<boolean>(degiskenlerim));
// ! Generic Constraints
// function merge<U extends object, V extends object>(obj1: U, obj2: V) {
//   return {
//     ...obj1,
//     ...obj2,
//   };
// }
// let person = merge(
//   { name: "Zafer" },
//   { age: 25 }
// 25 burada hata vermesi için extends object vererek kısıtladık.
// );
// console.log(person);
// ! Generic Interface
// interface Months<U, V> {
//   key: U;
//   value: V;
// }
// let month: Months<number, string> = {
//   key: 1,
//   value: "January",
// };
// console.log(month);
// ?------------
// interface Collection<T> {
//   add(o: T): void;
//   remove(o: T): void;
// }
// class List<T> implements Collection<T> {
//   private items: T[] = [];
//   add(o: T): void {
//     this.items.push(o);
//     console.log(this.items);
//   }
//   remove(o: T): void {
//     let index = this.items.indexOf(o);
//     if (index > -1) {
//       this.items.splice(index, 1);
//     }
//   }
// }
// let list = new List<number>();
// for (let i = 0; i < 10; i++) {
//   list.add(i);
// }
// ! Generic Class
