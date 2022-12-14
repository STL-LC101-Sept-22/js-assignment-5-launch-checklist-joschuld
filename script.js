// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");
// const { formSubmission } = require("./scriptHelper");
// const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form")
    let list = document.getElementById('faultyItems');
    list.style.visibility = 'hidden'

    form.addEventListener('submit', function(event){
        event.preventDefault();

        //user input to be sent to formSubmission fxn
        let pilot = document.querySelector('input[name = pilotName]').value;
        let copilot = document.querySelector('input[name = copilotName]').value;
        let fuelLevel = document.querySelector('input[name = fuelLevel]').value;
        let cargoMass = document.querySelector('input[name = cargoMass]').value;
        let list = document.getElementById('faultyItems');

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   console.log(listedPlanetsResponse)

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let pickedPlanet = pickPlanet(listedPlanets);
        console.log(pickedPlanet);

        let name = pickedPlanet.name;
        let diameter = pickedPlanet.diameter;
        let star = pickedPlanet.star;
        let distance = pickedPlanet.distance;
        let moons = pickedPlanet.moons;
        let imageUrl = pickedPlanet.image;
        
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })
   
});