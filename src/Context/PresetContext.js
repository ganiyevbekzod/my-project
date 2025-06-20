import React, { createContext, useContext, useState } from 'react';
const PresetContext = createContext();
export const PresetProvider = ({ children }) => {
  const [preset, setPreset] = useState('green');
  return (
    <PresetContext.Provider value={{ preset, setPreset }}>
      {children}
    </PresetContext.Provider>
  );
};
export const usePreset = () => useContext(PresetContext); 