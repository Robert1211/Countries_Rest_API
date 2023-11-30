export const renderDetail = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const countryCode = searchParams.get("country");
    if (!countryCode) {
        goBackToDashboard()
    }

    const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${countryCode}`
    fetch(API_URL_DETAIL)
        .then(res => res.json())
        .then(([country]) => {
            if (!country) {
                goBackToDashboard();
            }
            console.log(country);
            country = {
                capital: country.capital && country.capital[0],
                population: country.population.toLocaleString(),
                name: country.name.common,
                nativeName: country.name.nativeName,
                code: country.cioc,
                code: country.cca3,
                region: country.region,
                subregion: country.subregion,
                flagUrl: country.flags.png,
                currencies: country.currencies,
                languages: country.languages,
                tld: country.tld[0],
            };
        });
};

const goBackToDashboard = () => {
    window.location.href = "/";
}