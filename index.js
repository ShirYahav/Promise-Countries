//Tasks:
// Extract all countries from api using fetch and present 
// make filter button work
//when clicking a country switch to details.html

function createCountry(country) {

    const countryLink = document.createElement("a");
    countryLink.href = "#";
    countryLink.className = "country scale-effect";
    countryLink.setAttribute("data-country-name", country.name.common);

    const countryFlagDiv = document.createElement("div");
    countryFlagDiv.className = "country-flag";
    const flagImg = document.createElement("img");
    flagImg.src = country.flags.png;
    flagImg.alt = `${country.name} Flag`;
    countryFlagDiv.appendChild(flagImg);

    const countryInfoDiv = document.createElement("div");
    countryInfoDiv.className = "country-info";

    const titleElement = document.createElement("h2");
    titleElement.className = "country-title";
    titleElement.textContent = country.name.common;

    const ulElement = document.createElement("ul");
    ulElement.className = "country-brief";

    const populationLi = document.createElement("li");
    populationLi.innerHTML = `<strong>Population: </strong>${country.population}`;
    const regionLi = document.createElement("li");
    regionLi.innerHTML = `<strong>Region: </strong>${country.region}`;
    const capitalLi = document.createElement("li");
    capitalLi.innerHTML = `<strong>Capital: </strong>${country.capital}`;

    ulElement.appendChild(populationLi);
    ulElement.appendChild(regionLi);
    ulElement.appendChild(capitalLi);

    countryInfoDiv.appendChild(titleElement);
    countryInfoDiv.appendChild(ulElement);

    countryLink.appendChild(countryFlagDiv);
    countryLink.appendChild(countryInfoDiv);

    return countryLink;
}

const requestCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();

    const countriesGrid = document.querySelector(".countries-grid");

    countries.forEach(country => {
        const countryBlock = createCountry(country);
        countriesGrid.appendChild(countryBlock);
    });
 
    console.log(countries);
}
requestCountries();

