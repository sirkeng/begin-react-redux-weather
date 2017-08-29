import axios from 'axios';

const API_KEY = 'b9b9a535c045b1bec8dc470ad8aeb87e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	// console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}