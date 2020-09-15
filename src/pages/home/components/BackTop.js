import React, { Component } from 'react';
import { backtop } from '../style.module.less'

class BackTopUI extends Component {
  render() { 
    return ( 
      <div className={backtop}>⬆</div>
    );
  }
}

export {BackTopUI};