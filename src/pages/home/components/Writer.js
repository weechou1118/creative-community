import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  writerWrapper, 
  writerItem, 
  picWrapper, 
  writerPic, 
  writerInfo, 
  desc, title, 
  writerHeader,
  follow
} from '../style.module.less'

class Writer extends Component {
  render() { 
    const writerList = this.props.writerList.toJS()
    return (  
      <div className={writerWrapper}>
      <p className={writerHeader}>
        <span>推荐作者</span>
        <a href='/'><i className='iconfont'>&#xe65c;</i>换一批</a>
      </p>
      {
        writerList.map(item => {
          return (
            <div key={item.id} className={writerItem}>
              <div className={picWrapper}>
                <img alt='' src={item.imgUrl} className={writerPic} />
              </div>
              <div className={writerInfo}>
                  <h3 className={title}>{item.title}</h3>
                  <p className={desc}>写了1100.6k字·4.6k喜欢</p>
              </div>
              <a href='/' className={follow}>
                ＋关注
              </a>
            </div>
          )
        })
      }
        
      </div>
    );
  }
}

const mapState = state => ({
  writerList: state.getIn(['home', 'writerList'])
})

export default connect(mapState)(Writer);