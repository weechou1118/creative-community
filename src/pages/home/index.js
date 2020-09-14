import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getHomeList } from './store/actionCreator'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import Styles from './style.module.less'

class Home extends Component {
  componentDidMount() {
    this.props.handleGetList()
  }
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

const mapState = state => ({
  topicList: state.getIn(['home', 'topicList']),
  articleList: state.getIn(['home', 'articleList']),
  recommendList: state.getIn(['home', 'recommendList']),
  writerList: state.getIn(['home', 'writerList']),
})

const mapDispatch = dispatch => {
  return {
    handleGetList() {
      dispatch(getHomeList())
    }
  }
}

export default connect(mapState, mapDispatch)(Home);