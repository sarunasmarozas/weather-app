import React, { useState, useEffect, FormEvent } from 'react';

import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg';
import { ReactComponent as BareWhiteCloud } from '../../../assets/icons/bare-white-cloud.svg';
import { ReactComponent as WindDirection } from '../../../assets/icons/wind-direction.svg';
import { ReactComponent as BareWhiteThermometer } from '../../../assets/icons/bare-white-thermometer.svg';
import { ReactComponent as HalfWhiteThermometer } from '../../../assets/icons/half-white-thermometer.svg';
import { ReactComponent as HarshWind } from '../../../assets/icons/harsh-wind.svg';
import { ReactComponent as SoftWind } from '../../../assets/icons/soft-wind.svg';
import { MeteoTimestamp } from '../../../api/meteo/types/meteo.types';
import { getCurrentDayForecast } from '../../../api/meteo/meteo.api';
import CurrentConditionsIcon from './CurrentConditionsIcon';
import { getHours } from '../../../api/meteo/helpers/date.helpers';

const DayTable: React.FC = () => {
    const defaultCity = 'Vilnius';

    const [dayData, setDayData] = useState<MeteoTimestamp | undefined>();
    const [cityQuery, setCityQuery] = useState<string>(defaultCity);

    useEffect(() => {
        if (!dayData) {
            getCurrentDayForecast(cityQuery, new Date())
                .then(data => {
                    setDayData(data);
                })
                .catch(err => console.log('An error occurred while fetching data: ', err))
        } else return;
    });
    
    const handleChange = (event: any): void => {
        const adaptedToWordSplitQuery: string = String(event.target.value).split(' ').join('-');
        
        setCityQuery(adaptedToWordSplitQuery);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        getCurrentDayForecast(cityQuery, new Date())
            .then(data => {
                setDayData(data);
            })
            .catch(err => console.log('An error occurred while fetching data: ', err))        
    };

    const dayTime = (): boolean => {
        const currentHour = getHours(new Date());

        return currentHour <= 18 ? true : false;
    }

    return (
        <div className="container day-table__container">
            <div className="row day-table__form--row">
                <form className="row day-table__row--small" onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-group day-table__search--input mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder={cityQuery ? cityQuery : 'Enter a city'} 
                            aria-label="Enter a city" 
                            onChange={(e) => handleChange(e)} 
                        />
                        <div className="input-group-append">
                            <button className="btn day-table__search--button" type="submit">
                                <SearchIcon className="day-table__icon--search" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            { dayData && (
                <div className="container">
                    <div className="row day-table__row--big">
                        <div className="col-5 pl-0">
                            <CurrentConditionsIcon conditions={dayData.conditionCode} dayTime={dayTime()}/>
                        </div>
                        <div className="col-7 pl-lg-1 pl-xl-0 d-flex align-items-start">
                            <span className="day-table__text--temperature">{dayData?.airTemperature}</span>
                            <span className="day-table__text--degrees">o</span>
                        </div>
                    </div>
                    <div className="row day-table__row--big">
                        <p><strong>Now it's {dayData?.conditionCode}</strong></p>
                    </div>
                    <div className="row day-table__row--small">
                        <div className="col-1 px-0">
                            <SoftWind className="day-table__icon--small" />
                        </div>
                        <div className="col-11 px-0">
                            <p className="day-table__text--small pl-2">Wind speed: {dayData?.windSpeed}</p>
                        </div>
                    </div>
                    <div className="row day-table__row--small">
                        <div className="col-1 px-0">
                            <HarshWind className="day-table__icon--small" />
                        </div>
                        <div className="col-11 px-0">
                            <p className="day-table__text--small pl-2">Wind gust: {dayData?.windGust}</p>
                        </div>
                    </div>
                    <div className="row day-table__row--small">
                        <div className="col-1 px-0">
                            <WindDirection className="day-table__icon--small" />
                        </div>
                        <div className="col-11 px-0">
                            <p className="day-table__text--small pl-2">Wind direction: {dayData?.windDirection}</p>
                        </div>
                    </div>
                    <div className="row day-table__row--small">
                        <div className="col-1 px-0">
                            <BareWhiteCloud className="day-table__icon--small" />
                        </div>
                        <div className="col-11 px-0">
                            <p className="day-table__text--small pl-2">Cloud cover: {dayData?.cloudCover}</p>
                        </div>
                    </div>
                    <div className="row day-table__row--small">
                        <div className="col-1 px-0">
                            <BareWhiteThermometer className="day-table__icon--small" />
                        </div>
                        <div className="col-11 px-0">
                            <p className="day-table__text--small pl-2">Sea level pressure: {dayData?.seaLevelPressure}</p>
                        </div>
                    </div>
                    <div className="row day-table__row--small">
                        <div className="col-1 px-0">
                            <HalfWhiteThermometer className="day-table__icon--small" />
                        </div>
                        <div className="col-11 px-0">
                            <p className="day-table__text--small pl-2">Total precipitation: {dayData?.totalPrecipitation}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DayTable;