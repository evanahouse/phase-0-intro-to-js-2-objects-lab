const employee = {
    name : 'Jane Doe',
    streetAddress : '123 Main Street'
};


function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {['streetAddress']: '11 Broadway' });
}
    


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}