import React, { createContext, useContext, useState } from 'react';

const ContrastContext = createContext();

export const ContrastProvider = ({ children }) => {
  const [contrastMode, setContrastMode] = useState(false);
  const toggleContrast = () => setContrastMode((prev) => !prev);

  return (
    <ContrastContext.Provider value={{ contrastMode, toggleContrast }}>
      {children}
    </ContrastContext.Provider>
  );
};

export const useContrast = () => useContext(ContrastContext);

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

const LayoutContext = createContext();
export const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState('sidebar'); // yoki 'topbar', 'minimal'
  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};
export const useLayout = () => useContext(LayoutContext);

const ColorContext = createContext();
export const ColorProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState('integrate'); // yoki 'apparent'
  return (
    <ColorContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ColorContext.Provider>
  );
};
export const useColorScheme = () => useContext(ColorContext);

const PresetContext = createContext();
export const PresetProvider = ({ children }) => {
  const [preset, setPreset] = useState('green'); // yoki 'blue', 'purple', ...
  return (
    <PresetContext.Provider value={{ preset, setPreset }}>
      {children}
    </PresetContext.Provider>
  );
};
export const usePreset = () => useContext(PresetContext);

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