import reducer, { initialState } from './reducer';
import React, { createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext({});

export const DataLayer = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState , () => initialState);

	return(
		<DataLayerContext.Provider value={[state, dispatch]}>
			{children}
		</DataLayerContext.Provider>
	);
}


export const useDataLayerValue = () => useContext(DataLayerContext);

