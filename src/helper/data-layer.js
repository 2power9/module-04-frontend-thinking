import reducer, { initialState } from './reducer';
import React, { createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext();

export const DataLayer = ({ children }) => (
	<DataLayerContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext);

