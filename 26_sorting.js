const arrayNumbers=[113,45,56,11,32,45,109,799,56,45];
arrayNumbers.reverse();
console.log(arrayNumbers);

arrayNumbers.sort();
console.log(arrayNumbers);

arrayNumbers.sort((n1,n2)=>{
return  n1>n2 ? 1:-1;
});
console.log(arrayNumbers);

arrayNumbers.sort((n1,n2)=>{
return n1<n2?1:-1;
});
console.log(arrayNumbers);

arrayNumbers.pop();
console.log(arrayNumbers);

