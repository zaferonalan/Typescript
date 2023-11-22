// function getRandomNumber(items: number[]): number {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var person = merge({ name: "Zafer" }, { age: 25 }
// 25 burada hata vermesi için extends object vererek kısıtladık.
);
