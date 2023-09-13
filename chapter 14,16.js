// ?Question1
var myArray = [];
document.write(myArray + "<br>" + "<hr>");

// !Question2
var futureStudents = [{}];
document.write(futureStudents + "<br>" + "<hr>");

// ?Question3
var cars = ["BMW" , "Audi" , "Tesla" , "marcedes" ];
document.write(cars + "<br>" + "<hr>");

// !Question4
var digits = [1,2,3,4,5];
document.write(digits + "<br>" + "<hr>");

// ?Question5
var boolean = [true,false];
document.write(boolean + "<br>" + "<hr>");

// !Question6
var mix = [true, "BMW", 1, false, "Tesla", 2];
document.write(mix + "<br>" + "<hr>");

// ?Question7
var educationQualificationInPakistan = ["1) SSC"+"<br>"+ "2) HSC" + "<br>" +"3) BSC" + "<br>" + "4) BS "+ "<br>" + "5) B.COM"+ "<br>" + "6) MS"+ "<br>" + "7) M.PHIL" + "<br>" + "8) PHD <br>"];

document.write("<h1>Qualification</h1>");
for(var q = 0; q<educationQualificationInPakistan.length; q++){
    document.write(educationQualificationInPakistan[q]+ "<br>" + "<hr>");
}
// !Question8
var studentName = ["Taha", "Ali", "Zain"];
var score = [320, 230, 480];

for(var i=0; i<studentName.length; i++){
    document.write("Score of "+ studentName[i]+" "+ "is " + score[i] +". Percentage:" +" "+ (( score[i]/500) *100+ "%"+"<br>"));
}
document.write("<br>" + "<hr>");
// ?Question10
var Scores = [129,330,150,100,500];
document.write("Scores of students: "+ Scores + "<br>");

Scores.sort()
document.write("Ordered scores of students: "+ Scores + "<br>" + "<hr>");
    
// !Question11
var citiesList = ["Karachi", "Islamabad", "Hydrabad", "Peshawar", "Sakkhar"];
document.write("<h3>Cities list:</h3>"+citiesList+"<br>");

var selectedCities = citiesList.slice(1,4)
document.write("<h3>Selected cities list:</h3>"+ selectedCities + "<br>" + "<hr>");

// ?Question12
var arr = ["This", "is", "my", "cat."];
document.write("<h3>Array</h3>" + arr + "<br>" );

var string = arr.join(" ")
document.write("<h3>String</h3>" + string + "<br><hr>");
