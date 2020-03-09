import { ActionTypes } from '@constants/ActionConstants'
import { IGlobalState, IGlobalAction } from '@root/interfaces/IGlobalState'

const AppReducerReducerInitialState: IGlobalState = {
  weight: 0,
  name: '',
}

const AppReducer = (state: IGlobalState, action: IGlobalAction) => {
  switch (action.type) {
    case ActionTypes.SET_WEIGHT:
      return {
        ...state,
        weight: action.payload,
      }
    case ActionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload,
      }
    default:
      return state
  }
}

export { AppReducerReducerInitialState, AppReducer }
