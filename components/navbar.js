

function navbar(){
    return `
    <img style="float: left; margin-left: 20px;" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="">
    
      <div class="dropdown">
        <button class="dropbtn">TV 
        </button>
        <div class="dropdown-content">
          <a href="#">othershows</a>
          <a href="#"> hotstarspecial</a>
          <a href="#">quix</a>
          <a href="#">Star Jalsha</a>
        
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Movies 
        </button>
        <div class="dropdown-content">
          <a href="#">anurag</a>
          <a href="#">upadhyay</a>
          <a href="#">delhi</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Sports  
        </button>
        <div class="dropdown-content">
          <a href="#">shazam</a>
          <a href="#">superman</a>
          <a href="#">bengali bhaijaan</a>
          <a href="#">Veer Zara</a>
          <a href="#">shaktimaan all time favourite</a>
          <a href="#">Krish-5</a>
        </div>
      </div> 
      <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
      <div class="dropdown">
        <button class="dropbtn">Disney+  
        </button>  
    </div>
    <div class="search">
        <form class="search-form">
            <input type="text" placeholder="Search" id="movie-name">
           <button type="" id="searchedmovies"  ><i class="fa fa-search" aria-hidden="true"></i></button>
        </form>
      </div>
      <div class="dropdown">
        <button class="dropbtn" id="Signup" style="float: right;">Sign up 
        </button>
      </div>
      <div class="dropdown">
        <button class="dropbtn" id="Signin" style="float: right;">Sign in 
        </button>
      </div>
    </div>`
}


export default navbar