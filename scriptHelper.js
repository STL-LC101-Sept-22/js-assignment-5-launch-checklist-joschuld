// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty'
    } else if (isNaN(Number(testInput))) {
        return 'Not a Number'
    } else {
        return 'Is a Number'
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    //sets DOM to use for updates
    let launchStatus = document.getElementById('launchStatus');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');



    // validate arguements pass thru as related to the validateInput fxn

    if(validateInput(pilot) === 'Empty' || 
    validateInput(copilot) === 'Empty' || 
    validateInput(fuelLevel) === 'Empty' || 
    validateInput(cargoLevel) === 'Empty') {
        return alert('All fields are required')
    } else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number'){
        return alert('Names cannot have numbers')
    } else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){
        return alert('Fuel and Cargo levels must be numbers')
    }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
