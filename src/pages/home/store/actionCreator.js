import { GET_HOME_LIST, GET_MORE_HOME_LIST } from './contants'

export const getHomeList = () => {
  return {
    type: GET_HOME_LIST
  }
}

export const getMoreHomeList = () => {
  return {
    type: GET_MORE_HOME_LIST
  }
}