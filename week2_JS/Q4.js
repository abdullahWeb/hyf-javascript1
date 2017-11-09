const vehicleType = function (color, type){

if (type == 1){

 var firstResult = console.log(`a ${color} car`);   
 return firstResult;
}

else if (type == 2){

 var secondResult = console.log(`a ${color} motorbike`);   
 return secondResult;
}

}

console.log(vehicleType('blue', 1));