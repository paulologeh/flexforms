import React, { useState } from "react";

//Css files
import "./App.css";

// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";

// Global States
import { ToolStoreProvider } from "contexts/toolsContext";
import { FormStoreProvider } from "contexts/formContext";
import { MediaContextProvider, mediaStyles } from "styles/mediaStyles";

// Theming
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/globalStyles";
import { lightTheme, darkTheme } from "styles/Theme";
import { ThemeSwitch } from "components/ThemeSwitch";

import { Sticky } from "semantic-ui-react";

const App = () => {
  const [darkState, setDarkState] = useState(false);
  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.debug("theme=", darkState ? "dark" : "light");
  };

  return (
    <>
      <ThemeProvider theme={darkState ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaContextProvider>
          <style>{mediaStyles}</style>
          <ToolStoreProvider>
            <FormStoreProvider>
              <BrowserRouter>
                {/* disabling dark mode. Will complete later */}
                {darkState && (
                  <Sticky style={{}}>
                    <ThemeSwitch
                      darkState={darkState}
                      handleThemeChange={handleThemeChange}
                    />
                  </Sticky>
                )}
                <RouterConfig />
              </BrowserRouter>
            </FormStoreProvider>
          </ToolStoreProvider>
        </MediaContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
