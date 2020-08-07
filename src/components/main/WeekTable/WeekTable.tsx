import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { getForecastByType } from '../../../api/meteo/meteo.api';
import { MeteoData } from '../../../api/meteo/types/meteo.types';

const WeekTable: React.FC = () => {
    const [data, setData] = useState<MeteoData | undefined>(undefined);
    
    useEffect(() => {
        if (!data) {
            getForecastByType('vilnius', 'long-term')
                .then(data => {
                    setData(data);
                })
            .catch(err => console.log('An error occurred while fetching data: ', err))
        } else return
    }, [data]);

    let week = [];
    const currentDate = moment();
    const weekStart = currentDate.clone().startOf('isoWeek');

    const hours = ['03:00', '09:00', '15:00', '18:00', '21:00', '00:00'];

    for (let i = 0; i <= 6; i++) {
        week.push(moment(weekStart).add(i, 'days').format("dddd"));
    }

    return (
        <table>
            <thead>
                <tr>
                    <td className="borderless"></td>
                    {hours.map(hour => {
                        return (
                            <td key={hour}>{hour}</td>
                        );
                    })}
                </tr>
                {week.map(day => {
                    return (
                        <tr key={day}>
                            <td className="borderless">
                                <p>{day}</p>
                            </td>
                            <td>
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col p-2">
                                            <strong>Temp.:</strong>
                                            <p>20 degrees</p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col p-2">
                                            <strong>Precipit.:</strong>
                                            <p>30% chance</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col p-2">
                                            <strong>Temp.:</strong>
                                            <p>20 degrees</p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col p-2">
                                            <strong>Precipit.:</strong>
                                            <p>30% chance</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col p-2">
                                            <strong>Temp.:</strong>
                                            <p>20 degrees</p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col p-2">
                                            <strong>Precipit.:</strong>
                                            <p>30% chance</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col p-2">
                                            <strong>Temp.:</strong>
                                            <p>20 degrees</p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col p-2">
                                            <strong>Precipit.:</strong>
                                            <p>30% chance</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col p-2">
                                            <strong>Temp.:</strong>
                                            <p>20 degrees</p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col p-2">
                                            <strong>Precipit.:</strong>
                                            <p>30% chance</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col p-2">
                                            <strong>Temp.:</strong>
                                            <p>20 degrees</p>
                                        </div>
                                    </div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col p-2">
                                            <strong>Precipit.:</strong>
                                            <p>30% chance</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </thead>
        </table>
    );

}

export default WeekTable;