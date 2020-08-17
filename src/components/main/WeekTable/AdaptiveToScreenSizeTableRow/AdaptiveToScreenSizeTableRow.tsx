import React, { useState } from 'react';

import { MeteoTimestamp } from '../../../../api/meteo/types/meteo.types';
import MobileDeviceRow from './components/MobileDeviceRow';
import LargerScreenRow from './components/LargerScreenRow/LargerScreenRow';

interface AdaptiveToScreenSizeTableRowProps {
    dayData: MeteoTimestamp[] | undefined;
    rowNumber: number;
}

const AdaptiveToScreenSizeTableRow: React.FC<AdaptiveToScreenSizeTableRowProps> = ({ dayData, rowNumber }) => {
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
        <div>
            { isMobileScreenSize 
            ? (<MobileDeviceRow dayData={dayData} />) 
            : (<LargerScreenRow dayData={dayData} rowNumber={rowNumber} />) }
        </div>
    );
};

export default AdaptiveToScreenSizeTableRow;
