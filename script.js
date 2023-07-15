const countriescontainer = document.querySelector('.countries-container')
// const search = document.querySelector('.search')
// const countryName = document.querySelectorAll('.naam')
const search = document.querySelector('.search-input')
var display
var allCountriesData 
fetch('https://restcountries.com/v3.1/subregion/Northern Europe')
 .then((res) => res.json() )
 .then((data) => {
    renderCountries(data)
     allCountriesData = data
    
 })
 
    
  



  function renderCountries(data){
    

    data.forEach((country) => {
       
        const countryCard = document.createElement('a')
        countryCard.classList.add('country')
        countryCard.href = `country.html?name=${country.name.common}`
        
        
        countryCard.innerHTML =  `                <img src="${country.flags.svg}">
        <div class="card">
        <h3 class="naam"> ${country.name.common}</h3>
        <p> <b> Population: </b> ${country.population.toLocaleString('en-IN')}</p>
        <p> <b> Region: </b>${country.region}</p>
        <p> <b> Capital: </b>${country.capital}</p>  </div>`      
        
        
        countriescontainer.append(countryCard)
            }) 
                
             }   
                

          


             fetch('https://restcountries.com/v3.1/all')
             .then((res) => res.json() )
             .then((data) => {
                // renderCountries(data) 
                
              display = data} ) 
               

              
                search.addEventListener('input' , (e) =>{
                
                 
                 
            
            const filteredCountries = display.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
              console.log(filteredCountries) ;
              countriescontainer.innerHTML = ''
              renderCountries(filteredCountries)

 })

  
 


 var fix = document.querySelector(".me")
 const change = document.querySelector(".navbar")
 const body = document.querySelector("body")
 const mobile_nav = document.querySelector(".button");
 const nav_header = document.querySelector(".header");






 const togglenavbar = () =>{
  nav_header.classList.toggle("active") ;
  // if(fix.style.position === 'relative'){
  //     fix.style.position === 'fixed' ; 
  // } else{
  //     fix.style.position=== 'relative'
  // } 
  // fix.style.overflow == "hidden" ;
   
  // html.style.position = "fixed";

};

mobile_nav.addEventListener("click", ()=> togglenavbar());


