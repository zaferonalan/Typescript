// ! Class
var Employee = /** @class */ (function () {
    function Employee(empNumber, gender, name) {
        (this.name = name), (this.empNumber = empNumber), (this.gender = gender);
    }
    return Employee;
}());
var employee = new Employee(1, "Male", "Zafer");
console.log(employee);
