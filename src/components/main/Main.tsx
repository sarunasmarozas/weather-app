import React from 'react';

import DayTable from './DayTable/DayTable';
import WeekTable from './WeekTable/WeekTable';


const Main: React.FC = () => {
    return (
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-12 weathy-main__container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <DayTable />
                            </div>
                            <div className="col-md-8">
                                <WeekTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;