import React, { createContext, useContext, useState } from 'react';
const CompactContext = createContext();
export const CompactProvider = ({ children }) => {
  const [isCompact, setIsCompact] = useState(false);
  const toggleCompact = () => setIsCompact(c => !c);
  return (
    <CompactContext.Provider value={{ isCompact, toggleCompact }}>
      {children}
    </CompactContext.Provider>
  );
};
export const useCompact = () => useContext(CompactContext); 