//promice (object)
//бекенд менен фронтенддин байланышы
//  resolve-успешно (ичине баардык нерсе салса болот)
//  reject- успешно но с ошибкой
//  pending - ожидания
// fetch - запростор ьенен иштегени жардам берет ( ичинде бекендге кетчуу запростун ссылкасы б.т)





// let promise= new Promise((resolve,reject)=>{
//     resolve("succes");
//     reject("error")
// });

// promise
// .then((r) => {
//     console.log(promise);
// })
// .catch((e) => {
//     console.log(e);
// }).finally()ж



//resolve- иштесе then успешно келген запросту тартып алат
// reject -иштесе catch ошибканы чыгарат
//finally - успешно болсода не успешно болсода иштейт







const  loadCountryAPI=() =>{
    fetch("https://restcountries.com/v3.1/all")
   .then(res => res.json())
.then(r =>displayCountries(r) )
   
}

const displayCountries = countries =>{
    console.log(countries);
    const countriesHTML=countries.map( country => getCountry(country));

    const container=document.querySelector(".countries");
    container.innerHTML=countriesHTML.join("")
}
const getCountry=(country) => {
    console.log(country)
    return` <div class ="country-div">
    <img src ="${country.flags.svg}">
    <h2>${country.name.common}</h2>
    <h4>Population: ${country.population}</h4>
      <h4>Region: ${country.region}</h4>
        <h4>Capital: ${country.capital}</h4>
    </div>
    `
}

loadCountryAPI()