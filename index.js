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

let countries = [];

//wrap in try catch
const requestCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    countries = data;

    const countriesGrid = document.querySelector(".countries-grid");

    countries.forEach(country => {
        const countryBlock = createCountry(country);
        countriesGrid.appendChild(countryBlock);
    });
 }

requestCountries();

const dropdownWrapper = document.querySelector('.dropdown-wrapper');
const dropdownHeader = document.querySelector('.dropdown-header');

dropdownHeader.addEventListener('click', () => {
    dropdownWrapper.classList.toggle('open');
});

const dropDownItems = document.querySelectorAll('.dropdown-body li');
dropDownItems.forEach(item => {
    item.addEventListener('click', () => {
        const selectedRegion = item.getAttribute('data-region');
        filterCountriesByRegion(selectedRegion);
        dropdownWrapper.classList.remove('open');
    });
});

const updateDisplay = (countries) => {
    const countriesGrid = document.querySelector(".countries-grid");
    countriesGrid.innerHTML = "";

    countries.forEach(country => {
        const countryBlock = createCountry(country);
        countriesGrid.appendChild(countryBlock)
    });
}

const filterCountriesByRegion = (region) => {
    if (region === "all") {
        updateDisplay(countries);
    } else {
        const filteredCountries = countries.filter(country => country.region === region);
        updateDisplay(filteredCountries);
    }
}


