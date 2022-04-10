// Write your solution in this file!

let employee = {
  name: 'mayce',
  streetAddress: 'sokak',
}
employee.name = 'murt'
console.log(employee)

function updateEmployeeWithKeyAndValue(Object, key, value) {
  return {
    ...Object,
     [key] : value
    }
}
let secondEmployee = updateEmployeeWithKeyAndValue(employee, 'city', 'istanbul');
console.log(secondEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
  object[key]= value;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'murt')
console.log(employee);

let newAarray;
function destructivelyDeleteFromEmployeeByKey(object, key) {
   newAarray = {...object};
    return delete newAarray[key]
}
destructivelyDeleteFromEmployeeByKey(employee, 'name')
console.log(newAarray);

function deleteFromEmployeeByKey(object, key) {
 delete object[key];
}
deleteFromEmployeeByKey(employee, 'name')
console.log(employee);
