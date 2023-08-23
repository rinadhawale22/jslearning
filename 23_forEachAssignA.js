const arrayNumber=[1,7,40,502,-77,91,0,108,89,601];
console.log(`--------step1------------`);
    arrayNumber.forEach((currentValue) => {
        if (currentValue < 0)
        console.log(`index of arrayNumber is :${currentValue}`);
    });

console.log(`-----------step2--------------`);
    arrayNumber.forEach((currentValue) => {
        if (currentValue > 0)
        console.log(`positive arraynumberis :${currentValue} `);
        
    });
console.log(`-------------step3-----------------`);
const negativeNumber=[]
 arrayNumber.forEach((currentValue) => {
    if (currentValue < 0){
        negativeNumber.push(currentValue);
        console.log(`negative number in array is:${negativeNumber}`);
    }
});
console.log(`-------------step4--------------`);
arrayNumber.forEach((currentValue) => {
    if (currentValue%2==0){
        console.log(`even numbers is : ${currentValue}`);
    }
});
console.log(`----------------step5-------------`);
let sum=0;
arrayNumber.forEach((currentValue) => {
    sum+=currentValue;
    console.log(`sumof allarray numbers is :${currentValue}`);
});
console.log(`-------------------step6---------------------`);
arrayNumber.forEach((currentValue) => {
    if(currentValue==0){
        console.log(`even index array value is :${currentValue}`);
    }
});


