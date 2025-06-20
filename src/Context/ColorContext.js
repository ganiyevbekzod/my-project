import React, { createContext, useContext, useState } from 'react';
const ColorContext = createContext();
export const ColorProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState('integrate');
  return (
    <ColorContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ColorContext.Provider>
  );
};
export const useColorScheme = () => useContext(ColorContext); 