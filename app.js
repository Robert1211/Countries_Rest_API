import { renderCountriesList } from "./dom-utils.js";
const API_URL_ALL = "https://restcountries.com/v3.1/all";

//fetch(API_URL_ALL);      //na funkcji fetch musimy wywolac funckje then

let countries;
let query = "pol";

fetch(API_URL_ALL).then((res) => res.json())
    .then((countriesRaw) => {
        countries = countriesRaw.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()));
        countries = countries.map((country) => {
            return {
                capital: country.capital && country.capital[0],
                population: country.population,
                name: country.name.common,
                region: country.region,
                flagUrl: country.flags.png,
            };
        });
        renderCountriesList(countries);
    });
document.querySelector("#query").addEventListener("click", () => {
    //render countries based on query
});