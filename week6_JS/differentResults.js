
var x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);


var y = {
    x: 9,
};
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

// The first function is just log the variable x without adding 1 
//we should console log the whole function to get the real result.
// The second function is returning the object so if we add more properties we can see them all.
// so after we console log the object we can get all the changes of his properties.



