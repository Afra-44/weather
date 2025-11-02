city = document.querySelector(".search input")
search = document.querySelector(".search button")

async function weather(cityname) {
  

const url = `https://weather-api167.p.rapidapi.com/api/weather/forecast?place=${cityname}%2C&cnt=3&units=metric&type=three_hour&mode=json&lang=en`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e68df85751msh449107fb3fb89afp1c67c4jsn7acbb6f98c82',
		'x-rapidapi-host': 'weather-api167.p.rapidapi.com',
		Accept: 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
  document.querySelector(".weather").innerHTML = ` 
<h3>${result.list[0].main.temprature} ℃ </h3>
<p class="fs-5">${result.city.name} </p>
<h5>${result.list[0].summery}</h5>
<div class="d-flex justify-content-between"> <p> ${result.list[0].main.humidity} humidity </p>
<p> ${result.list[0].wind.speed} wind speed </p>

 </div>

 `;
} catch (error) {
	console.error(error);
}
}
window.addEventListener("load" , ()=>{
  weather("dhaka");
})

search.addEventListener("click", ()=>{
  weather(city.value);
}
)