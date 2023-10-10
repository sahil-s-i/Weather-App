// Function to convert Unix timestamp to 12-hour time format with AM/PM
function convertUnixTimestampToUTC(timestamp) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '03046ca68cmsh6a408ee404eba4bp1cad42jsn02777f94cf9c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            const citySunriseUTC = convertUnixTimestampToUTC(response.sunrise);
            const citySunsetUTC = convertUnixTimestampToUTC(response.sunset);
            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = citySunriseUTC
            sunset.innerHTML = citySunsetUTC
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
        })

        .catch(err => console.log(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Karnataka")


// ! GADAG WEATHER
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gadag', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        gadag_feels_like.innerHTML = response.feels_like
        gadag_humidity.innerHTML = response.humidity
        gadag_max_temp.innerHTML = response.max_temp
        gadag_min_temp.innerHTML = response.min_temp
        gadag_sunrise.innerHTML = response.sunrise
        gadag_sunset.innerHTML = response.sunset
        gadag_temp.innerHTML = response.temp
        gadag_wind_degrees.innerHTML = response.wind_degrees
        gadag_wind_speed.innerHTML = response.wind_speed
    })

    .catch(err => console.log(err));

// ! HUBLI WEATHER
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hubli', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        hubli_feels_like.innerHTML = response.feels_like
        hubli_humidity.innerHTML = response.humidity
        hubli_max_temp.innerHTML = response.max_temp
        hubli_min_temp.innerHTML = response.min_temp
        hubli_sunrise.innerHTML = response.sunrise
        hubli_sunset.innerHTML = response.sunset
        hubli_temp.innerHTML = response.temp
        hubli_wind_degrees.innerHTML = response.wind_degrees
        hubli_wind_speed.innerHTML = response.wind_speed
    })

    .catch(err => console.log(err));


// ! BENGALURU WEATHER
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        bengaluru_feels_like.innerHTML = response.feels_like
        bengaluru_humidity.innerHTML = response.humidity
        bengaluru_max_temp.innerHTML = response.max_temp
        bengaluru_min_temp.innerHTML = response.min_temp
        bengaluru_sunrise.innerHTML = response.sunrise
        bengaluru_sunset.innerHTML = response.sunset
        bengaluru_temp.innerHTML = response.temp
        bengaluru_wind_degrees.innerHTML = response.wind_degrees
        bengaluru_wind_speed.innerHTML = response.wind_speed
    })

    .catch(err => console.log(err));

// ! DEHLI WEATHER
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dehli', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        dehli_feels_like.innerHTML = response.feels_like
        dehli_humidity.innerHTML = response.humidity
        dehli_max_temp.innerHTML = response.max_temp
        dehli_min_temp.innerHTML = response.min_temp
        dehli_sunrise.innerHTML = response.sunrise
        dehli_sunset.innerHTML = response.sunset
        dehli_temp.innerHTML = response.temp
        dehli_wind_degrees.innerHTML = response.wind_degrees
        dehli_wind_speed.innerHTML = response.wind_speed
    })

    .catch(err => console.log(err));

// ! Hyderabad WEATHER
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        hyderabad_feels_like.innerHTML = response.feels_like
        hyderabad_humidity.innerHTML = response.humidity
        hyderabad_max_temp.innerHTML = response.max_temp
        hyderabad_min_temp.innerHTML = response.min_temp
        hyderabad_sunrise.innerHTML = response.sunrise
        hyderabad_sunset.innerHTML = response.sunset
        hyderabad_temp.innerHTML = response.temp
        hyderabad_wind_degrees.innerHTML = response.wind_degrees
        hyderabad_wind_speed.innerHTML = response.wind_speed
    })

    .catch(err => console.log(err));


// ! KOLKATA WEATHER
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        kolkata_feels_like.innerHTML = response.feels_like
        kolkata_humidity.innerHTML = response.humidity
        kolkata_max_temp.innerHTML = response.max_temp
        kolkata_min_temp.innerHTML = response.min_temp
        kolkata_sunrise.innerHTML = response.sunrise;
        kolkata_sunset.innerHTML = response.sunset;
        kolkata_temp.innerHTML = response.temp
        kolkata_wind_degrees.innerHTML = response.wind_degrees
        kolkata_wind_speed.innerHTML = response.wind_speed
    })

    .catch(err => console.log(err));