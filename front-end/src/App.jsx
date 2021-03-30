import React, { Component } from 'react';
// Styles
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from 'navigation/RouterConfig';
import { AppHeader, AppFooter } from 'pages/Home/components';
import {AuthProvider} from 'context/AuthContext'


class App extends Component {

  componentDidMount() {
    console.clear()
  }

  render() {
    return (
      <div className="App">
        <AuthProvider>
          <AppHeader/>
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
          <AppFooter />
        </AuthProvider>
      </div>
    )
  }
}

export default App;