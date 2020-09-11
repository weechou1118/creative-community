import { GET_TAGS, GET_TAGS_SUCCESS } from '../common/header/store/constants'
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

function* rootSage() {
  yield takeEvery(GET_TAGS, getTags)
}

function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0), 
      i = arr.length, 
      min = i - count, 
      temp, 
      index;

  while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  
  return shuffled.slice(min);
}

export default rootSage