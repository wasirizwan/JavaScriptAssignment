// todoQuestion#1
// function power(a, b) {
//     let result = 1;
   
//     for (let i = 0; i < b; i++) {
//        result *= a;
//     }
   
//     return result;
//    }

// document.write(power(2,5));

// todoQuestion#2
// function isLeapYear(year) {
//     if (year % 4 !== 0) {
//        return false;
//     } else if (year % 100 !== 0) {
//        return true;
//     } else if (year % 400 !== 0) {
//        return false;
//     } else {
//        return true;
//     }
//     }

//     document.write(isLeapYear(2022));

// todoQuestion#3
function main(marks) {
    let avg = average(marks);
    let perc = percentage(avg);
    
    document.write("Average Marks: " + avg);
    document.write("Percentage: " + perc + "%");
    }
    
    function average(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
       sum += marks[i];
    }
    return sum / marks.length;
    }
    
    function percentage(avg) {
    return (avg / 500) * 100;
    }
    
    let marks = [345, 400, 380];
    main(marks);

//  todoQuestion#6
function deleteVowels(sentence) {
   let vowels = ['a', 'e', 'i', 'o', 'u'];
   let newSentence = sentence.split('').filter(char => {
       if (char.match(/[A-Za-z]/)) {
           return !vowels.includes(char.toLowerCase());
       }
       return true;
   }).join('');
   return newSentence;
}

document.write(deleteVowels("Hello, world!"));

// todoQuestion#5
function customIndexOf(inputString, targetCharacter) {
   // iterate over each character in the input string
   for (let i = 0; i < inputString.length; i++) {
      // if the current character matches the target character, return its index
      if (inputString[i] === targetCharacter) {
        return i;
      }
   }
   // if the target character is not found in the input string, return -1
   return -1;
  }
  
  document.write(customIndexOf("hello world", "l")); 
  document.write(customIndexOf("hello world", "x")); 

// todoQuestion#7
function countVowelOccurrences(str) {
   var count = 0;
   var vowels = ['a', 'e', 'i', 'o', 'u'];

   for (var i = 0; i < str.length - 1; i++) {
       var currentVowel = str[i];
       var nextVowel = str[i + 1];

       if (vowels.includes(currentVowel) && vowels.includes(nextVowel)) {
           switch (currentVowel + nextVowel) {
               case 'aa':
               case 'ee':
               case 'ii':
               case 'oo':
               case 'uu':
                   count++;
                   break;
               case 'ai':
               case 'au':
               case 'ei':
               case 'eu':
               case 'ia':
               case 'ie':
               case 'io':
               case 'iu':
               case 'oi':
               case 'ou':
               case 'ui':
                   count++;
                   break;
           }
       }
   }

   return count;
}

var str = "Pleases read this application and give me gratuity";
document.write(countVowelOccurrences(str)); 












