//html elelment
const cityWeather = document.getElementById('cityWeather');
const weatherHighlight = document.getElementById('weatherHighlight');
const weekDaysWeather = document.getElementById('weekDaysWeather');
const searchInput = document.getElementById('searchInput');

console.log(cityWeather)

//app variable

//function
async function GetCurrentWeather(city) {
    let response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=06bb21fd9d5f435da8c213429250405&q=${city}&days=7`
    );
    let data = await response.json();
    let daysWeather = data.forecast.forecastday;
    console.log(daysWeather)
    console.log(data)

    console.log(typeof(data))
    displayCurrentWeather(data)
}
function getWeekday(dateString) {
    const date = new Date(dateString);
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdays[date.getDay()];
  }
  
function displayCurrentWeather(obj) {
const currentWeather =`
                    <p class="city-name fs-2">${obj.location.name}</p>
                    <picture class="align-items-center d-flex justify-content-center">
                        <img src="https:${obj.forecast.forecastday[0].day.condition.icon}" class="w-75">
                    </picture>
                    <p class="today-tempature fs-1 fw-bold">
                   ${obj.forecast.forecastday[0].day.maxtemp_c}&#176;C<span class="fs-3 text-gray fw-light"> - ${obj.forecast.forecastday[0].day.mintemp_c
                   }&#176;C</span>
                    </p>
                    <p class="week-day fs-5 fw-bold">${getWeekday(obj.forecast.forecastday[0].date)}</p>
                    <p class="time">${obj.current.last_updated}</p>
                    <div class="mb-2">
                        <i class="fa-solid fa-cloud text-primary"></i>                        
                        <span class="weather-state fs-5 ps-1">${obj.current.condition.text}</span>
                    </div>
                    <div class="mb-2">
                        <i class="fa-solid fa-umbrella text-primary"></i>
                        <span class="weather-state fs-5 ps-1">${obj.current.precip_mm}mm</span>
                    </div>

`
const todayHighLights=`
                    <h2 class="fs-5 m-0">todays highlights</h2>
                    <div class="col-6 col-md-4">
                        <div class=" card-style p-3">
                            <div class="row">
                                <div class="col-3 p-0 mx-0">
                                    <picture class="ps-1 pe-0">
                                        <img src="./imgs/temperature.jpg" alt="temperature" class="w-100 remve-bg-img p-0">
                                    </picture>
                                </div>
                                <div class="col-9 p-0 mx-0">
                                        <div>
                                            <p class="fs-6 m-0">feel like</p>
                                            <p class="fs-3 mt-2 mb-2">${obj.current.feelslike_c}&#176;C</p>
                                        </div>    
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4">
                        <div class=" card-style p-3">
                            <div class="row">
                                <div class="col-3 p-0 mx-0">
                                    <picture class="ps-1 pe-0">
                                        <img src="./imgs/wind.jpg" alt="Wind icon" class="w-100 remve-bg-img p-0">
                                    </picture>
                                </div>
                                <div class="col-9 p-0 mx-0">
                                        <div>
                                            <p class="fs-6 m-0">Wind</p>
                                            <p class="fs-3 mt-2 mb-2">${obj.current.wind_kph} Km/h</p>
                                        </div>    
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4">
                        <div class=" card-style p-3">
                            <div class="row">
                                <div class="col-3 p-0 mx-0">
                                    <picture class="">
                                        <img src="./imgs/rain-amount.jpg" alt="rain icon" class="w-100 remve-bg-img px-1">
                                    </picture>
                                </div>
                                <div class="col-9 p-0 mx-0">
                                        <div>
                                            <p class="fs-6 m-0">Rain amount</p>
                                            <p class="fs-3 mt-2 mb-2">${obj.current.precip_mm} cm</p>
                                        </div>    
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4">
                        <div class=" card-style p-3">
                            <div class="row">
                                <div class="col-3 p-0 mx-0">
                                    <picture class="">
                                        <img src="./imgs/humidity.jpg" alt="Humidity" class="w-100 remve-bg-img px-1">
                                    </picture>
                                </div>
                                <div class="col-9 p-0 mx-0">
                                        <div>
                                            <p class="fs-6 m-0">Humidity</p>
                                            <p class="fs-3 mt-2 mb-2">${obj.current.humidity}%</p>
                                        </div>    
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4">
                        <div class=" card-style p-3">
                            <div class="row">
                                <div class="col-3 p-0 mx-0">
                                    <picture class="">
                                        <img src="./imgs/cloud.jpg" alt="cloud icon" class="w-100 remve-bg-img px-1">
                                    </picture>
                                </div>
                                <div class="col-9 p-0 mx-0">
                                        <div>
                                            <p class="fs-6 m-0">Cloud cover</p>
                                            <p class="fs-3 mt-2 mb-2">${obj.current.cloud}%</p>
                                        </div>    
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4">
                        <div class=" card-style p-3">
                            <div class="row">
                                <div class="col-3 p-0 mx-0">
                                    <picture class="">
                                        <img src="./imgs/uv.jpg" alt="UV" class="w-100 remve-bg-img px-1">
                                    </picture>
                                </div>
                                <div class="col-9 p-0 mx-0">
                                        <div>
                                            <p class="fs-6 m-0">UV</p>
                                            <p class="fs-3 mt-2 mb-2">${obj.current.uv}</p>
                                        </div>    
                                </div>    
                            </div>
                        </div>
                    </div>

`
const daysWeather =`
                    <div class="col-6 col-md-4">
                        <div class="card-style text-center p-2">
                            <p class="m-0">${getWeekday(obj.forecast.forecastday[1].date)}</p>
                            <picture>
                                <img src="https:${obj.forecast.forecastday[1].day.condition.icon}" class="w-75 remve-bg-img">
                            </picture>
                            <p class="m-0">${obj.forecast.forecastday[1].day.maxtemp_c} &#176;C - ${obj.forecast.forecastday[0].day.mintemp_c} &#176;C</p>    
                        </div>
                    </div>
                                        <div class="col-6 col-md-4">
                        <div class="card-style text-center p-2">
                            <p class="m-0">${getWeekday(obj.forecast.forecastday[2].date)}</p>
                            <picture>
                                <img src="https:${obj.forecast.forecastday[2].day.condition.icon}" class="w-75 remve-bg-img">
                            </picture>
                            <p class="m-0">${obj.forecast.forecastday[2].day.maxtemp_c} &#176;C - ${obj.forecast.forecastday[0].day.mintemp_c} &#176;C</p>    
                        </div>
                    </div>
                    


`
cityWeather.innerHTML=currentWeather;
weatherHighlight.innerHTML=todayHighLights;
weekDaysWeather.innerHTML=daysWeather;
}


GetCurrentWeather('Cairo');
searchInput.addEventListener('input' , function () {
    GetCurrentWeather(searchInput.value.charAt(0).toUpperCase() + String(searchInput.value).slice(1))
})