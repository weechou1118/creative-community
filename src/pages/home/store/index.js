// 出口文件
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware() // 中间件

export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

export { reducer }