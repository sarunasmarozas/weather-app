import React, { useState, useEffect } from 'react';

import { MeteoTimestamp } from '../../../api/meteo/types/meteo.types';
import { getCurrentWeekForecast } from '../../../api/meteo/meteo.api';
import AdaptiveToScreenSizeTableRow from './AdaptiveToScreenSizeTableRow/AdaptiveToScreenSizeTableRow';

const WeekTable: React.FC = () => {
    const [weekData, setWeekData] = useState<Array<MeteoTimestamp>>();
    
    useEffect(() => {
        if (!weekData) {
            getCurrentWeekForecast('vilnius', new Date())
                .then(data => {
                    setWeekData(data);
                })
            .catch(err => console.log('An error occurred while fetching data: ', err))
        } else return
    }, [weekData]);

    const dayOne = weekData?.filter((timestamp, i) => i <= 5 );
    const dayTwo = weekData?.filter((timestamp, i) => i >= 6 && i <= 11 );
    const dayThree = weekData?.filter((timestamp, i) => i >= 12 && i <= 17 );
    const dayFour = weekData?.filter((timestamp, i) => i >= 18 && i <= 23 );
    const dayFive = weekData?.filter((timestamp, i) => i >= 24 && i <= 29 );
    const daySix = weekData?.filter((timestamp, i) => i >= 30 && i <= 35 );
    const daySeven = weekData?.filter((timestamp, i) => i >= 36 && i <= 41 );
    

    return (
        <div className="week--table__container">
            <div className="week--table__row">
                {/* this is why Meteo API would need an alternative in real life */}
                {/* let's do the bitter sweet hardcoding */}
                <p>{''}</p>
                <p>06:00</p>
                <p>10:00</p>
                <p>14:00</p>
                <p>18:00</p>
                <p>22:00</p>
                <p>02:00</p>
            </div>
            <AdaptiveToScreenSizeTableRow dayData={dayOne} colNumber={1} />
            <AdaptiveToScreenSizeTableRow dayData={dayTwo} colNumber={2} />
            <AdaptiveToScreenSizeTableRow dayData={dayThree} colNumber={3} />
            <AdaptiveToScreenSizeTableRow dayData={dayFour} colNumber={4} />
            <AdaptiveToScreenSizeTableRow dayData={dayFive} colNumber={5} />
            <AdaptiveToScreenSizeTableRow dayData={daySix} colNumber={6} />
            <AdaptiveToScreenSizeTableRow dayData={daySeven} colNumber={7} />
        </div>
    );
}

export default WeekTable;