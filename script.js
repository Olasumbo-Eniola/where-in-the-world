const countries = document.querySelector('.countries');
const filteredCountry = document.querySelector('.search');
const toggleBtn = document.querySelector('.show-drop-down');
const regionSelection = document.querySelector('.drop-down');
// const searchByRegion = document.querySelector('.region');
const APIurl = 'https://restcountries.com/v2/all';



const countriesAPI = () => {

   fetch(APIurl).then((response) => {
      return response.json();
   }).then((data) => {
      let output = "";
      data.forEach(country => {
         // console.log(country.alpha3Code)
         selectCountry(country)
         // <a href="country-details.html">
         output += `
                    <li class="countryDetails" name="${country.name.common}">
                    <img src="${country.flags.png}"/>
                    <h2 class="countryName">${country.name}</h2>
                    <h4>Population <span>${country.population}</span></h4>
                    <h4 class="regionName">Region <span>${country.region}</span></h4>
                    <h4>Capital <span>${country.capital}</span></h4>
                    </li>
                    `

      });
      countries.innerHTML = output;
      //  selectCountry()
   })

}
 countriesAPI();




// GET SINGLE COUNTRY FROM SEARCH BAR {FILTER}

const countrySearchName = document.getElementsByClassName('countryName');
filteredCountry.addEventListener('keyup', () => {
   console.log(filteredCountry.value.toLowerCase())
   Array.from(countrySearchName).forEach((elem) => {
      if (elem.innerText.toLowerCase().includes(filteredCountry.value.toLowerCase())) {
         elem.parentElement.style.display = "grid"
      } else {
         elem.parentElement.style.display = "none"
      }
   })
})





// CLICK THE DOWN ARROW TO SELECT REGIONS
toggleBtn.addEventListener('click', () => {
   regionSelection.classList.toggle('toggle');
})



// GET SELECTED REGIONS DISPLAY
const regionName = document.getElementsByClassName('regionName');
const region = document.querySelectorAll('.region');

region.forEach((elem) => {
   elem.addEventListener('click', () => {

      Array.from(regionName).forEach((regionElem) => {
         if (regionElem.innerText.includes(elem.innerText) || regionElem.innerText == "All") {
            regionElem.parentElement.style.display = "grid"
         } else {
            regionElem.parentElement.style.display = "none"
         }
      })
   })
})



//  function getSingleCountry(country){
// countries.addEventListener('click',(e)=>{
// sessionStorage.setItem('code', country.alpha3Code)
//   })
//  }


function selectCountry(country) {
  let countries = document.querySelectorAll('.countryDetails')
    console.log(country.alpha3Code)
   
   
  countries.forEach((e, index) => {
    e.addEventListener('click', () => {
   sessionStorage.setItem('code', country.alpha3Code)
      

   //    console.log(e.children[0])
   //    console.log(e.children[1].innerText)
   //   let countryLabel = e.children[1].innerText
   //    countryLabel = 'name/' + countryLabel
   //    localStorage.setItem('country', countryLabel);
   //    window.location.href = 'country-details.html';
    })
  })
}

