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
// class Circle {
//   static pi: number = 3.14;
//   pi: number = 3;
//   /**
//    *
//    */
//   constructor() {
//     this.pi++; // 3'ten 4 oldu
//     Circle.pi++; //3.14'ten 4.14 oldu
//   }
//   static hesapla(yaricap: number) {
//     return this.pi * yaricap * yaricap;
//   }
// }
// let objem = new Circle();
// let objem2 = new Circle(); // 2. kere çağırdığımızda statik olan pi artarken diğeri artmıyor
// let objem3 = new Circle();
// console.log(objem.pi); // 3
// console.log(Circle.pi); // 3.14
// ! Abstract Class
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();
