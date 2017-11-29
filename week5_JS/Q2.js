let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];


let tasks = monday.concat(tuesday);

// Q1

var sum = tasks.reduce(function (a, b) {
    return a + b.duration;
},0 );

console.log(sum);

//Q2

var hour = sum / 60;
console.log("the total hours is around :", hour);

//Q3

var task_names = [];

tasks.forEach(function (task) {

    if (task.duration >= 120) {

        task_names.push(task.duration);


    }
});

console.log(task_names);

//Q4

let salary = 0;

if (hour) {
    
    salary = hour / hour * 12;
    
}
console.log("She earns", salary, "€.", "per hour");
salary = hour * 12;
console.log("She earns in total", salary, "€.");



///// End of homework!!