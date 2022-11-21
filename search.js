import navbar from "./components/navbar.js"
import appendMovies from "./scripts/append.js"
import slideshow from "./scripts/slideshow.js"

// step 1 import navbar ui component element here and also slideshow.


window.onload= function (){
   
    document.getElementById("myTopnav").innerHTML=navbar()
    console.log(navigation)
slideshow()
    document.getElementById("movie-name").addEventListener("input",function(){
        debounce(searchMovies,300)
    })
    async function searchMovies(){
        // which takes us to the server
        let movie_name=document.querySelector("#movie-name").value
        console.log(movie_name)
        let response=  await fetch(`https://www.omdbapi.com/?apikey=b1f9ad01&s=${movie_name}&page=1`)  
        let  data= await response.json()
        let data1=data.Search
    
        //so promise is a gift box?yes 
        // response.then(function (success){
        
        // let data=success.json()
        //     console.log(data)
        //     data.then(function(success){
        // console.log(success)
        //     })
        // }).catch(function(error){
        //     console.log(error)
        // })
        console.log(data1)
        appendMovies(data1)
        }
    
        
    //b1f9ad01
    // import navbar from "./components/navbar.js";
    // console.log(navbar)
    // http://www.omdbapi.com/?apikey=b1f9ad01&http://www.omdbapi.com/?apikey=b1f9ad01&s=avengers
    let id;
    function debounce(func,delay){
        if(id){
            clearTimeout(id)
        }
    id=setTimeout(function(){
    func()
    },delay)
    }
    // debounce essentially is a kind of optimisation.     
}
