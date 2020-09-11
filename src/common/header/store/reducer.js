import * as constants from './constants'
import {
  fromJS
} from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  loading: true
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true)
    case constants.SEARCH_BlUR:
      return state.set('focused', false)
    case constants.GET_TAGS:
      return state.set('loading', true)
    case constants.GET_TAGS_SUCCESS:
      return state.merge({
        list: action.payload,
        loading: false
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    default:
      return state;
  }
}