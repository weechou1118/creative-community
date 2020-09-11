import * as constants from './constants'

export const searchFocus = () => {
  return {
    type: constants.SEARCH_FOCUS
  }
}

export const searchBlur = () => {
  return {
    type: constants.SEARCH_BlUR
  }
}

export const getTags = (count) => {
  return {
    type: constants.GET_TAGS,
    count
  }
}

export const changeMouseEnter = () => {
  return {
    type: constants.MOUSE_ENTER
  }
}

export const changeMouseLeave = () => {
  return {
    type: constants.MOUSE_LEAVE
  }
}