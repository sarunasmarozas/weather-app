import React from 'react';

import DayTable from './DayTable/DayTable';
import WeekTable from './WeekTable/WeekTable';
import { getCurrentWeekDays } from '../../helpers/date.helpers';
import CityQueryProvider from '../../providers/CityQueryProvider';

const Main: React.FC = () => {
    const currentDay = getCurrentWeekDays();

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 weathy-main__container">
                    <div className="container">
                        <CityQueryProvider>
                            <div className="row">
                                <div className="col-md-3">
                                        <DayTable />
                                </div>
                                <div className="col-md-9">
                                    <h4 className="weathy-main__today-header">{currentDay}</h4>
                                    <WeekTable />
                                </div>
                            </div>
                        </CityQueryProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
