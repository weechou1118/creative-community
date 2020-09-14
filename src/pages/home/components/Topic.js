import React, { Component } from 'react';
import { connect } from 'react-redux'
import { topicPic, topicWrapper, topicItem } from '../style.module.less'

class Topic extends Component {
  render() { 
    const topicList = this.props.topicList.toJS()
    return (  
      <div className={topicWrapper}>
      {
        topicList.map((item) => {
          return (
            <div key={item.id} className={topicItem}>
              <img className={topicPic} alt='' src={item.imgUrl}></img>
              <span>{item.title}</span>
            </div>
          )
        })
      }
      </div>
    );
  }
}

const mapState = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapState)(Topic);