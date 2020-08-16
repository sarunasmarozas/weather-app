import React, { useEffect, useState, useContext } from 'react';

import { MeteoTimestamp } from '../../../api/meteo/types/meteo.types';
import { getCurrentWeekForecast } from '../../../api/meteo/meteo.api';
import AdaptiveToScreenSizeTableRow from './AdaptiveToScreenSizeTableRow/AdaptiveToScreenSizeTableRow';
import { CityQueryContext } from '../../../providers/CityQueryProvider';

const WeekTable: React.FC = () => {
    const { city } = useContext(CityQueryContext);

    const [weekData, setWeekData] = useState<Array<MeteoTimestamp>>();
    const [cityQuery, setCityQuery] = useState<string>('Vilnius')
    
    useEffect(() => {
        setCityQuery(city);
    }, [city]);
    
    useEffect(() => {
        getCurrentWeekForecast(cityQuery, new Date())
        .then(data => {
            setWeekData(data);
        })
        .catch(err => console.log('An error occurred while fetching data: ', err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cityQuery]);
    

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
                {/* the inconsistency from API data comes down to here;
                let's do the bitter sweet hard-coding; */}
                <div>
                    <p>{''}</p>
                </div>    
                <div className="week--table__timeslot">
                    <p className="week--table__time">06:00</p>
                </div> 
                <div className="week--table__timeslot">
                    <p className="week--table__time">10:00</p>
                </div> 
                <div className="week--table__timeslot">
                    <p className="week--table__time">14:00</p>
                </div> 
                <div className="week--table__timeslot">
                    <p className="week--table__time">18:00</p>
                </div> 
                <div className="week--table__timeslot">
                    <p className="week--table__time">22:00</p>
                </div> 
                <div className="week--table__timeslot">
                    <p className="week--table__time">02:00</p>
                </div> 
            </div>
            <AdaptiveToScreenSizeTableRow dayData={dayOne} rowNumber={1} />
            <AdaptiveToScreenSizeTableRow dayData={dayTwo} rowNumber={2} />
            <AdaptiveToScreenSizeTableRow dayData={dayThree} rowNumber={3} />
            <AdaptiveToScreenSizeTableRow dayData={dayFour} rowNumber={4} />
            <AdaptiveToScreenSizeTableRow dayData={dayFive} rowNumber={5} />
            <AdaptiveToScreenSizeTableRow dayData={daySix} rowNumber={6} />
            <AdaptiveToScreenSizeTableRow dayData={daySeven} rowNumber={7} />
        </div>
    );
}

export default WeekTable;