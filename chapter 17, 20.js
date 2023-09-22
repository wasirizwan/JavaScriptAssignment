// !Question1
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// ?Question2
var arr = [
    [1+" "+2+" "+3],
    [4+" "+5+" "+6],
    [7+" "+8+" "+9]
];

for(var i = 0; i < arr.length; i++){
    document.write(arr[i]+ "<br>");
}

// !Question3
var Arr = [1,2,3,4,5,6,7,8,9,10]

for(var j = 0; j < Arr.length; j++){
     document.write(Arr[j]+ "<br>");
}

// !Question5
var fruits = ["Apple","Banana","Mango","Strawberry","Naspati"];

for(var k = 0; k < fruits.length; k++){
     document.write(fruits[k]+ "<br>");
}
document.write("<br>");
for(var k = 0; k <fruits.length ; k++){
    document.write("Element at index " + fruits.indexOf(fruits[k]) + " is " + fruits[k] + "<br>");
}
// ?Question7
var bakery = ["Cookie", "Cake", "Apple pie", "Chips", "Patties"];
var user = prompt("Welocome ABC bakery. What do you want to order?");

if(user == bakery.length){
    document.write(user + " is available at index " + bakery.indexOf + " in our bakery.");
}else{
    document.write("We are sorry. " + user + " is not available in our bakery.")
}

// !Question10
var table = 5;

for(var i = 1; i <= 20; i++){
    document.write(table * i + ",");
}
document.write("<br>");
// ?Question9

var smallest = [24,53,78,91,12]

var smallestNumber = Math.min.apply(null, smallest);
document.write("Smallest number in this array is " + smallestNumber + "<br>");

// !Question8
var largest = [24,53,78,91,12]

var largestNumber = Math.max.apply(null, largest);
document.write("Largest number in this array is " + largestNumber + "<br>");


// ?Question4
var userTable = prompt("Enter a number to show its multiplication table");
var lengthOfTable = prompt("Enter lenght of the table");

for(t = 1; t <= lengthOfTable; t++){
    document.write(userTable + " x "+ t + " = " + userTable * t + "<br>");
}