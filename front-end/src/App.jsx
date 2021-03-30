import React, { Component } from 'react';
// Styles
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from 'navigation/RouterConfig';
import { AppHeader, AppFooter } from 'pages/Home/components';

class App extends Component {

  componentDidMount() {
    console.clear()
  }

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
        <AppFooter/>
      </div>
    )
  }
}

export default App;