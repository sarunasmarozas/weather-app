import React from 'react';

import { MeteoTimestamp } from '../../../../../../api/meteo/types/meteo.types';
import { getDayShorthand, today } from '../../../../../../helpers/date.helpers';
import HourCell from './HourCell';

interface LargerScreenRowProps {
    dayData: MeteoTimestamp[] | undefined;
    rowNumber: number;
}

const LargerScreenRow: React.FC<LargerScreenRowProps> = ({ dayData, rowNumber }) => {
    dayData?.unshift({
        day: new Date()
    });

    return (
        <div className="week--table__row">
            { dayData?.map((day, i) => (
                <React.Fragment key={i}>
                    { day.day 
                        ? (<div className="week--table__day-name--slot">{getDayShorthand(day.day, rowNumber) === today ? 'Today' : getDayShorthand(day.day, rowNumber)}</div>) 
                        : (<HourCell day={day} rowNumber={rowNumber} isNow={true}/>) 
                    }
                </React.Fragment>    
            )) }
        </div>
    );
};

export default LargerScreenRow;
