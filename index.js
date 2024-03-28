//Tasks:
// Extract all countries from api using fetch and present 
// make filter button work
//when clicking a country switch to details.html

const requestCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    console.log(countries);
}
requestCountries();
