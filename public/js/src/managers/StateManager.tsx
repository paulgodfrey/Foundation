import * as React from 'react'
import * as ReactDOM from 'react-dom'

const StateContext = React.createContext(null)

const StateProvider = ({
  reducer,
  initialState,
  children,
}: {
  reducer
  initialState
  children?
}) => (
  <StateContext.Provider value={React.useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

const useStateValue = () => React.useContext(StateContext)

/**
 * ReactDOM.unstable_batchedUpdates is used under the hood for batching React
 * state updates. Despite the name, the React team has confirmed this will not be
 * removed until the 17.0 release when all state batching will be handled
 * automatically by React. Currently set state batching is done
 * conditionally depending on whether you're setting state inside React events
 * like onClick (all syntethic events) or inside of React specific functions.
 * Batching does not happen by default if you're doing multiple state updates
 * inside of a Promise, async function, setTimeout, or setInterval.
 */
const batchStateUpdates = ReactDOM.unstable_batchedUpdates

const mergeStateMaps = ({
  existingState,
  newState,
}: {
  existingState: any
  newState: any
}) => {
  return Object.assign({}, existingState, newState)
}

const combineStateArrays = ({
  existingState,
  newState,
}: {
  existingState: any[]
  newState: any[]
}) => {
  return [].concat(existingState, newState)
}

export {
  StateContext,
  StateProvider,
  useStateValue,
  batchStateUpdates,
  mergeStateMaps,
  combineStateArrays,
}
