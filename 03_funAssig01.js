function personalDetails(value){
    console.log('values is',value);
    console.log('type is :',typeof value);
    console.log('--------------------');
}
personalDetails("firstName");
personalDetails("lastName");
personalDetails("collegeName");

function swapA(arg1,arg2,arg3){
    console.log('inside swaping function');
    console.log('Before swap ==> arg2','arg1:',arg1,'arg2:',arg2,'arg3:',arg3);
    var temp=arg1;
    arg1=arg2;
    arg3=temp;
    console.log('After swap ==> arg2','arg1:',arg1,'arg2:',arg2,'arg3:',arg3);
}
var arg1="firstName";
var arg2="last Name";
var arg3="collegeName";
swapA(arg1,arg2,arg3);

function bankDetails(arg1,agr2,arg3,arg4){
    console.log("CITI Bank",3456782345,'Pune',431202);
    console.log("AXIS Bank",7856782345,'Mumbai',441202);
    console.log("HDFC Bank",8956782345,'Pune',631202,"open");
}
var arg1="bankName";
var arg2="accountNum";
var arg3="location";
var arg4="pinCode";
bankDetails(arg1,arg2,arg3,arg4)

