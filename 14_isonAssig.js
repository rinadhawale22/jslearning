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
const employeeAddress=employee.Address.year;
employeeAddress=employee.push(2019);
console.log(employeeAddress);

// console.log(jsonString);

//const employeeObj = JSON.parse(jsonDetails);

// Log role as 'DEV'
//console.log("Role:", employeeObj.role[0].toUpperCase());

// Extract last name and log it
//const fullNameParts = employeeObj.name.split(" ");
//const lastName = fullNameParts[1];
//console.log("Last Name:", lastName);

// Extract and log joining year
//const dojParts = employeeObj.doj.split("-");
//const joiningYear = dojParts[2];
//console.log("Joining Year", joiningYear);