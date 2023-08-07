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

let sbiBank={
    bankName:"SBI Bank",
    location:"Pune",
    accountNo:"12334546",
    IFSC:"SBINO005678",
    InterestRate:"3.00%-7.10%p.a",
    showDetails:function () {
       console.log(`The Bank Details :${this.bankName},${this.location},${this.accountNo},${this.IFSC},${this.InterestRate}`);
    }
}
let axisBank={
bankName:"AXIS Bank",
location:"Mumbai",
accountNo:"3429495859",
IFSC:"AXISNO0065743",
InterestRate:"3%-3.5%p.a",
showDetails:function () {
   console.log(`The Bank Details :${this.bankName},${this.location},${this.accountNo},${this.IFSC},${this.InterestRate}`);
}







