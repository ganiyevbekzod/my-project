import { createContext, useContext, useState } from 'react';

// 1. Context yaratish
const HeaderContext = createContext();

// 2. Provider komponenti
export const HeaderProvider = ({ children }) => {
  const [headerBgColor, setHeaderBgColor] = useState('#fff'); // Default: oq fon
  const [headerTextColor, setHeaderTextColor] = useState('#2A3042'); 

  // Ranglarni o‘zgartirish funksiyasi
  const changeHeaderColors = (bgColor, textColor) => {
    setHeaderBgColor(bgColor);
    setHeaderTextColor(textColor);
  };

  return (
    <HeaderContext.Provider
      value={{
        headerBgColor,
        headerTextColor,
        changeHeaderColors,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

// 3. Custom hook
export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
};
