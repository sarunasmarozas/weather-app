import axios from 'axios';

import { makeUrl } from './helpers/url.helpers';
import { MeteoData } from '../meteo/types/meteo.types';


const http = axios.create({
    baseURL: 'http://localhost:3000/v1',
    headers: {
        'Accept': 'application/json', 
    },
});

const url = {
    places: '/places',
    placesByCode: '/places/{place}',
    placesByCodeForecast: '/places/{place}/forecasts/{forecastType}',
};

export const getForecastByType = async (place: string, forecastType: string) => {
    const response = await http.get<MeteoData>(makeUrl(url.placesByCodeForecast, { place, forecastType }));

    return response.data;
};