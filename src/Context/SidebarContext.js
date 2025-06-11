// context/SidebarContext.js
import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const defaultState = false;

// export const SidebarProvider = ({ children }) => {
//   const [isOpenSidebar, setIsOpen] = useState(false);

  const toggleSidebar = () => {  //Holatni o'zgartirish
    
    setIsOpen(!isOpen);
  };
//    const openSidebar = () => {
//     setIsOpen(true);
//   };

  const resetSidebar = () => {
    setIsOpen(defaultState); // Default holatga qaytarish
  };
//     const closeSidebar = () => {
//     setIsOpen(false);
//   };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar,resetSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};


