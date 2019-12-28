import React, { useReducer } from "react"

const initialState = { reducerValue: true }

type State = {
  reducerValue: boolean
}

type Action = {
  type: string
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "one":
      return { reducerValue: true }
    case "two":
      return { reducerValue: false }
    default:
      return state
  }
}

export const ReducerButtons = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      {state?.reducerValue && <h1>Visible</h1>}
      <button onClick={() => dispatch({ type: "one" })}>Action One</button>
      <button onClick={() => dispatch({ type: "two" })}>Action Two</button>
    </div>
  )
}
