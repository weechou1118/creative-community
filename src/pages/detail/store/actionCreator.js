import * as constants from './constants'

export const getDetail = (id=1) => {
  return {
    type: constants.GET_DETAIL,
    id
  }
}
