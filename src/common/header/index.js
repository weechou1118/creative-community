import React, { Component } from 'react';
import Logo from '../../statics/logo.png'
import Styles from './style.module.less'

class Header extends Component {
  render() { 
    return (
      <div className={Styles.headerWrapper}>
        <a href='/' className={Styles.headerLogo}>
          <img alt='logo' src={Logo} />
        </a>
        <nav className={`${Styles.headerNav} ${Styles.right}`}>
          <a href="/" className='iconfont'>&#xe636;</a>
          <a href="/">登录</a>
          <a className={Styles.registerButton} href="/">注册</a>
          <a className={Styles.writeButton} href="/"><i className='iconfont'>&#xe676;</i>写文章</a>
        </nav>
        <div className={Styles.navWrapper}>
          <nav className={`${Styles.headerNav} ${Styles.left}`}>
            <a href="/" className={Styles.active}>发现</a>
            <a href="/">关注</a>
            <a href="/">消息</a>
            <div className={Styles.searchWrapper}>
              <div className={Styles.search}>
                <input placeholder='搜索' />
                <span><i className='iconfont'>&#xe614;</i></span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header
 