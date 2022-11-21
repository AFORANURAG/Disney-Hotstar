export default function appendMovies(data){
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
