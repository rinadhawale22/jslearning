let employee=`{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["dev","DBA"],
    "age":23,
    "doj":11-12-2019,
    "married":fales,
    "address":{
        "street":"32,laham.ST",
        "city":"Innsbrauck",
        "country":"austria",
        "year":2019
    },
    "referred-by":"E0012"
}`

const jsonFormat=JSON.stringify(employee);
console.log(jsonFormat); 

console.log(`join year of employee:${employeeAddress}`);
const employeeAddress=employee.address.year;
employeeAddress=push(2019);

