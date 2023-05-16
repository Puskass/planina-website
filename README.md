# Setting up everything and running application in development enviroment

## Node.js

First thing you must do is download and install **Node.js** on your machine

## Dependencies

After pulling down the code from GitHub in each service (navigate both in api and client folder) run this command in your terminal

`npm i`

## Keys

In **api** folder create another folder called config and inside of it create keys.js file. In such a file add this:

`module.exports = {mongoURI: "yourMongoURI"};`

And instead of yourMongoURI add URI from your MongoDB Database either it be on Atlas or run localy

## Set up OpenWeatherMap API

To fetch weather data, you need to set up an API key from OpenWeatherMap. Follow the steps below:

1. Go to the OpenWeatherMap website: ` https://openweathermap.org/`
2. Sign up for a free account or log in to your existing account.
3. After logging in, navigate to your account dashboard.
4. Click on your username in the top-right corner and select "API Keys".
5. Create a new API key and copy it.

## Set up .env file

The Weather App uses a .env file to store configuration variables, including the API key. Follow the steps below to set it up:

1. In the root directory of the project, create a new file named .env.
2. Open the .env file in VS Code.
3. Add the following line to the file, replacing YOUR_API_KEY with the API key obtained from OpenWeatherMap:

`REACT_APP_WEATHER_API_KEY=YOUR_API_KEY`
