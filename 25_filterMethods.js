const arrayNumber=[20,11,40,,25,37,49,9,90,60,2,19];
const newarray=arrayNumber.filter((currentValue)=>{
   return currentValue>50;
})
console.log(newarray);

const newarray1=arrayNumber.filter((currentValue)=>{
    return currentValue%2==0;
})
console.log(newarray1);

const newarray2=arrayNumber.filter((currentValue)=>{
    return currentValue==11;
})
console.log(newarray2);

const newarray3=arrayNumber.filter((currentValue)=>{
    return currentValue==20,50;
})
console.log(newarray3);

const newarray4=arrayNumber.filter((currentValue)=>{
   return currentValue*5;
})
console.log(newarray4);