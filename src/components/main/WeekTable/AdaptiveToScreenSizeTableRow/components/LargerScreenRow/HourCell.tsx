import React from 'react';

import CurrentConditionsIcon from '../../../../DayTable/CurrentConditionsIcon';
import { ReactComponent as WindDirection } from '../../../../../../assets/icons/wind-direction.svg';
import { MeteoTimestamp } from '../../../../../../api/meteo/types/meteo.types';
import { getHours } from '../../../../../../helpers/date.helpers';

interface HourCellProps {
    day: MeteoTimestamp;
    rowNumber: number;
    isNow: boolean;
}

const HourCell: React.FC<HourCellProps> = ({ day, rowNumber, isNow }) => {
    const dayTimeFn = () => getHours(new Date()) <= 18 ? true : false;

    return (
        <div className={`week--table__conditions--cell-container week--table__conditions-row-${rowNumber}`}>
            <div className="container">
                <div className="row p-3 justify-content-center">
                    <div className="col week--table__conditions--icon">
                        <CurrentConditionsIcon 
                            dayTime={dayTimeFn()} 
                            conditions={day?.conditionCode}   
                        />
                    </div>
                </div>
                <div className="row p-3 justify-content-center">
                    <div className="col text-center d-flex align-items-end justify-content-center">
                        <h1 className="week--table__conditions--temperature pl-1">{day?.airTemperature}</h1>
                        <p className="week--table__conditions--degrees">o</p>
                    </div>
                </div>
                <div className="row p-3 justify-content-center text-center">
                    <div className="col-1 p-0 m-0 text-center">
                        <WindDirection className="day-table__icon--small" />
                    </div>
                    <div className="col-8 p-0 m-0">
                        <p className="day-table__text--small pl-2">{day?.windSpeed} ms</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HourCell;
