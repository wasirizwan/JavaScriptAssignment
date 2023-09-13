// !Question6
var hour = 19;

if(hour < 18){
document.write("Good day");
}else{
    document.write("Good evening");
}
document.write("<br>" + "<hr>");
// ?Question5
var password1 = 12345;
var password2 = "WasiRizwan";

var input1 = +prompt("Please enter your password");
var input2 = prompt("Please enter your password");

if(password1 === input1 && password2 === input2){
    document.write("Correct!");
}else{
    document.write("Incorrect password");
}
document.write("<br>" + "<hr>");
// ?Question3
var userInput = +prompt("Type any number");

if(userInput % 2 == 0){
    document.write("This is a positive number");
}else if((userInput % 2 !== 0)){
    document.write("This is a negative number");
}
document.write("<br>" + "<hr>");
// !Question4

var alpha = prompt("Put any favorite alphabet");
var vowel = ["A","E","I","O","U","a","e","i","o","u"]
if(alpha == vowel.length){
    document.write(true);
}else{
    document.write(false);
}
document.write("<br>" + "<hr>");
// !Question7

var time = prompt("Type any time");

if(time >= 0o00 && time < 1200){
document.write("Good morning!");
} else if (time >= 1200 && time < 1700){
    document.write("Good afternoon!");
}else if (time >= 1700 && time <2100){
    document.write("Good evening!");
}else if (time >= 2100 && time < 2359){
    document.write("Good night!");
}else {
    document.write("Type a correct time!");
}
