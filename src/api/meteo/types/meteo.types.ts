export type MeteoTimestamp = {
    airTemperature?: number,
    cloudCover?: number,
    conditionCode?: CurrentWeatherConditions,
    forecastTimeUtc?: Date,
    day?: Date,
    relativeHumidity?: number,
    seaLevelPressure?: number,
    totalPrecipitation?: number,
    windDirection?: number,
    windGust?: number,
    windSpeed?: number
};

export type MeteoCoordinates = {
    latitude: number,
    longitude: number
};

export type MeteoPlace = {
    administrativeDivision: string,
    code: string,
    coordinates: MeteoCoordinates,
    country: string,
    countryCode: string,
    name: string
};

export type MeteoData = {
    forecastCreationTimeUtc: Date,
    forecastTimestamps: Array<MeteoTimestamp>,
    forecastType: string,
    place: MeteoPlace
};

export enum CurrentWeatherConditions {
    Clear = 'clear',
    IsolatedClouds = 'isolated-clouds',
    ScatteredClouds = 'scattered-clouds',
    Overcast = 'overcast',
    LightRain = 'light-rain',
    ModerateRain = 'moderate-rain',
    HeavyRain = 'heavy-rain',
    Sleet = 'sleet',
    LightSnow = 'light-snow',
    ModerateSnow = 'moderate-snow',
    HeavySnow = 'heavy-snow',
    Fog = 'fog',
    Na = 'na'
};
