const temp = document.querySelector('#suhu')
const city = document.querySelector('#kota')
const humidity = document.querySelector('#persent')
const speed = document.querySelector('#speed')
const weather = document.querySelector('#cuaca')
const desc = document.querySelector('#desc')

function halo() {

    const kota = document.getElementById('city')
    const city = kota.value
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6228527dc43c062e4e70249b8f667937&units=metric`
    event.preventDefault()

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('maaf nama Kota yang anda cari tidak terdaftar :(');
    }
    return response.json();
  })
  .then(data => {
    kelola(data)
  })
  .catch(error => console.error('There was a problem with the fetch operation:', error));
}


function kelola(data) {

    const kota = data.city.name
    const suhu = data.list[0].main.temp
    const humi = data.list[0].main.humidity
    const windSpeed = data.list[0].wind.speed
    const cuaca = data.list[0].weather[0].main

    temp.textContent = suhu + '°c'
    city.textContent = kota
    humidity.textContent = humi
    speed.textContent = windSpeed
    desc.textContent = cuaca

    if (cuaca === 'Clouds') {
      weather.src = 'img/clouds.png'
    } else if (cuaca === 'Rain') {
      weather.src = 'img/rain.png'
    } else if (cuaca === 'Snow') {
      weather.src = 'img/snow.png'
    } else if (cuaca === 'Clear') {
      weather.src = 'img/clear.png'
    } else if (cuaca === 'Mist') {
      weather.src = 'img/mist.png'
    } else {
      weather.src = 'drizzle.png'
    }
    




}

