 var square = function (num1,num2,num3,num4,num5,num6,num7){
    var result=num1*num1*num2*num2*num3*num3*num4*num4*num5*num5*num6*num6*num7*num7;
    console.log(`square is : ${result}`);
    console.log(typeof variableName);
 }
square(5,6,25,100,67,89,59);

var area = function area (length,width){
    var length=499;
    var width=917;
    var result=length * width;
    console.log(`area of rectrangle plot is : ${result}`);
}
area(499,917);

function swap(arg1,arg2){
    console.log('inside swap function');
    console.log('Before swap ==> arg2',arg2,'agr1:',arg1);
    var temp = arg1;
    agr1= arg2;
    arg2= temp;
console.log('After swap is ==> arg2',arg2 ,'agr1:',arg2);
}
var arg1=1000;
var arg2=2000;
swap(arg1,arg2);

function swapValues(){
}
swapValues("mahi");
swapValues("raina");
swapValues(55);
swapValues(77);

var str="js is the most popular language of internet";
var charAt=str.greetcharAt ;
console.log(` character of sring is :- ${charAt} character of the string is :- ${charAt}`);

var ind =6;
var charAt0= charAt;
console.log(` char at 6th index is :-${ind}`);

var ind=11
var charAt0= charAt;
console.log(` char at 11th of index is :- ${ind}`);

var greet="js the most popular language in the internet";
var lengthGreet = greet.length;
var charAtLastIndex = greet.charAt(lengthGreet-1);
console.log(`Last char is ${charAtLastIndex} of the index is ${lengthGreet}` );

var charAtFirstIndex = greet.charAt(0);
console.log(`First character in the given string is :-${charAtFirstIndex}`);

var charAtThirdIndex = greet.charAt(0);
console.log(`Third character in the given string is:- ${charAtThirdIndex}`);

var num=words;
var words=num*num;
console.log(`calculate square of the :-${num}total number of in given string is :-${words}`);
