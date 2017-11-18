//Q1 +Q2
const moviesTitle = [
    "Inception",
    "Old_Boy",
    "The_Shawshank",
    "Green_Mile",
    "Shutter_Island",
    "Interstellar",
    "Pianist",
    "Perfume",
    "No_Country_For_Old_Man",
    "Fight_Club"
];

console.log(moviesTitle);

//Q3 

var newUl = document.createElement("ul");
document.body.appendChild(newUl);
console.log(newUl);


//for (var i = 0; i < moviesTitle.length; i++){
    
//var movieId_Li = moviesTitle[i]; 
//movieId_Li = document.createElement("li");
// newUl.appendChild(movieId_Li);
    
// idOfMovie =  movieId_Li.setAttribute("id", "movieId");

//  movieId_Li.innerHTML = (moviesTitle[i]);

//}

//Q4 

const newObj = [

    { id: "Inception",  title: "Inception", Writer: "Christopher Nolan", Director: "Christopher Nolan" },
    { id: "Old_Boy",  title: "Old Boy", Writer: " Garon Tsuchiya", Director: "Spike Lee" },
    { id: "The_Shawshank",  title: "The Shawshank", Writer: "Stephen King", Director: "Frank Darabont" },
    { id: "Green_Mile",  title: "Green Mile", Writer: "Stephen King ", Director: "Frank Darabont" },
    { id: "Shutter_Island",  title: "ShutterIsland", Writer: "Laeta Kalogridis ", Director: " Martin Scorsese" },
    { id: "Interstellar",  title: "Interstellar", Writer: "Jonathan Nolan", Director: "Christopher Nolan" },
    { id: "Pianist",  title: "Pianist", Writer: "Ronald Harwood ", Director: " Roman Polanski" },
    { id: "Perfume",  title: "Perfume", Writer: "Andrew Birkin", Director: "Tom Tykwer" },
    { id: "No_Country_For_Old_Man",  title: "No Country For Old Man", Writer: "Joel Coen ", Director: " Ethan Coen," },
    { id: "Fight_Club",  title: "Fight Club", Writer: "Chuck Palahniuk ", Director: "David Fincher" }

];


//Q5


for (var index = 0; index < newObj.length; index++) {

    var movieId_Li = newObj[index];
    movieId_Li = document.createElement("li");
    newUl.appendChild(movieId_Li);

    idOfMovie = movieId_Li.setAttribute("id", "movieId");
    
    var idOfBook = newObj[index].id;
    var titleOfBook = newObj[index].title;
    var writerOfBook = newObj[index].Writer;
    var directorOfBook = newObj[index].Director;

    //console.log(idOfBook);
    // console.log(titleOfBook);
    // console.log(writerOfBook);
    //console.log(directorOfBook);
    
    movieId_Li.innerHTML = (titleOfBook);

    var newImg = document.createElement('img');
    newImg.src = "https://www.thestar.com.my/~/media/online/2016/01/08/20/34/bizd_mm_0901_p4a_mm_1.ashx/?w=620&h=413&crop=1&hash=D75F7DAE4E5E90FD55BC64F3534E48D0AD0C916D";
    movieId_Li.appendChild(newImg);    
}



