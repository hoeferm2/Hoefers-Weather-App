var APIkey = "0fdb6a29ec3f7e341f8148d09c85898f"
var city; ///will be defined through user input.
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

function getData() {

fetch("http://api.openweathermap.org/data/2.5/weather?q=seattle&appid=0fdb6a29ec3f7e341f8148d09c85898f")
    .then(function (response) {
      return response.json();
    })

}



// // will use the users input to update the value of var city.
// function storeUserInput() {
//     searchBtn
// }
var searchBtn = document.querySelector(".btn-primary");
// searchBtn.addEventListener("click", getData);


// }

// TODO: Search for a city with a form input WHEN I search for a city
    //Presented with current and future conditions
    // City is added to search history
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

//TODO: WHEN I view the UV index
    // THEN I am presented with a color that indicates whether the conditions are:
    // favorable, 
    // moderate, 
    // or severe
//TODO: WHEN I view future weather conditions for that city
// THEN I am presented with:
        //  a 5-day forecast that displays the date, 
        //  an icon representation of weather conditions, 
        //  the temperature, 
        //  the wind speed, 
        //  nd the humidity
//TODO: WHEN I click on a city in the search history
    // THEN I am again presented with current and future conditions for that city
    // ```