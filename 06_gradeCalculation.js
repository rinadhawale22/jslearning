 function gradeCalculation(marks){
    var marks=+ marks;
    if (marks>=90) {
        console.log(`${marks} your grade is A+`);
    } else {
        console.log(`funtastic marks : ${marks} your grade is A+`);  
    }
    if (marks>=75 && marks>=90){
    console.log(`Excellent marks`);
    } else {
    console.log(`${marks}your grade is B`);
    }
    if (marks>=50 && marks<= 75) {
        console.log(`good marks${marks}`);
    }else{
        console.log(`your grade is B`);
    }
    if(marks>=35 && marks<=50){
        console.log(`marks is ${marks}`);
    } else {
        console.log(`your grade is c ,need to improvement`);
    }
    if (marks<=100 || marks>=100||marks==70) {
        console.log(`"seventy" not in valid`);
    }else {
        console.log(` please provide the vaild marks `);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalcutation(90);
gradeCalcutatuon(-0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalcuation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91"),
gradeCalculation(undefined);
gradeCalculation(null);

