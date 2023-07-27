var checkTcs=function(gradScore,hscScore,sscScore,candidateName){
    var result=gradScore>=hscScore>=sscScore>=candidateName;
    console.log(`given greater is :${result}`);
    console.log(` congrates you are eligible for Tcs interview `);
    console.log(`you are not eligile for Tcs interview`);
}
var gradScore=70;
var hscScore=80;
var sscScore=90;
var candidateName="salony rathi";
checkTcs(gradScore,hscScore,sscScore ,candidateName);
checkTcs(80,86,90,"your name");
checkTcs(70,65,55,"your frd name");
checkTcs(60,79,88,"your other frd name");

var interviewEligibility = function(gradScore, hscScore, sscScore, candidateName ){
    var result = gradScore>=70 || hscScore>= 80 || sscScore >=90 
     ? `Congrats ${candidateName} you are eligible for TCS interview.`
     :  `Unfortunately you are not eligible for interview`;
     console.log(result);
 }
 
 interviewEligibility(80, 86, 90, 'Mahi');
 interviewEligibility(70, 65, 55, 'Gill');
 interviewEligibility(60, 79, 88, 'Stew');