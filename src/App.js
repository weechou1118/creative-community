import React, { Component } from 'react';
import { GlobalStyle, IconFont, ShowTransition } from './styled'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import Detail from './pages/detail'
import Home from './pages/home'
import {store} from './store'

class App extends Component {
  render() { 
    return (  
        <Provider store={store}>
          <GlobalStyle />
          <ShowTransition />
          <IconFont />
          <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/detail/:id" component={Detail}></Route>
          </BrowserRouter>
        </Provider>
    );
  }
}
 
export default App;