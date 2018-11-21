import React from 'react';

const data = {
    lat: 0,
    long:0
}

const DataContext = React.createContext(data);


export const DataProvider = DataContext.Provider;
export const DataConsumer = DataContext.Consumer;

