// ! Class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    /**
     *
     */
    function Person(_id, _firstName, _lastName) {
        this.id = _id;
        this.firstName = _firstName;
        this.lastName = _lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var deneme = new Person(20, "Zafer", "Önalan");
console.log(deneme);
console.log(deneme.getFullName());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    /**
     *
     */
    function Employee(id, firstName, lastName) {
        return _super.call(this, id, firstName, lastName) || this;
    }
    return Employee;
}(Person));
var employee = new Employee(25, "Merve", "Önalan");
console.log(employee.getFullName());