class personalDetails{
    constructor(name, area,city,mobileno,age){
        this.name=name;
        this.area=area;
        this.city=city;
        this.mobileno=mobileno;
        this.age=age;
    }
    show(){
        console.log(`personal details name: ${this.name},address:${this.area},city:${this.city},mobile:${this.mobileno},age${this.age}`);
    }
}
let personalDetailsriya=new personalDetails("riya","samarth colony","amravati","909088248",22);
let personalDetailsSamarthcolony=new personalDetails("riya","samarth colony","amravati","909088248",22);
let personalDetailsAmravati=new personalDetails("riya","samarth colony","amravati","909088248",22);
let personalDetails909088248=new personalDetails("riya","samarth colony","amravati","909088248",22);
let personalDetails22=new personalDetails("riya","samarth colony","amravati","909088248",22);

class collegeDetails{
    constructor(subject,department,branch,year){
        this.subject=subject;
        this.department=department;
        this.branch=branch;
        this.year=year;
    }
    show(){
        console.log(`college details subject:${this.subject}, department:${this.department},branch:${this.branch},year:${this.year}`);
    }
}
let collegeDetailscloudComputing=new collegeDetails("cloud computing","computer science","cse",2023,"fourth year");
let collegeDetailscomputerscience=new collegeDetails("cloud computing","computer science","cse",2023,"fourth year");
let collegeDetailscse=new collegeDetails("cloud computing","computer science","cse",2023,"fourth year");
let collegeDetails2023=new collegeDetails("cloud computing","computer science","cse",2023,"fourth year");

let array=[collegeDetailscloudComputing,collegeDetails2023,collegeDetailscomputerscience,collegeDetailscse]
console.log(`personal details name: ${this.name},address:${this.area},city:${this.city},mobile:${this.mobileno},age${this.age}`);
console.log(`college details subject:${this.subject}, department:${this.department},branch:${this.branch},year:${this.year}`);
let array2=["riya","hansisne","vashnavi","chinumayi"];

Object(array);

for (const array2 of array) {
    console.log(array2);
}

let str="codemind technology";
let reverseWordArr=str.split("").reverse().join("");