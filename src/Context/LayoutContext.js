import React, { createContext, useContext, useState } from 'react';
const LayoutContext = createContext();
export const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState('sidebar');
  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};
export const useLayout = () => useContext(LayoutContext); 