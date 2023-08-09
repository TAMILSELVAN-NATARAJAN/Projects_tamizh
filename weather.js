let cityname = document.getElementById('cityname');
let Temperatue = document.getElementById('temp')
let Humdity = document.getElementById('humi')
let wind_speed = document.getElementById('wind')
let climate = document.getElementById('climate')
let city = document.getElementById('city')
let btn = document.getElementById('btn');
let dis =document.getElementById('dis');
let err =document.getElementById('error');

const api_key ="4845cb1aacd775f51ed77ef03063470e";

const api_url ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkweather(citys)
{
    const response = await fetch(api_url+citys+`&appid=${api_key}`);

    
  if(response.status == 404)
  {
    console.log("error");
    err.classList.remove('hidden');
    dis.classList.add('hidden');


  }else{
    var data = await response.json();
    city.innerText =data.name;
    Temperatue.innerText=data.main.temp +'°C';

    Humdity.innerText=data.main.humidity+'%';

    wind_speed.innerText=data.wind.speed +'Km/hr';
    climate.innerText=data.weather[0].main;

    err.classList.add('hidden');
     dis.classList.remove('hidden');

     console.log(data);
}
}
btn.addEventListener('click', ()=>{
    console.log(cityname.value);
    checkweather(cityname.value);
})
   
//checkweather();