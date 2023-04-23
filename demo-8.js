// Homework:
// Using a HTML/JS file in the browser-
// Use axios to get weather data from the API I showed at the start of the lesson
// Wrap the axios call in an async function
// Use await before the axios call
// Destructure the response to get the { data } part of the response
// Console.log the weather data (this will show you completed the above)

async function weather() {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=48.8566&lon=2.3522&appid=00fd3601a5ec4393d8fc6091e478e2f8`
    );

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

weather();
