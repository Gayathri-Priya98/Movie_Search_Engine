
var movieNameElement=document.getElementById("movie-name");

var searchBtnElement=document.getElementById("search-btn");

let movieContainer=document.getElementById("movie-box");

var movieStatusElement = document.getElementById("movie-status");


searchBtnElement.addEventListener("click",function(){
    movieContainer.innerHTML = ""
    movieStatusElement.innerText =  "Hold on to your popcorn, searching for movies... 🍿";

    let movieName=movieNameElement.value;
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4){
           movieStatusElement.innerText = ""
           let result= JSON.parse(this.responseText);
           console.log(result);
           if(result.Response=="True"){
            let movies=result.Search;
            movies.map((item,i) => {
                console.log(item);
            movieContainer.innerHTML+=`
            <div class="movie-card" >
            <img class="movie-poster" src= ${item.Poster}/>
            <p>  <b> Name :  </b> ${item.Title} </p>
            <p> <b> Year : </b> ${item.Year}  </p>
            <p> <b> Type : </b> ${item.Type}  </p>
           </div>
            `
                   
           })
        }else{
            movieStatusElement.innerText="Oops! Can't find that movie. Try again!!!"
        }
        }
    }
    xhttp.open("GET",`https://www.omdbapi.com/?apikey=45f0782a&s=${movieName}`,true);
    xhttp.send();
})
 

   
