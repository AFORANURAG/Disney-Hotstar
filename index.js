
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
    document.getElementById("loader").style.display="none"
    appendMovies(data1)
    }
 function appendMovies(data){
            let div1=document.getElementById("container")
            div1.innerHTML=null
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
    document.getElementById("loader").style.display="block"
    if(id){
        clearTimeout(id)
    }
id=setTimeout(function(){
func()
},delay)
}
// debounce essentially is a kind of optimisation. 




// slideshow will be achieved using set interval , so cathcing the images first ,,,

    // let im=document.getElementById("loader")
    // let array16=[
    //     {
    //     images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6452/1376452-v-25e16b21c554",
    //     rating:8.5,
        
    //     },
    //     {
    //         images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4836/1374836-v-9e675d9bcb9e",
    //         rating:7.5,
            
    //         },
    //      {
    //         images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4634/1364634-v-5e1089cdbaca",
    //         rating:7.2,
                
    //             },
    //     {
    //     images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1302/1351302-v-4ddd34628b84",
    //     rating:9.5,            
    //     },
    //     {
    //     images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3065/1323065-v-58c6d2de61e1",
    //     rating:6.5,            
    //     },
    //     {
    //         images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5",
    //         rating:5.5,            
    //             },
    //             {
    //                 images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7391/1367391-v-84d5e12d4c3d",
    //                 rating:8.2,            
    //                 },
    //                 {
    //       images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
    //      rating:9,            
    //          },
    //             {
    //              images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7527/267527-v",
    //              rating:10,            
    //              },
    //                 {
    //                  images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2876/862876-v",
    //                rating:9.5,            
    //              },
    //               {
    //             images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4327/734327-v",
    //              rating:5.2,            
    //           },
    //             {
    //             images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7117/517117-v",
    //         rating:7.2,      
    //            },
    //             {
    //           images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4554/494554-v",
    //             rating:6,            
    //              },
    //              {
    //            images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5085/875085-v",
    //            rating:6.9,            
    //               },
    //              {
    //           images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3781/673781-v",
    //             rating:8,            
    //              },
    //                {
    //                 images_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4189/1000074189/1000074189-v",
    //                 rating:9.5,            
    //                 }
    // ]
    
    let carousel_div=document.getElementById("slideshow")
    let movies=["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/SHOW/152/152/152-h","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/587/1380587-h-e27a7c70f422","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1991/311991-h"]
    let image=document.createElement("img")
image.setAttribute("id","image")
    let i=1   
    image.src=movies[0]
    carousel_div.append(image)
    setInterval(function(){
        if(i==5){
        i=0
    }
    image.src=movies[i]
    i++    
    carousel_div.append(image)

    },3000)

    console.log("my name is anurag")
    // i will append the data only when i will get the data right from the server        


//your carousel function is going to invoke only after your window loads all the html tag and element 
//since it is executing the script before loading of html element on dom , so it giving null , which is 
//default value that means it is executing before full loaded html 

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


 
        document.querySelector("#sorting1").addEventListener("click",function (){
            data1.sort(function(a,b){
            return a.rating-b.rating
            
            })
            display(data1)
        }
        
        ) 
document.querySelector("#sorting2").addEventListener("click",function (){
    data1.sort(function(a,b){
    return b.rating-a.rating  
    })
    display(data1)
    }
    
) 
document.querySelector("#Signup").addEventListener("click",function(){
    window.location.href="Sign up.html"
})
document.querySelector("#Signin").addEventListener("click",function(){
    window.location.href="Sign in page.html"
        })    

    