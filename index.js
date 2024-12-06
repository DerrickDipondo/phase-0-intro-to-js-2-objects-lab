const employee = {
    name: "Dipondo",
    streetAddress: 56196,
}
//takes three arguments but does not mutate the employee
function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {

    // create a copy of the employee object
    const newObjectUpdate = { ...employee};

    newObjectUpdate[name] = streetAddress;

    return newObjectUpdate;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = streetAddress;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {

    const newObjectUpdate = { ...employee};
    delete newObjectUpdate[key];

    return newObjectUpdate;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;



}
