import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { recommendWrapper, recommendItem, recommendPic } from '../style.module.less'

class Recommend extends PureComponent {
  render() { 
    const recommendList = this.props.recommendList.toJS()
    return (
      <div className={recommendWrapper}>
      {
        recommendList.map(item => {
          return (
            <div key={item.id} className={recommendItem}>
              <img className={recommendPic} alt='' src={item.imgUrl} />
            </div>
          )
        })
      }
      </div>
    );
  }
}

const mapState = state => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(mapState)(Recommend);