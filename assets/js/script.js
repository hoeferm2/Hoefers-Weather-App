var APIkey = "6c3ae50c30ffe41eae1d3672fe4eccc6"
// for forecast
// var APIkey = "6c3ae50c30ffe41eae1d3672fe4eccc6"
// api.openweathermap.org/data/2.5/forecast/daily?q=
{/* <input type="text" placeholder="Type something..." id="myInput">
<button type="button" onclick="getInputValue();">Get Value</button> */}
var today = moment();
$("#day1").text(today.format("MMM Do, YYYY"));


function storeUserInput(event) {
    event.preventDefault();

    var inputVal = document.getElementById("userInput").value;
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputVal + "&appid=" + APIkey +"&units=imperial";
    console.log(inputVal);
    getData(queryURL)
    var today = moment();
    $("#day1").text(today.format("MMM Do, YYYY"));
}


//  "http://api.openweathermap.org/data/2.5/weather?q=seattle&appid=0fdb6a29ec3f7e341f8148d09c85898f" to get seattle
function getData(queryURL) {
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        }) 
        .then(data => {
            
            console.log(data)

            // document.getElementById("cityTemp").textContent = data.main.temp + "°F"
            structureHtml(data)


        })
}

function structureHtml(dataObj) {
//     // document.getElementById("cityTemp").textContent = "Temperature " + dataObj.main.temp + "°F"
//     // document.getElementById("cityHumidity").textContent = "Humidity " + dataObj.main.humidity + "%"
//     // document.getElementById("cityWindSpeed").textContent = "Wind Speed " + dataObj.wind.speed + " mph" 
//     // document.getElementById().textContent = dataObj.main.
//TODO: Get the dates to run through a FOR LOOP
for(i = 0; i<5; i++){
    document.getElementById("day" + (i+1)).innerHTML = today.format("MMM Do, YYYY")
    //document.getElementById()
}
for(i = 0; i<5; i++){
    document.getElementById("min" + (i+1)).innerHTML = "Min: " + Number(dataObj.list[i].main.temp_min).toFixed(1)+ "°";
    //document.getElementById()
}

for(i = 0; i<5; i++){
    document.getElementById("max" + (i+1)).innerHTML = "Max: " + Number(dataObj.list[i].main.temp_max).toFixed(2) + "°";
    //document.getElementById
}
for(i = 0; i<5; i++){
    document.getElementById("humidity" + (i+1)).innerHTML = "Humidity: " + Number(dataObj.list[i].main.humidity).toFixed(2) + "%";
    //document.getElementById
}
for(i = 0; i<5; i++){
    document.getElementById("windSpeed" + (i+1)).innerHTML = "Wind Speed: " + Number(dataObj.list[i].wind.speed).toFixed(2) + "mph";
    //document.getElementById
}
}

var searchBtn = document.querySelector(".btn-primary");
searchBtn.addEventListener("click", storeUserInput);


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