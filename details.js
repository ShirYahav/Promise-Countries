const params = new URLSearchParams(window.location.search);
const countryName = params.get("country");

let country = {};

const requestCountry = async () => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        country = data[0];
        insertValues(country);
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
}

requestCountry();

const insertValues = (country) => {
    document.getElementById("country-img").src = country.flags.png;
    document.getElementById("country-name").textContent = country.name.common; 
    document.getElementById("population").textContent = country.population; 
    document.getElementById("region").textContent = country.region; 
    document.getElementById("capital").textContent = country.capital;
    document.getElementById("area").textContent = country.area;
    document.getElementById("first-language").textContent = Object.values(country.languages)[0];
    document.getElementById("second-language").textContent = Object.values(country.languages)[1];
    document.getElementById("currency").textContent = Object.values(country.currencies)[0].name;
}


