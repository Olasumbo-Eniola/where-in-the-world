// const id = new URLSearchParams(window.location.search).get('id');


// const container = document.querySelector('.details')
// console.log(container)
// const renderDetails = async ()=>{
//     const res = await fetch('https://restcountries.com/v2/all' + id);
//     const country = await res.json();
//     // console.log(post)
//     const template =`
//     <div class="modal">
        
//        <div class="modal-wrapper">
//         <button class="back-btn"><i class="fa fa-arrow-left" aria-hidden="true"></i> back</button>
//             <div class="modal-container">
//                 <img src="${country.flags.png}" alt="">
//                 <div class="country-detail">
//                     <h4>${country.name}</h4>
//                     <div class="country-data-section">
//                         <div class="detail-one">
//                             <h5>Native Name: <span>${country.native}</span></h5>
//                             <h5>Population: <span>${country.population}</span></h5>
//                             <h5>Region: <span>${country.region}</span></h5>
//                             <h5>Sub Region: <span>${country.subregion}</span></h5>
//                             <h5>Capital: <span>${country.capital}</span></h5>
//                         </div>
//                         <div class="detail-two">
//                             <h5>Top Level Domain: <span>be</span></h5>
//                             <h5>Currencies: <span>Euro</span></h5>
//                             <h5>Languages: <span>Dutch, french,German</span></h5>
                            
//                         </div>
//                     </div>
//                     <div  class="language-section">
//                         <h3>Border Countries: <span>France</span><span>Germany</span><span>Nethreland</span></h3>
//                     </div>
//                 </div>
//             </div>
//        </div>
//     </div>
//     `

// container.innerHTML=template;
// }

