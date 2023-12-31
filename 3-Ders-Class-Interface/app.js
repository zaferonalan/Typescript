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
// abstract class Department {
//   constructor(public name: string) {}
//   printName(): void {
//     console.log("Department name: " + this.name);
//   }
//   abstract printMeeting(): void;
// }
// class AccountingDepartment extends Department {
//   constructor() {
//     super("Accounting and Auditing");
//   }
//   printMeeting(): void {
//     console.log("The Accounting Department meets each Monday at 10am.");
//   }
//   generateReports(): void {
//     console.log("Generating accounting reports...");
//   }
// }
// let department = new AccountingDepartment();
// department.printName();
// department.printMeeting();
// department.generateReports();
// !interface
// interface Person {
//   readonly firstName: string; // readonly değeri bir kere atadıktan sonra değiştiremiyorum
//   middleName?: string; // Olabilir olmaya da bilir. Bunun için ? kullanılır.
//   lastName: string;
// }
// function getFullName(person: Person) {
//   if (person.middleName) {
//     return `${person.firstName} ${person.middleName} ${person.lastName}`;
//   }
//   return `${person.firstName} ${person.lastName}`;
// }
// let person: Person = {
//   firstName: "Zafer",
//   middleName: "Günay",
//   lastName: "Önalan",
// };
// person.firstName = "Zaferrrrr"; // readonly olduğu için değer değişmedi.
// console.log(getFullName(person));
// ! İnterface function Type
// interface StringFormat {
//   (str: string, isUpper: boolean);
// }
// let format: StringFormat;
// format = function (str: string, isUpper: boolean) {
//   return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
// };
// console.log(format("Zafer Önalan", false));
// ! interface Extende etme
// interface IPerson {
//   name: string;
//   gender: string;
// }
// interface IEmployee extends IPerson {
//   empNumber: number;
// }
// interface IWorker extends IPerson {
//   empDepartment: number;
// }
// let employee: IEmployee = {
//   empNumber: 1,
//   gender: "Male",
//   name: "Zafer",
// };
// console.log(employee);
// ! Class'a interface implemente etme
// ? Çok fazla terih edilmiyor interface olayı daha kullanışlı
// interface IPerson {
//   name: string;
//   gender: string;
// }
// class Employee implements IPerson {
//   name: string;
//   gender: string;
//   empNumber: number;
//   constructor(empNumber: number, gender: string, name: string) {
//     (this.name = name), (this.empNumber = empNumber), (this.gender = gender);
//   }
// }
// let employee = new Employee(1, "Male", "Zafer");
// console.log(employee);
// ! Type intersection
// interface BusinessPartner {
//   name: string;
//   credit: number;
// }
// interface Identity {
//   name: string;
//   id: number;
// }
// interface Contact {
//   email: string;
//   phone: string;
// }
// type Employee = Identity & Contact;
// let kisim: Employee = {
//   id: 1,
//   name: "Zafer Önalan",
//   email: "asdasdasd@hotmail.com",
//   phone: "123456",
// };
// console.log(kisim);
// type Custumer = BusinessPartner & Contact;
// let musterim: Custumer = {
//   name: "Zafer Önalan",
//   credit: 123,
//   email: "asdasd@gmail.com",
//   phone: "456123",
// };
// console.log(musterim);
// ! Type Guard
// type tip = number | string;
// function add(a: tip, b: tip) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }
//   if (typeof a === "string" && typeof b === "string") {
//     return a.concat(b);
//   }
//   throw new Error("Lütfen doğru formatta data gönderin");
// }
// console.log(add(5, 6));
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isCreditAllowed = function () {
        //...
        return true;
    };
    return Customer;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        //...
        return true;
    };
    return Supplier;
}());
function signContract(partner) {
    var message;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed()
            ? "Sign a new contract with the customer "
            : "Credit issue";
    }
    if (partner instanceof Supplier) {
        message = partner.isInShortList()
            ? "Sign a new contract the Supplier "
            : "Need to evaluate further";
    }
    return message;
}
