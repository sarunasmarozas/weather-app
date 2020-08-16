import React, { useState, useCallback } from 'react';

export const CityQueryContext = React.createContext({ 
    city: '',
    // even though name param seems unused
    setCity: (name: string) => {},
});

const CityQueryProvider: React.FC = ({ children }) => {
    const [cityQuery, setCityQuery] = useState<string>('Vilnius');

    const onCityChange = useCallback((city) => {
        setCityQuery(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cityQuery]);

    return (
        <CityQueryContext.Provider 
            value={{
                city: cityQuery, 
                // name parameter passes here
                setCity: onCityChange
            }}
        >{ children }
        </CityQueryContext.Provider>
    );
};

export default CityQueryProvider;
