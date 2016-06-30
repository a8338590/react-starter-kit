import _ from 'lodash'
// ------------------------------------
// Constants
// ------------------------------------
const TITLE_ACTIVE = 'TITLE_ACTIVE'

// ------------------------------------
// Actions
// ------------------------------------

export function titleToggleActive (text) {
  return {
    type: TITLE_ACTIVE,
    payload: text
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TITLE_ACTIVE]: (state, action) => {
    if (state.indexOf(action.payload) === -1){
      return (state.concat(action.payload))
    } else {
      return (_.remove(...state, function(n) {
        return n == action
      }))
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
