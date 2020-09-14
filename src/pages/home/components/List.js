import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  listWrapper, 
  listItem,
  listPic,
  listInfo,
  title,
  desc 
} 
from '../style.module.less'

class List extends Component {
  render() { 
    const articleList = this.props.articleList.toJS()
    return (  
      <div className={listWrapper}>
        {
          articleList.map(item => {
            return (
              <div key={item.id} className={listItem}>
                <img className={listPic} alt='' src={item.imgUrl} />
                <div className={listInfo}>
                  <h3 className={title}>{item.title}</h3>
                  <p className={desc}>{item.desc}</p>
                </div>
              </div>
            )
          })  
        }
      </div>
    );
  }
}

const mapState = state => ({
  articleList: state.getIn(['home', 'articleList'])
})

export default connect(mapState)(List);