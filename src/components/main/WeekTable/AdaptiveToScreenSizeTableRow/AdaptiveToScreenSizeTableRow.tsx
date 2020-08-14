import React, { useState } from 'react';

import { MeteoTimestamp } from '../../../../api/meteo/types/meteo.types';
import MobileDeviceRow from './components/MobileDeviceRow';
import LargerScreenRow from './components/LargerScreenRow';

interface AdaptiveToScreenSizeTableRowProps {
    dayData: MeteoTimestamp[] | undefined;
    colNumber: number;
}

const AdaptiveToScreenSizeTableRow: React.FC<AdaptiveToScreenSizeTableRowProps> = ({ dayData, colNumber }) => {
    const [isMobileScreenSize, setIsMobileScreenSize] = useState<boolean>();

    window.addEventListener('load', () => {
        const width: number = window.innerWidth;

        return width < 770 ? setIsMobileScreenSize(true) : setIsMobileScreenSize(false);
    });

    window.addEventListener('resize', () => {
        const width: number = window.innerWidth;

        return width < 770 ? setIsMobileScreenSize(true) : setIsMobileScreenSize(false);
    });

    return (
        <div className="week--table__row">
            {isMobileScreenSize ? (<MobileDeviceRow dayData={dayData} />) : (<LargerScreenRow dayData={dayData} colNumber={colNumber}/>)}
        </div>
    );
};

export default AdaptiveToScreenSizeTableRow;
