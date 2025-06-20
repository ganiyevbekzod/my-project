import React, { createContext, useContext, useState } from 'react';
const RtlContext = createContext();
export const RtlProvider = ({ children }) => {
  const [isRtl, setIsRtl] = useState(false);
  const toggleRtl = () => setIsRtl(rtl => !rtl);
  return (
    <RtlContext.Provider value={{ isRtl, toggleRtl }}>
      {children}
    </RtlContext.Provider>
  );
};
export const useRtl = () => useContext(RtlContext); 