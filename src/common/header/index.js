import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Logo from '../../statics/logo.png'
import Styles from './style.module.less'

class Header extends Component {
  componentDidMount() {
    this.props.handleGetTags(5)
  }
  render() {
    const { focused, handleInputFocused, handleInputBlured } = this.props 
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
                <input 
                  placeholder='搜索' 
                  className={focused ? Styles.focused: ''}
                  onFocus={handleInputFocused}    
                  onBlur={handleInputBlured}
                />
                {this.getListArea()}
                <span className={Styles.fangdajing}><i className='iconfont'>&#xe614;</i></span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
  getListArea () {
    const { focused, mouseIn, loading } = this.props
    if (focused || mouseIn) {
      return (
        <div className={Styles.searchInfoWrapper} 
            onMouseEnter={this.props.handleMouseEnter}
            onMouseLeave={this.props.handleMouseLeave}
        >
          <div className={Styles.searchInfo}>
            <div className={Styles.searchTitle}>
              <b style={{'fontWeight': '700'}}>热门搜索</b>
            </div>
            <ul className={Styles.tagList}>
            {
              loading ?
              (<div>加载中</div>)
              :this.props.list.map((item,index) => {
                return (
                  <li key={index}><a href='/'>{item}</a></li>
                )
              })
            }
          </ul>
            <span className={Styles.changeListButton} onClick={()=>{this.props.handleGetTags(5)}}><i className={`iconfont ${loading?Styles.loading:null}`}>&#xe65c;</i>换一批</span>
          </div>
        </div> 
      )
    } else {
      return null
    }
  }
}

// 将state和dispatch映射到props
const mapStateToProps = (state) => {
  // combineReducers 里的get
  const header = state.get('header')
  return {
    // 把store里的focused 映射到当前实例的props里
    // get 是redux-immutable->combineReducers提供的方法
    // 获取将reducer按组件区分, 在根组件的reducer中用combineReducers结合, 再根据键名获取属性

    // fromJS里的get
    focused: header.get('focused'),
    list: header.get('list'),
    loading: header.get('loading'),
    mouseIn: header.get('mouseIn')
  }
}

// 将dispatch 映射到 props 中
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocused() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlured() {
      dispatch(actionCreators.searchBlur())
    },
    handleGetTags(count) {
      dispatch(actionCreators.getTags(count))
    },
    handleMouseEnter() {
      dispatch(actionCreators.changeMouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.changeMouseLeave())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)
 