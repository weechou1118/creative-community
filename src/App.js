import React, { Component } from 'react';
import { GlobalStyle, IconFont } from './styled'
import Header from './common/header'

class App extends Component {
  render() { 
    return ( 
      <div className="app">
        <GlobalStyle />
        <IconFont />
        <Header />
      </div>
    );
  }
}
 
export default App;