import { ActionType } from './actions'

export const initalState = { age: 26 }

export const init = (initalAge: typeof initalState) => {
  return { ...initalAge, age: initalAge.age + 4 }
}

const reducer = (state: typeof initalState, action: ActionType) => {
  if (action.type === 'increase_age') {
    return { ...state, age: state.age + 1 }
  }
  if (action.type === 'decrease_age') {
    return { ...state, age: state.age - 1 }
  }
  if (action.type === 'increase_Xage') {
    return { ...state, age: state.age + action.payload }
  }
  throw Error('Invalid Action', action)
}

export const asyncStateAction = () => {
  return (state: typeof initalState, action: ActionType) => {
    const nextState = reducer(state, action)
    return nextState
  }
}

export default reducer
