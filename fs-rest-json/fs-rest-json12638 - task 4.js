"use strict"

const fetch = require("node-fetch");
const REQUESTED_URL = "http://www.groupkt.com/country/get/all";

function printIsoCodesOfCountry(chosenCountry) {
    fetch(REQUESTED_URL)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(json => {
        let countrySearchResult = json.RestResponse.result.find(country => {
            if (country.name === chosenCountry){
                return country;
            }
        })

        if (countrySearchResult === undefined) {
            throw new Error(`There is no such a country in the list: ${chosenCountry}`);
        } else {
            console.log(`\nISO codes of ${chosenCountry}: ${countrySearchResult.alpha2_code}`
                            + ` and ${countrySearchResult.alpha2_code}.\n`);
        }
    })
    .catch(error => console.error(`\n(!) Network request for ${REQUESTED_URL}`
                                    + ` failed with error:\n ${error}.\n`));
}

printIsoCodesOfCountry("Norway");