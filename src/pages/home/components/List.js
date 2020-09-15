import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { getMoreHomeList } from '../store/actionCreator'
import { Link } from 'react-router-dom'
import { 
  listWrapper, 
  listItem,
  listPic,
  listInfo,
  title,
  desc,
  loadMore
} 
from '../style.module.less'

class List extends PureComponent {
  render() { 
    const articleList = this.props.articleList.toJS()
    return (  
      <div className={listWrapper}>
        {
          articleList.map(item => {
            return (
              <Link to='/detail' key={item.id}>
                <div className={listItem}>
                  <img className={listPic} alt='' src={item.imgUrl} />
                  <div className={listInfo}>
                    <h3 className={title}>{item.title}</h3>
                    <p className={desc}>{item.desc}</p>
                  </div>
                </div>
              </Link>
            )
          })  
        }
        {
          !this.props.loading?
          <a className={loadMore} href="/" onClick={this.props.handleLoadMore}>阅读更多</a>:
          this.loadingUI()
        }
      </div>
    );
  }

  loadingUI() {
    return (
      <div>加载中</div>
    )
  }
}

const mapState = state => ({
  articleList: state.getIn(['home', 'articleList']),
  loading: state.getIn(['home', 'loading'])
})

const mapDispatch = dipatch => ({
  handleLoadMore(e) {
    e.preventDefault()
    // TODO 待优化
    dipatch({
      type: 'sleeping'
    })
    setTimeout(() => {
      dipatch(getMoreHomeList())
    }, 1000);
  }
})

export default connect(mapState, mapDispatch)(List);