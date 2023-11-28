import { renderCountriesList } from "./dom-utils.js";
const API_URL_ALL = "https://restcountries.com/v3.1/all";

//fetch(API_URL_ALL);      //na funkcji fetch musimy wywolac funckje then

let countries;
let query = "";
let region = "";

fetch(API_URL_ALL).then((res) => res.json())
    .then((countriesRaw) => {
        // countries = countriesRaw.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()));
        countries = countriesRaw.map((country) => {
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

const filterDataAndRenderCountriesList = () => {
    const filteredCountries = countries.filter(country => {
        return (country.name.toLowerCase().includes(query) && (!region || country.region === region)
        );
    });

    renderCountriesList(filteredCountries);
};

document.querySelector("#query").addEventListener("input", (e) => {
    query = e.target.value.toLowerCase().trim();
    filterDataAndRenderCountriesList();

    //render countries based on query
});
document.querySelector("#region").addEventListener('change', (e) => {
    region = e.target.value;
    filterDataAndRenderCountriesList();
})