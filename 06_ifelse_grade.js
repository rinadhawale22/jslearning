var voteEligible = function(ages){
    var ages = + ages
    if (ages==0||(ages)) {
    console.log(`your ${ages} is invaild: 130`);
    } else {
    console.log(`your${ages} is vaild`);
    }
    if (ages<=18) {
       console.log(`${ages}not eligible for vote `); 
    } else{
        console.log(`${ages} egigible for vote`);
    }
    if (ages>=18) {
        console.log(`${ages}eligible for vote`);
    }else{
        console.log(`${ages} you are not eligigle for vote `);
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible("undefind");
voteEligible("null");
