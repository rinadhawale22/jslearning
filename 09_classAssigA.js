class vehicles{
    constructor(model,Name,color,engine,company){
        this.model=model;
        this.Name=Name;
        this.color=color;
        this.engine=engine;
        this.company=company;
    }
    show(){
        console.log(`vehicles Detail model: ${this.model},name:${this.Name},color:${this.color},engine:${this.engine},company:${this.company}`);
    }
}
let VehiclesCar1=new vehicles("car","2023","blue","oody engine","oody");
let VehiclesBlue2=new vehicles("car","2023","blue","oody engine","company");
let vehiclesModel3=new vehicles("car","2023","blue","oody engine","company");
let vehiclesEngine4=new vehicles("car","2023","blue","oody engine","company");
let vehiclesCompany5=new vehicles("car","2023","blue","oody engine","company");

let array=[VehiclesCar1,VehiclesBlue2,vehiclesModel3,vehiclesEngine4,vehiclesCompany5];
console.log(`travers rhe array`);
for (const vehicles of array) {
    vehicles.show();
}

class College{
    constructor(department,classroom,branch,professor){
        this.department=department;
        this.classroom=classroom;
        this.branch=branch;
        this.professor;
    }
    display(){
        console.log(`College details department: ${this.department},classroom:${this.classroom},bracnch:${this.branch},professor:${this.professor}`);
    }
}
let CollegeComputer=new College("cse","fourth year","cse","monika Madam");
let Collegefourthyear=new College("cse","four year","cse","monika Madam");
let CollegeCse=new College("cse","four year","cse","monika Madam");
let collegemonikaMadam=new College("cse","four year","cse","monika Madam");

let traversobject=function(object){
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            console.log(`${key}:- ${element}`);
        }
    }
}
traversobject(CollegeComputer);
traversobject(CollegeCse);
traversobject(Collegefourthyear);
traversobject(collegemonikaMadam);

