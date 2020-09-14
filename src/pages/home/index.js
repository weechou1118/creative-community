import React, { Component } from 'react';
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import Styles from './style.module.less'

class Home extends Component {
  render() {
    return (
      <div className={Styles.main}>
        <div className={Styles.homeLeft}>
          <img className={Styles.bannerImg} alt="" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic /> 
          <List />
        </div>
        <div className={Styles.homeRight}>
          <Recommend />
          <Writer />
        </div>
      </div>
    );
  }
}

export default Home;