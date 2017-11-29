
let numbers = [1, 2, 3, 4];
let result = numbers.filter(index => index % 2 !== 0);
console.log(result);

let finalResult = result.map(index => index * 2);
console.log("The numbers are:", finalResult);