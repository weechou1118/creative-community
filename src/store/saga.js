import { GET_TAGS, GET_TAGS_SUCCESS } from '../common/header/store/constants'
import { GET_HOME_LIST, GET_HOME_LIST_SUCCESS } from '../pages/home/store/contants'
import { getRandomArrayElements } from '../utils/tools'
import { call, put, takeEvery } from 'redux-saga/effects'

function* getTags(action) {
  console.log(action)
  // fetch是ES6提供的原生方法
  const p = () => fetch('https://www.fastmock.site/mock/08fe922b3882e5e82c3cdb63156634b4/api/hotList',{
    method: 'GET'
  })
  // 比axios多了这一步封装
  .then(res=> res.json())
  .then(res=>{
    if (res.success) {
      return getRandomArrayElements(res.data, 6)
    }else {
      console.log('网络请求失败')
    }
  })

  const res = yield call(p)

  yield put({
    type: GET_TAGS_SUCCESS,
    payload: res
  })
}
function* getHomeList(action) {
  console.log(action)
  // fetch是ES6提供的原生方法
  const p = () => fetch('https://www.fastmock.site/mock/e577042399cc4adf49011be9506c21e7/api/topicList',{
    method: 'GET'
  })
  // 比axios多了这一步封装
  .then(res=> res.json())
  .then(res=>{
    if (res.success) {
      console.log(res.data)
      return res.data
    }else {
      console.log('网络请求失败')
    }
  })

  const res = yield call(p)

  yield put({
    type: GET_HOME_LIST_SUCCESS,
    payload: res
  })
}

function* rootSage() {
  yield takeEvery(GET_TAGS, getTags)
  yield takeEvery(GET_HOME_LIST, getHomeList)
}

export default rootSage