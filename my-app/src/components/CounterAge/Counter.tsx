import React, { useReducer } from 'react'
import { decreaseAgeAction, increaseAgeAction, increaseXAgeAction } from '../Reducer/actions'
import { asyncStateAction, init, initalState } from '../Reducer/reducer'

export default function Counter() {
  //   const [state, setState] = useState<{ age: number }>({ age: 26 })

  const [state, dispatch] = useReducer(asyncStateAction(), initalState, init)

  const increaseAge = () => {
    // setState((prev) => ({ ...prev, age: prev.age + 1 }))
    dispatch(increaseAgeAction())
    // const nextState = reducer(state, increaseAgeAction())
  }
  const decreaseAge = () => {
    // setState((prev) => ({ ...prev, age: prev.age - 1 }))
    dispatch(decreaseAgeAction())
  }

  const increaseXAge = (value: number) => {
    dispatch(increaseXAgeAction(value))
  }

  return (
    <>
      <button onClick={increaseAge} style={{ color: 'red' }}>
        {' '}
        Increase Age
      </button>
      <p>Hello! You are {state.age}</p>
      <button onClick={decreaseAge} style={{ color: 'green' }}>
        Decrease Age
      </button>
      <button onClick={() => increaseXAge(3)} style={{ color: 'orange' }}>
        Increase X Age
      </button>
    </>
  )
}
