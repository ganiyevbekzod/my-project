import ReactDOM from 'react-dom/client'
import App from "./App"
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "./Context/ThemeContext";
import { ContrastProvider } from "./Context/ContrastContext";
import { RtlProvider } from "./Context/RtlContext";
import { CompactProvider } from "./Context/CompactContext";
import { LayoutProvider } from "./Context/LayoutContext";
import { ColorProvider } from "./Context/ColorContext";
import { PresetProvider } from "./Context/PresetContext";
import { FontProvider } from "./Context/FontContext";
import { SidebarProvider } from "./Context/SidebarContext.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <ContrastProvider>
      <RtlProvider>
        <CompactProvider>
          <LayoutProvider>
            <ColorProvider>
              <PresetProvider>
                <FontProvider>
                  <SidebarProvider>
                    <BrowserRouter>
                      <App />
                    </BrowserRouter>
                  </SidebarProvider>
                </FontProvider>
              </PresetProvider>
            </ColorProvider>
          </LayoutProvider>
        </CompactProvider>
      </RtlProvider>
    </ContrastProvider>
  </ThemeProvider>
);