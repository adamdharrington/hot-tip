import * as types from "./action-types"

export default function hotTipReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.UPDATE_TOOLTIP:
      return {
        ...state,
        tip: payload.tip,
        visible: payload.visible,
        ...payload.position,
      }
    default:
      return state
  }
}
