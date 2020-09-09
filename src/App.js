import React, { Component } from 'react';
import { GlobalStyle } from './styled'
import Header from './common/header'

class App extends Component {
  render() { 
    return ( 
      <div className="app">
        <GlobalStyle />
        <Header />
      </div>
    );
  }
}
 
export default App;