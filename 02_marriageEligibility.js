var marriageeligiblity = function (gender,age){
    if (gender="male" && age>=21) {
        console.log(`congratulation are eligible for marriage`);
    }else{
        if (gender="female" && age>=18) {
            console.log(`congratulation you are eligible for marriage`);
        }else{
            if (age>18 && age>=21) {
                console.log(`you are not eligible for marriage`);
            }else{
                if (gender!="male"|| gender !="female"||isNaN(age)|| age<=0) {
                    console.log(`sorry you are entering invaild information`);
                }
            }
        }
    }
}
marriageeligiblity("male",17);
marriageeligiblity("male",25);
marriageeligiblity("female",28);
marriageeligiblity("other",35);
marriageeligiblity("other",41);
marriageeligiblity(undefined);
marriageeligiblity(null);