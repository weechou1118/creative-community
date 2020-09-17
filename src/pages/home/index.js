import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { getHomeList } from './store/actionCreator'
// import { SHOW_SCROLL, HIDE_SCROLL } from '../home/store/contants'
import { BackTop } from 'antd'
import { BackTopUI } from './components/BackTop'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import Styles from './style.module.less'
import 'antd/dist/antd.css';

class Home extends PureComponent {
  render() {
    return (
      <div className={Styles.container}>
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
          <BackTop>
            <BackTopUI/>
          </BackTop>
          {/* {
            this.props.showScroll?
            : null
          } */}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.handleGetList()
    this.bindScrollEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.handleShowBackTop)
  }
  bindScrollEvents() {
    window.addEventListener('scroll', this.props.handleShowBackTop)
  }
}

const mapState = state => ({
  topicList: state.getIn(['home', 'topicList']),
  articleList: state.getIn(['home', 'articleList']),
  recommendList: state.getIn(['home', 'recommendList']),
  writerList: state.getIn(['home', 'writerList']),
  showScroll: state.getIn(['home', 'showScroll']),
})

const mapDispatch = dispatch => {
  return {
    handleGetList() {
      dispatch(getHomeList())
    },
    // handleShowBackTop() {
    //   const scrollTop = document.documentElement.scrollTop
    //   if (scrollTop >= 400) {
    //     dispatch({type: SHOW_SCROLL})
    //   } else {
    //     dispatch({type: HIDE_SCROLL})
    //   }
    // }
  }
}

export default connect(mapState, mapDispatch)(Home);