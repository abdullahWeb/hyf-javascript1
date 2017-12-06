// repeat is Built-in Functions, it works only with the positive numbers if the number is negative it gives an error


function repeatString(str, num) {

    return str.repeat(num)
        ;
}

console.log(repeatString("abc", 2));


//// using while loop 


function repeatString(string, times) {
    var emptyString = "";
    while (times > 0) {
        emptyString += string;
        times--;
    }
    return emptyString;
}
console.log(repeatString("abc", 3));



/// using for loop 


function secondRepeatString(string2, times2) {
    var emptyString2 = "";
    for (let i = 0; i < times2; i++){


        emptyString2 += string2;
    }
    return emptyString2;
}
console.log(secondRepeatString("abc", 5));


/// using do loop


function thirdRepearString(string3, times3) {
    var emptyString3 = "";
    do {

        emptyString3 += string3;
        times3--;

    }
    
    while (times3 > 0) 
      
    return emptyString3;
    
}
console.log(thirdRepearString("abc", 8));

