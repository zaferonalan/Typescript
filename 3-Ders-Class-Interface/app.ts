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

class Person {
  id: number;
  firstName: string;
  lastName: string;

  /**
   *
   */
  constructor(_id: number, _firstName: string, _lastName: string) {
    this.id = _id;
    this.firstName = _firstName;
    this.lastName = _lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let deneme = new Person(20, "Zafer", "Önalan");
console.log(deneme);
console.log(deneme.getFullName());

class Employee extends Person {
  /**
   *
   */
  constructor(id: number, firstName: string, lastName: string) {
    super(id, firstName, lastName);
  }
}

let employee = new Employee(25, "Merve", "Önalan");
console.log(employee.getFullName());
