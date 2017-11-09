const vehicleType = function (color, age, type){
    
    if (type === 3 && age === 3){
    
     var firstResult = console.log(`a ${color} car`);   
     return firstResult;
    }
    
    else if (type === 2 && age === 3){
    
     var secondResult = console.log(`a ${color} motorbike`);   
     return secondResult;
    }

    else if(type === 1 && age === 3){

        var thirdResult = console.log(`a ${color} new caravan`);   
        return thirdResult;

    }
    
    }
    
    console.log(vehicleType('blue', 3, 1));