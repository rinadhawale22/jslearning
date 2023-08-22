class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
    this.emp_id=emp_id;
    this.emp_name=emp_name;
    this.emp_dept=emp_dept;
    this.emp_salary=emp_salary;
    this.emp_company=emp_company;
    }

}
const emp_anil=new Employee(22,"anil","IT",500000,"TCS");
const emp_radha=new Employee(33,"radha","HR",74000,"wipor");
const emp_rishi=new Employee(55,"rishi","finance",47000,"TCS");
const emp_sonali=new Employee(66,"sonali",45000,"TCS");
const emp_monika=new Employee(77,"monika","IT",40000,"wipro");
const emp_viny=new Employee(88,"vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"mahesh","HR",85000,"infy");


console.log(`emp_name :${anil},emp_name:${rishi},emp_name${vinayak}`);
console.log(`emp_company${TCS}`);

console.log(`emp_name:${rishi},emp_name:${sunil}`);
console.log(`emp_department:${finance}`);

console.log(`emp_name:${radha},emp_name:${rishi}`);
console.log(`emp_name:${mahi},emp_salary:${85000}`);
console.log(`emp_salary greater than 500000 , emp_department :${IT}`);
console.log(`emp_name:${sonil,mahi},emp_company:${infy}`);