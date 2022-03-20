const countries = document.querySelector('.countries');
const filteredCountry = document.querySelector('.search');
const toggleBtn = document.querySelector('.fa-chevron-down');
const regionSelection = document.querySelector('.drop-down');
// const searchByRegion = document.querySelector('.region');
const APIurl ='https://restcountries.com/v2/all';

// TO GET ALL THE COUNTRIES
const countriesAPI = ()=>{
  fetch(APIurl).then((response)=>{
     return response.json();
  }).then((data)=>{
      let output ="";
      data.forEach(country => {
         // console.log(country.name) 
         output +=  `
                    <li>
                    <img src="${country.flags.png}"/>
                    <h2>${country.name}</h2>
                    <h4>Population <span>${country.population}</span></h4>
                    <h4 class="regionName">Region <span>${country.region}</span></h4>
                    <h4>Capital <span>${country.capital}</span></h4>
                    </li>
                  
                    `
      });
      countries.innerHTML=output;
  })
}

countriesAPI();

// GET SINGLE COUNTRY FROM SEARCH BAR {FILTER}
filteredCountry.addEventListener('keyup',()=>{
   fetch(`https://restcountries.com/v2/name/${filteredCountry.value}`).then((response)=>{
      return response.json()
   }).then((data)=>{
      console.log(data)
      let output =''
      data.forEach((filteredItem)=>{
            output +=  `
                    <li>
                    <img src="${filteredItem.flags.png}"/>
                    <h2>${filteredItem.name}</h2>
                    <h4>Population <span>${filteredItem.population}</span></h4>
                    <h4>Region <span>${filteredItem.region}</span></h4>
                    <h4>Capital <span>${filteredItem.capital}</span></h4>
                    </li>
                    `

      })
      countries.innerHTML=output;  
     
   })
})



// CLICK THE DOWN ARROW TO SELECT REGIONS
toggleBtn.addEventListener('click',()=>{
   regionSelection.classList.toggle('toggle');
})

// GET SELECTED REGIONS DISPLAY
const regionName = document.getElementsByClassName('regionName');
   const region = document.querySelectorAll('.region');
  region.forEach((elem)=>{
     elem.addEventListener('click',()=>{
        
       Array.from(regionName).forEach((regionElem)=>{
         if(regionElem.innerText.includes(elem.innerText) || regionElem.innerText == "All"){
            regionElem.parentElement.style.display="grid"
         }else{
            regionElem.parentElement.style.display="none"
         }
        })
     })
  })



countries.addEventListener('click',(e)=>{
  e.preventDefault()
//   console.log(e.target)
fetch(APIurl).then((response)=>{
   return response.json()
}).then((data)=>{
   data.forEach((getSingleCountryDetails)=>{
      console.log(getSingleCountryDetails)
      if(e.target.includes(getSingleCountryDetails.name)){
      
      }
   })
})
//   singleCountryDetails.forEach((i)=>{
//      console.log(i)
//   })
})