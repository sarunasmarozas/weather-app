export type MeteoTimestamp = {
    airTemperature: number,
    cloudCover: number,
    conditionCode: string,
    forecastTimeUtc: Date,
    relativeHumidity: number,
    seaLevelPressure: number,
    totalPrecipitation: number,
    windDirection: number,
    windGust: number,
    windSpeed: number
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
