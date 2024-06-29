// Write your solution in this file!
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee; // return the mutated object
}
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee; // return the mutated object
}

console.log(updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Smith'));
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Oak Ave'));
console.log(deleteFromEmployeeByKey(employee, 'name'));
console.log(destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress'));