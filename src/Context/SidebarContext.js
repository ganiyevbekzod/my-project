import { createContext, useContext, useState } from 'react';
const SidebarContext = createContext();
export const SidebarProvider = ({ children }) => {
  const [sidebarColor,setSidebarColor]=useState( {
    backgroundColor: '#2A3042',
    text: 'white'
  });
  const colors=[
    {value:'#2A3042',text:'white'},
    {value:'#0B1D51',text:'#fff'},
    {value:'#330867',text:'white'},
    {value:'#EFE4D2',text:'#202124'},
  ]

  
  const [isOpen, setIsOpen] = useState(false);
  const defaultState = false;
  const toggleSidebar = () => {  //Holatni o'zgartirish
    setIsOpen(!isOpen);
  };
  const resetSidebar = () => {
    setIsOpen(defaultState); // Default holatga qaytarish
  };








  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar,resetSidebar,sidebarColor,setSidebarColor,colors}}>
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


