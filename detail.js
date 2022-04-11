
let code = sessionStorage.getItem('code')
console.log(code)
 fetch(`https://restcountries.com/v2/alpha/${code}`).then((res)=>{
     res.json()
 }).then((data)=>{
     console.log(data)
 })

