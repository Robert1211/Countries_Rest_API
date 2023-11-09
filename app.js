const API_URL_ALL = "https://restcountries.com/v3.1/all";

//fetch(API_URL_ALL);      //na funkcji fetch musimy wywolac funckje then


let countries;

fetch(API_URL_ALL).then((res) => res.json())
    .then((countriesRaw) => {
        countries = countriesRaw.map((country) => {
            return {
                capital: country.capital && country.capital[0],
                population: country.population,
                name: country.name.common,
                region: country.region,
                flagUrl: country.flags.png,
            };
        });
    });