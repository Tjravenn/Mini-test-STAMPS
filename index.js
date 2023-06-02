// let num = "";

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     num += "ApaBole, ";
//   } else if (i % 3 === 0) {
//     num += "Apa, ";
//   } else if (i % 5 === 0) {
//     num += "Bole, ";
//   } else {
//     num += i + ", ";
//   }
// }

// console.log(num);


const axios = require("axios");

const apiKey = "33caae63e7f66589d0cb8e6fe7f76bc2";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast";

const handleTheWeather = async () => {
  try {
    const { data } = await axios.get(apiUrl, {
      params: {
        lat: "-6.21",
        lon: "106.85",
        appid: apiKey,
      },
    });
    if (data) handleOutput(data);
  } catch (error) {
    console.log(error);
  }
};

const handleOutput = (data) => {
  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  let flag = [];
  console.log("Weather Forecast:");
  data.list.map((weather) => {
    const dateOnly = new Date(weather.dt_txt).getDate();
    if (!flag.includes(dateOnly)) {
      flag.push(dateOnly);
      const formattedDate = new Date(weather.dt_txt).toLocaleDateString(
        "en-US",
        options
      );
      const temp = weather.main.temp - 273.15;
      console.log(`${formattedDate}: ${temp.toFixed(2)}°C`);
    }
  });
};

handleTheWeather();
