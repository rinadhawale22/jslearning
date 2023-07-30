var leapYear= function (year){
    var year=+year;
    if (year>=2020) {
        console.log(`2020 is a leap year`);
    }else{
        console.log(`2020 is not a leap year`)

    }
    if (year>=1999) {
        console.log(`1999 is not a leap year`);
    }else{
        console.log(`1999 is not a leap year`);
    }
    if (year>=1600) {
        console.log(`1600 is a leap year`);
    }else{
        console.log(`1600 is not a leap year`);
    }
    if (year>=2022) {
        console.log(`2022 is a leap year`);
    } else {
        console.log(`2022 is not a leap year`);
    }
    if (year>=1945) {
        console.log(`1945 is a leap year`);
    }else{
        console.log(`1945 is not a year`);
    }
    if (year>=null) {
        console.log(`null is leap year `);
    }else{
        console.log(`null is  not a leap year`);
    }
    if ("twenty twenty") {
        console.log(`twenty twenty is not aleap year`);
    }else{
        console.log(`twenty twenty is leap year`);
    }
    if (year>=undefined) {
        console.log(year>=undefined);
    }else{
        console.log(`undefined is a leap year`);
    }
    if (year>=NaN) {
        console.log(`NaN is a year`);
    }else{
        console.log(`NaN is not a year`);
    }
    if (year>=1750) {
        console.log(`1750 is a leap year`);
    }else{
        console.log(`1750 is not a leap year`);
    }
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("twenty twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);