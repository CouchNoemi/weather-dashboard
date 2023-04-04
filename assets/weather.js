var cityName = document.querySelector('#cityName');
var temp1 = document.querySelector('#tmp1');
var hum1 = document.querySelector('#hum1');
var wind1 = document.querySelector('#wind1');
function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    return;
  }

  console.log("city is>>>", city);

  const apiKey = "2bda322124cc7c43e43314d9953b3b7c";

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      var name = data.city.name;
      cityName.textContent = data.city.name;

      console.log(new Date(1680987600 * 1000).toLocaleDateString())

      //determine what time it currently in city
      //lok into the data array list and get values for the forcasted time


      console.log(`localStorage ${name} - ${localStorage.getItem(name)}`);
      console.log(localStorage.getItem(name));
      const historyElement = document.querySelector(".history");
      localStorage.setItem(name, JSON.stringify(data));
      let historyItem = localStorage.getItem(name);
      console.log(historyItem);
      const button = document.createElement("button");
      button.textContent = name;
      historyElement.appendChild(button);
      //   if (main === cloudy) {

      //   }else if () {

      //   }else if () {

      //   }
      document.getElementById("temp1").innerHTML = data.list[0].main.temp;
      document.getElementById("hum1").innerHTML = data.list[0].main.humidity;
      document.getElementById("wind1").innerHTML = data.list[0].wind.speed;
    });
}
getWeather();

// let day1 = data.list[0];
// let day2 = data.list[1].main;
// let day3 = data.list[2].main;
// let day4 = data.list[3].main;
// let day5 = data.list[4].main;

// let temp = day1.main.temp;
// let humidity = day1.main.humidity;
// let wind = day1.wind.speed;

// const url =
//   "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={2bda322124cc7c43e43314d9953b3b7c}";
