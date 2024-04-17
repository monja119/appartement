import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
    const [mofonainaData, setMofonainaData] = useState();
    const [vaovao, setVaovao] = useState();
    const [fandaharana, setFandaharana ] = useState()
    const [gamesData, setGamesData] = useState()

    return (
        <DataContext.Provider value={{
            mofonainaData,
            setMofonainaData,
            vaovao,
            setVaovao,
            fandaharana,
            setFandaharana,
            gamesData,
            }}>
            {children}
        </DataContext.Provider>
    );
    
}

export function useData() {
  return useContext(DataContext);
}