const bigBox = [

{firstname: 'Abullah', age: '21'},
{firstname: 'MO', age: '22'},
{firstname: 'Johan', age: '30'},
{firstname: 'Hassan', age: '24'},
{firstname: 'Fred', age: '36'},
{firstname: 'Max', age: '18'},
{firstname: 'Lana', age: '20'}
];

const allValuesOfObject = function(box){

    for(let index = 0; index < box.length; index++){

 var result =  console.log('First Name is', box[index].firstname,'his/her age is:', box[index].age);
 

    }

return result;

}

console.log(allValuesOfObject(bigBox));