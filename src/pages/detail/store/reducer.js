import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '',
  content: ''
})

export const reducer = (state = defaultState, action) => {
  if (action.type === constants.GET_DETAIL_SUCCESS) {
    const data = action.payload
    return state.merge({
      title: data.title, 
      content: data.content
    })
  }
  return state
}