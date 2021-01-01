import React, { Component } from 'react';
// Router
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
// Styles
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <RouterConfig/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;