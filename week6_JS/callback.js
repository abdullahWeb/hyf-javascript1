
var emptyArr = [];
// a function that push all the numbers which are divided by 3
function sayThree(num) {
    
    if (num % 3 === 0) {
        
        emptyArr.push(num);
    }

}

// a function that push all the numbers which are divided by 5
function sayFive(num) {

    if (num % 5 === 0) {

        emptyArr.push(num);
    }

}
//

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

    for (var index = startIndex; index <= stopIndex; index++){

        // console.log(index);
        if (index % 3 === 0) {
            
             threeCallback(index);

        }
        else if (index % 5 === 0) {

             fiveCallback(index);

        }
        else if (index % 3 === 0 && index % 5 === 0) {
            

             threeCallback(index);
            fiveCallback(index);

        }

    }
    

}
threeFive(5, 15, sayThree, sayFive);

console.log(emptyArr);
