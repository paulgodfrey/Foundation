import { ActionTypes } from '@constants/ActionConstants'

interface IGlobalState {
  weight: number
  name: string
}

interface IGlobalAction {
  type: ActionTypes
  payload: any
}

export { IGlobalState, IGlobalAction }
