import React, { createContext, useContext, useState } from 'react';
const FontContext = createContext();
export const FontProvider = ({ children }) => {
  const [fontFamily, setFontFamily] = useState('Public Sans');
  const [fontSize, setFontSize] = useState(16);
  return (
    <FontContext.Provider value={{ fontFamily, setFontFamily, fontSize, setFontSize }}>
      {children}
    </FontContext.Provider>
  );
};
export const useFont = () => useContext(FontContext); 