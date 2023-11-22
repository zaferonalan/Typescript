function getRandomNumber(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers = [1, 54, 65, 7, 8];
// console.log(getRandomNumber(numbers));

function getRandomString(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let strings = ["Zafer", "Merve", "Zerrin"];
// console.log(getRandomString(strings));

// ? any kullanımı önerilmemktedir
function getRandomElement(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
// console.log(getRandomElement(strings));
// console.log(getRandomElement(numbers));

// ? Generik Kullanılmalı
function getRandomElementGeneric<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let degiskenlerim = [true, false, true];

console.log(getRandomElementGeneric<number>(numbers));
console.log(getRandomElementGeneric<string>(strings));
console.log(getRandomElementGeneric<boolean>(degiskenlerim));
