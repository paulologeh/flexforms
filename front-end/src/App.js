import React, { Component } from 'react';
// Router
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
// Styles
import './App.css';
// Context
import { CreatorsProvider } from 'context/contextCreator'

class App extends Component {

  componentDidMount() {
    console.clear()
  }

  render() {
    return (
      <CreatorsProvider>
        <div className='App'>
          <BrowserRouter>
            <RouterConfig/>
          </BrowserRouter>
        </div>
       </CreatorsProvider>
    )
  }
}

export default App;