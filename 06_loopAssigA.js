function vowelCount(str){
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("i am very good IT developer");

console.log(`--------------------------------`);
let i=1
while (i==5) {
    console.log(`cube of first 5 number `);
    i=1*1*1+2*2*2+3*3*3+4*4*4+5*5*5;
}

function reversestring(str){
    let char = str.charAt(0);
    for (let index = 0; index < str.length-1; index++) {
        char=str.charAt(index);
        console.log('reveres the complete string');
    }
    console.log(`ignore the spaces`);
}
reversestring("hard work always pay back");
reversestring("soon i will be angular IT champ");

function oddPostionChars(){
    let char=0;
    if (char==1 || char !=' ') {
        console.log(`odd positioned char is :${char}`);
    }else{
        console.log(`do not consider empty spaces`);
    }
}
oddPostionChars("hard work always pays back");
oddPostionChars("soon i will be angular IT champ ");