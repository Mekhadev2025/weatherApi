/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f3ea72053msha2b551aba652a02p1e0516jsnf41e2c1bc34c',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};



fetch('https://open-weather13.p.rapidapi.com/city/chicago', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

*/


 



/*

let userCity='chicago'
fetch(`https://open-weather13.p.rapidapi.com/city/chicago`, options)
	.then(response => response.json())
	//.then(response => console.log(response))
	//.then(data =>console.log(data))
.then(data =>console.log(data.name))// to console.log the usercity
	.catch(err => console.error(err));







/** 
/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 

*/

const getWeatherData = (city) => {
   
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f3ea72053msha2b551aba652a02p1e0516jsnf41e2c1bc34c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
  //HINT: Use template literals to create a url with input and an API key
 return fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	//.then(response => console.log(response))
	.then(data => data)
	.catch(err => console.error(err));


  //CODE GOES HERE
}




/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  const data = await getWeatherData(city)
  showWeatherData(data,city)
  // CODE GOES HERE

}
	/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
/*
*/
showWeatherData = (weatherData,city) => {
  //CODE GOES HERE
  console.log(weatherData,'cookie')
  console.log(weatherData.temp)
  
  document.getElementById('temp').innerText= weatherData.temp
  document.getElementById('min-temp').innerText= weatherData.min_temp
  document.getElementById('max-temp').innerText= weatherData.max_temp
  document.getElementById('city-name').innerText=city.toUpperCase()


}


 
