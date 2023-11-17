// ! Class
// class Person {
//   id: number;
//   firstName: string;
//   lastName: string;
//   /**
//    *
//    */
//   constructor(_id: number, _firsName: string, _lastName: string) {
//     this.id = _id;
//     this.firstName = _firsName;
//     this.lastName = _lastName;
//   }
//   getFullname() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// let kisibilgi = new Person(20, "Zafer", "Önalan");
// console.log(kisibilgi);
// console.log(kisibilgi.getFullname());
// ! Public,Privite,Protected
// ? Public default olarak geliyor. Her yerden erişimi var.
// ? Protected ise erişimi sadece oluşturlan classı türetildiği yerde erişimi var.
// ? Private ise erişi hiç bir yerden yok
// ? Readonly = sadece okuma yapar. Yani değeri değiştiremene izin vermez.
// ! inheritance
// class Person {
//   id: number;
//   firstName: string;
//   lastName: string;
//   /**
//    *
//    */
//   constructor(_id: number, _firstName: string, _lastName: string) {
//     this.id = _id;
//     this.firstName = _firstName;
//     this.lastName = _lastName;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// let personal = new Person(20, "Zafer", "Önalan");
// console.log(personal);
// console.log(personal.getFullName());
// class Employee extends Person {
//   /**
//    *
//    */
//   constructor(id: number, firstName: string, lastName: string) {
//     super(id, firstName, lastName);
//   }
// }
// let employee = new Employee(25, "Merve", "Önalan");
// console.log(employee.getFullName());
// !Static method
var Circle = /** @class */ (function () {
    /**
     *
     */
    function Circle() {
        this.pi = 3;
        this.pi++; // 3'ten 4 oldu
        Circle.pi++; //3.14'ten 4.14 oldu
    }
    Circle.hesapla = function (yaricap) {
        return this.pi * yaricap * yaricap;
    };
    Circle.pi = 3.14;
    return Circle;
}());
var objem = new Circle();
var objem2 = new Circle(); // 2. kere çağırdığımızda statik olan pi artarken diğeri artmıyor
var objem3 = new Circle();
console.log(objem.pi); // 3
console.log(Circle.pi); // 3.14
