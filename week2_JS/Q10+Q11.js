const list = [
    {type:'motorbikes'},
    {type:'caravans'},
    {type:'bikes'},
    {type:'cars'}
    
    
    ];

var car = ""; 

    for( var index = 0; index < list.length; index++ ){

        car = car + list[index].type + ", ";

    }

    console.log(`Amazing Joe's Garage, we service`, car , "and truck." );
    
    // Q11 we can add a new object to the list and it'll be automatically printed out 
    // or we can add it to the console.log like the example above.
   