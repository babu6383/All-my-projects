const apikey ="cb9bbf19d59c3afe7f0e721b263dafcc";
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=chennai";


// const searchbox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

async function checkWeather() {
    const response = await fetch( apiUrl + `&appid=${apikey}`) 
    var data = await response.json();
    console.log(data)

    // document.querySelector(".city").innerHTML =  data.name;
    // document.querySelector(".temp").innerHTML = math.round(data.main.temp)  +" °C";
    // document.querySelector(".humidity").innerHTML =  data.main.humidity + "%";
    // document.querySelector(".wind").innerHTML =  data.wind.speed + " Km/h";

}

checkWeather();
