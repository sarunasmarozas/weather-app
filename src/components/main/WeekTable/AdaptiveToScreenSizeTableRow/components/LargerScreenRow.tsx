import React from 'react';
import moment from 'moment';

import { MeteoTimestamp } from '../../../../../api/meteo/types/meteo.types';
import CurrentConditionsIcon from '../../../DayTable/CurrentConditionsIcon';
import { getHours, getDayShorthand } from '../../../../../api/meteo/helpers/date.helpers';
import { ReactComponent as WindDirection } from '../../../../../assets/icons/wind-direction.svg';

interface LargerScreenRowProps {
    dayData: MeteoTimestamp[] | undefined;
    rowNumber: number;
}


const LargerScreenRow: React.FC<LargerScreenRowProps> = ({ dayData, rowNumber }) => {
    const dayTimeFn = () => getHours(new Date()) <= 18 ? true : false;
    const today = moment().format('ddd');

    // push day name column to start of row
    dayData?.unshift({
        day: new Date()
    });

    return (
        <div className="week--table__row">
            { dayData?.map((day, i) => (
                <React.Fragment key={i}>
                        { day.day 
                            ? (<div className="week--table__day-name--slot">{getDayShorthand(day.day, rowNumber) === today ? 'Today' : getDayShorthand(day.day, rowNumber)}</div>) 
                            : (<div className={`week--table__conditions--cell-container week--table__conditions-row-${rowNumber}`}>
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col week--table__conditions--icon">
                                            <CurrentConditionsIcon 
                                                dayTime={dayTimeFn()} 
                                                conditions={day?.conditionCode}   
                                            />
                                        </div>
                                        <div className="col">
                                            <span className="week--table__conditions--temperature">{day?.airTemperature}</span>
                                            <span className="week--table__conditions--degrees">o</span>
                                        </div>
                                    </div>
                                    <div className="row day-table__row--small">
                                        <div className="col-1 px-0">
                                            <WindDirection className="day-table__icon--small" />
                                        </div>
                                        <div className="col-11 px-0">
                                            <p className="day-table__text--small pl-2">{day?.windSpeed} ms</p>
                                        </div>
                                    </div>
                                </div>
                            ) 
                        }
                </React.Fragment>    
            )) }
        </div>
    );
};

export default LargerScreenRow;
