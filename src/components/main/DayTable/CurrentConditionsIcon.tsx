import React from 'react';

import { CurrentWeatherConditions } from '../../../api/meteo/types/meteo.types';
import { ReactComponent as ClearDayIcon } from '../../../assets/icons/clear-day.svg';
import { ReactComponent as ClearNightIcon } from '../../../assets/icons/clear-night.svg';
import { ReactComponent as FogIcon } from '../../../assets/icons/fog.svg';
import { ReactComponent as HeavyRainIcon } from '../../../assets/icons/heavy-rain.svg';
import { ReactComponent as HeavySnowIcon } from '../../../assets/icons/heavy-snow.svg';
import { ReactComponent as IsolatedCloudsDayIcon } from '../../../assets/icons/isolated-clouds-day.svg';
import { ReactComponent as IsolatedCloudsNightIcon } from '../../../assets/icons/isolated-clouds-night.svg';
import { ReactComponent as LightRainIcon } from '../../../assets/icons/light-rain.svg';
import { ReactComponent as LightSnowIcon } from '../../../assets/icons/light-snow.svg';
import { ReactComponent as ModerateRainIcon } from '../../../assets/icons/moderate-rain.svg';
import { ReactComponent as ModerateSnowIcon } from '../../../assets/icons/moderate-snow.svg';
import { ReactComponent as OvercastIcon } from '../../../assets/icons/overcast.svg';
import { ReactComponent as ScatteredCloudsIcon } from '../../../assets/icons/scattered-clouds.svg';
import { ReactComponent as SleetIcon } from '../../../assets/icons/sleet.svg';



interface CurrentConditionsProps {
    conditions: CurrentWeatherConditions | undefined;
    dayTime: boolean;
};

const CurrentConditionsIcon: React.FC<CurrentConditionsProps> = ({ conditions, dayTime }): any => {
    switch (conditions) {
        case CurrentWeatherConditions.Clear:
            return dayTime 
            ? <ClearDayIcon className="day-table__icon" /> 
            : <ClearNightIcon className="day-table__icon" />;
        case CurrentWeatherConditions.Fog:
            return <FogIcon className="day-table__icon" />;
        case CurrentWeatherConditions.HeavyRain:
            return <HeavyRainIcon className="day-table__icon" />;
        case CurrentWeatherConditions.HeavySnow:
            return <HeavySnowIcon className="day-table__icon" />;
        case CurrentWeatherConditions.IsolatedClouds:
            return dayTime 
            ? <IsolatedCloudsDayIcon className="day-table__icon" /> 
            : <IsolatedCloudsNightIcon className="day-table__icon" />;
        case CurrentWeatherConditions.LightRain:
            return <LightRainIcon className="day-table__icon" />;
        case CurrentWeatherConditions.LightSnow:
            return <LightSnowIcon className="day-table__icon" />;
        case CurrentWeatherConditions.ModerateRain:
            return <ModerateRainIcon className="day-table__icon" />;
        case CurrentWeatherConditions.ModerateSnow:
            return <ModerateSnowIcon className="day-table__icon" />;
        case CurrentWeatherConditions.Na:
            return <p className="text-danger">N/A</p>;
        case CurrentWeatherConditions.Overcast:
            return <OvercastIcon className="day-table__icon" />;
        case CurrentWeatherConditions.ScatteredClouds:
            return <ScatteredCloudsIcon className="day-table__icon" />;
        case CurrentWeatherConditions.Sleet:
            return <SleetIcon className="day-table__icon" />;
    }
};

export default CurrentConditionsIcon;
