// ! Class
var Person = /** @class */ (function () {
    /**
     *
     */
    function Person(_id, _firsName, _lastName) {
        this.id = _id;
        this.firstName = _firsName;
        this.lastName = _lastName;
    }
    Person.prototype.getFullname = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var kisibilgi = new Person(20, "Zafer", "Önalan");
console.log(kisibilgi);
console.log(kisibilgi.getFullname());
