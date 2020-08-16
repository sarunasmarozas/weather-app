import axios from 'axios';

import { makeUrl } from './helpers/url.helpers';
import { formatDate } from './helpers/date.helpers';
import { MeteoData, MeteoTimestamp } from '../meteo/types/meteo.types';

const forecastType = 'long-term';

const http = axios.create({
    baseURL: 'http://localhost:3000/v1',
    headers: {
        'Accept': 'application/json', 
    },
});

const url = {
    places: '/places',
    placesByCode: '/places/{place}/forecasts',
    placesByForecastType: '/places/{place}/forecasts/{forecastType}',
};

// Get data on initial app load
export const getCurrentWeekForecast = async (place: string, startDate: Date): Promise<Array<any>> => {
    const response = await http
        .get<MeteoData>(makeUrl(url.placesByForecastType,
            { place, forecastType: forecastType })
        );
        
        // Meteo API grazina skirtinga timestamp'u skaiciu kiekvienai savaites dienai, bet visada 84 is viso.
        // Todel tiesiog pasiimame 42 timestampus, nes tiek reikia septynioms dienoms.
        // Realybeje taip daryti negaletume, todel galbut reiktu alternatyvos Meteo API.
        const currentWeekData: MeteoTimestamp[] = response.data.forecastTimestamps.filter((timestamp, index) => index % 2 === 0);
        
        return currentWeekData;
    };
    
// Get data on each search
export const getCurrentDayForecast = async (place: string, date: Date): Promise<MeteoTimestamp | undefined> => {
    const response = await http
        .get<MeteoData>(makeUrl(url.placesByForecastType, 
            { place, forecastType: forecastType })
        );

    const currentDayForecast = response.data.forecastTimestamps.find(ts => ts.forecastTimeUtc?.toString() === formatDate(date));

    return currentDayForecast;
};
