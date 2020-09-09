import React, { Component } from 'react';
import Logo from '../../statics/logo.png'
import './style.less'

class Header extends Component {
  render() { 
    return (
      <div className='headerWrapper'>
        <a href='/' className="headerLogo">
          <img alt='logo' src={Logo} />
        </a>
        <nav className='headerNav left'>
          <a href="/">发现</a>
          <a href="/">关注</a>
          <a href="/">消息</a>
        </nav>
        <nav className='headerNav right'>
          <a href="/">Aa</a>
          <a href="/">登录</a>
        </nav>
      </div>
    );
  }
}

export default Header
 