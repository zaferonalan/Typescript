// ! Class
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Zafer Günay",
    lastName: "Önalan",
};
console.log(getFullName(person));
