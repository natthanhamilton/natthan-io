import * as action from './actions'

const initialState = null

export default function portfolioReducer(state = initialState, {type, payload}) {
  switch (type) {
    case action.PORTFOLIO_UPDATE:
      return payload

    case action.PORTFOLIO_CLOSE:
    default:
      return initialState

  }
}
