let professor={
    class:"4th year",
    college:"sipna",
    subject:"computer",
    deparment:"cse",
    langauge:"english",
    degree:{
        engineering:"csc",
        PHD:"Advcomputing",
        persentage:100,
        resume:"achievement profile",
        placement :"javacript",
        getdegree : function(){
            console.log(`teacher degrees: ${this.engineering},${this.PHD},${this.persentage},${this.resume},${this.placement}`);
        }
    },
    studentCertificate:["hacker rank participation","certificate in IFE","cerfiticate in Adv programming"]
}
console.log(professor);

const degree={
    engineering:"csc",
    PHD:"Advcomputing",
    persentage:100,
    resume:"achievement profile",
    placement :"javacript",
    totalExperience:"14 years"
}
Object.freeze(degree);
degree.persentage=100;
console.log(degree);

console.log(`insert string element in the last position of array`);
studentCertificate=["hacker rank participation","certificate in IFE","cerfiticate in Adv programming"];
studentCertificate.push("oracle certificate");
console.log(studentCertificate);









