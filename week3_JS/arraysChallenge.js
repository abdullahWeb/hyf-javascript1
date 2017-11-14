
// >> 2.6 + 2.7
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("Mauro's");
console.log(favoriteAnimals);
// >> 2.8
favoriteAnimals.splice(1, 0, "meerkat");
// 2.9
console.log("I used splice function to add a new string or something to my array")
// the first parameter is the place where i want to put my new string in which index.
// the second parameter is optional, the number of items to be removed. If set to 0, no items will be removed
// the third parameter is the string which i want to add.

// >> 2.10
console.log(favoriteAnimals);

// >> 2.11
let myArrayLength = favoriteAnimals.length;
console.log("the array has a length of:", myArrayLength);

// >> 2.12
favoriteAnimals.splice(3, 1);
// >> 2.13
console.log(favoriteAnimals);
// >> 2.14
var i = favoriteAnimals.indexOf("meerkat");
if (i) {
    favoriteAnimals.splice(i, 1);
}
console.log(favoriteAnimals);
// >> 2.15
console.log("The item you are looking for is at index:", i);
