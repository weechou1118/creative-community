import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store';
import Styles from './style.module.less'

class Detail extends Component {
  componentDidMount() {
    this.props.handleGetDetail(this.props.match.params.id)
  }
  render() { 
    console.log(this.props)
    return (  
      <div className={Styles.main}>
        <section className={Styles.detailWrapper}>
          <div className={Styles.detailTitle}>
            <p>{this.props.title}</p>
          </div>
          <div className={Styles.detailAuthor}>
          </div>
          <div className={Styles.detailContent} dangerouslySetInnerHTML={{__html: this.props.content}}></div>
        </section>
      </div>
    );
  }
}

const mapState = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = dispatch => ({
  handleGetDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(Detail);