function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 54, 65, 7, 8];
// console.log(getRandomNumber(numbers));
function getRandomString(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var strings = ["Zafer", "Merve", "Zerrin"];
// console.log(getRandomString(strings));
// ? any kullanımı önerilmemktedir
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// console.log(getRandomElement(strings));
// console.log(getRandomElement(numbers));
// ? Generik Kullanılmalı
function getRandomElementGeneric(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var degiskenlerim = [true, false, true];
console.log(getRandomElementGeneric(numbers));
console.log(getRandomElementGeneric(strings));
console.log(getRandomElementGeneric(degiskenlerim));
