import React, { Component } from "react";
// Styles
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
import { AuthProvider } from "context/AuthContext";

class App extends Component {
  componentDidMount() {
    console.clear();
  }

  render() {
    return (
      <div className="App">
        <AuthProvider>
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
