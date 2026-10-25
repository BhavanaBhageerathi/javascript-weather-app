# Weather App

A web-based weather application developed using HTML, JavaScript, and Bootstrap 5. It fetches current weather information for a selected city using the OpenWeather API.

## Features

- Search for weather information by city name.
- Display temperature in Celsius.
- Show the current weather description.
- Display wind speed.
- Show a weather icon based on current conditions.
- Handle unsuccessful API requests.
- Simple user interface built with Bootstrap.

## Technologies Used

- HTML5
- JavaScript
- Bootstrap 5
- OpenWeather API
- JavaScript Fetch API
- Async/await

## Project Structure

```text
javascript-weather-app/
├── weather.html
├── weather.js
├── README.md
├── .gitignore
└── screenshots/
    ├── README.md
    ├── weather-homepage.png
    └── weather-result.png
```

## How to Run

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Configure your OpenWeather API key securely.
4. Open `weather.html` in a browser.
5. Enter a city name.
6. Click **Check weather**.
7. View the temperature, weather description, wind speed, and weather icon.

An internet connection and a valid OpenWeather API key are required to retrieve weather information.

## How It Works

1. The user enters a city name.
2. JavaScript constructs an API request for that city.
3. The Fetch API sends the request to OpenWeather.
4. The application processes the JSON response using async/await.
5. The weather information is displayed on the page.
6. If the request fails, an error message is shown.

## Future Improvements

- Improve the user interface with weather cards.
- Display humidity and feels-like temperature.
- Add a loading indicator while fetching data.
- Improve error messages for invalid cities and API failures.
- Support searching by pressing Enter.
- Keep API credentials out of publicly accessible frontend code.

## Author

Developed as a web development project to practise HTML, JavaScript, API integration, asynchronous programming, and Bootstrap.
