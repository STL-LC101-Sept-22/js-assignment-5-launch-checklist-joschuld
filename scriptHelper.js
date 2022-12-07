// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById('missionTarget')
    missionTarget.innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `
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

    //names first, add loop/conditionals for fuel and cargo after?
    // keep visiblity hidden until fuel/cargo conditions pass
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    list.style.visibility = 'hidden';

    //fuel wrong, else right
    if(fuelLevel < 10000) {
        list.style.visibility = 'visible'
        fuelStatus.innerHTML = 'Fuel level too low for launch'
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch'
        launchStatus.style.color = 'rgb(199,37,78)'
    } 
    else { 
        list.style.visibility = 'visible'
        fuelStatus.innerHTML = 'Fuel level high enough for launch'
    }

    //cargo wrong, else right
    if(cargoLevel > 10000){
        list.style.visibility = 'visible'
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch'
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch'
        launchStatus.style.color = 'rgb(199,37,78)'
    } 
    else {
        list.style.visibility = 'visible'
        cargoStatus.innerHTML = 'Cargo mass low enough for launch'
    }


    // // if fuel wrong, cargo right
    // if(fuelLevel <= 10000 && cargoLevel < 10000) {
    //     list.style.visibility = 'visible'
    //     launchStatus.innerHTML = 'Shuttle Not Ready for Launch'
    //     launchStatus.style.color = 'rgb(199,37,78)'

    //     fuelStatus.innerHTML = 'Fuel level too low for launch'
    //     cargoStatus.innerHTML = 'Cargo mass low enough for launch'
    // }

    // //if fuel right, cargo wrong
    // if(fuelLevel > 10000 && cargoLevel >= 10000) {
    //     list.style.visibility = 'visible'
    //     launchStatus.innerHTML = 'Shuttle Not Ready for Launch'
    //     launchStatus.style.color = 'rgb(199,37,78)'

    //     fuelStatus.innerHTML = 'Fuel level high enough for launch'
    //     cargoStatus.innerHTML = 'Cargo mass too heavy for launch'
    // }


    // if both fuel/cargo right
    if(fuelLevel >= 10000 && cargoLevel <= 10000) {
        list.style.visibility = 'visible'
        launchStatus.innerHTML = 'Shuttle is Ready for Launch'
        launchStatus.style.color = 'rgb(65, 159, 106)'

        fuelStatus.innerHTML = 'Fuel level high enough for launch'
        cargoStatus.innerHTML = 'Cargo mass low enough for launch'
    }

    



}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json()
        });
    // console.log(planetsReturned)
    return planetsReturned;

}

//need random index
function pickPlanet(planets) {
    // console.log(planets.length)
    randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex]
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
