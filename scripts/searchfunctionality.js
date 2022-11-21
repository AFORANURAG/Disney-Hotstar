
 async function searchMovies(){
    // who takes us to the server
    let movie_name=document.querySelector("#movie-name").value
    console.log(movie_name)
    let response=  await fetch(`https://www.omdbapi.com/?apikey=b1f9ad01&s=${movie_name}&page=1`)  
    let  data= await response.json()
    let data1=data.Search
    globaldata=data1
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
        function appendMovies(data){
            let div1=document.getElementById("movies")
            div1.innerHTML=""
            data.forEach(function(el) {
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.Poster
        let p_name=document.createElement("p")
        p_name.innerText=el.Title
        let Year1=document.createElement("p")
        Year1.innerText=el.Year
        div.append(image,p_name,Year1)
        div1.append(div)
            });
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
export {debounce,searchMovies,appendMovies}
// debounce essentially is a kind of optimisation. 