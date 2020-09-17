import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Styles from './style.module.less'
import './entry.less'

class Login extends Component {
  render() { 
    return (  
      <div className={Styles.main}>
        <div className={Styles.loginWrapper}>
          <div className={Styles.title}>
            <a href='/' className={Styles.active}>登录</a>
            <b>·</b>
            <a href='/'>注册</a>
          </div>
          <div className='sign-in-container'>
            <form id='new_session'>
              <div className='input-prepend'>
                <i className='iconfont'>&#xe622;</i>
                <input placeholder='手机号或邮箱' id='session_email_or_mobile_number'></input>
              </div>
              <div className='input-prepend'>
                <i className='iconfont'>&#xe611;</i>
                <input placeholder='密码' id='session_password'></input>
              </div>
              <div className='remember-btn'>
                <input type='checkbox' id='remember-checkbox'/>
                <label htmlFor='remember-checkbox'>记住我</label>
              </div>
              <div className='forget-btn'>
                <span>登录遇到问题?</span>
              </div>
              <button className='login-btn'>登录</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;