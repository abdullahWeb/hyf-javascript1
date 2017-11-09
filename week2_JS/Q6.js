const vehicle = function(color, age, type){


if(age === 5){

if(type === 1){

    var usedCar = console.log(`a ${color} Used car`);
return usedCar;
}
else if(type === 2){
 
    var usedMotorBike = console.log(`a ${color} Used motorbike`);
    return usedMotorBike;

}

}
else if(age === 6){


    if(type === 1){
        
            var newCar = console.log(`a ${color} New car`);
        return newCar;
        }
        else if(type === 2){
         
            var newMotorBike = console.log(`a ${color} New motorbike`);
            return newMotorBike;
        
        }


}



}

console.log(vehicle('blue', 5, 1));