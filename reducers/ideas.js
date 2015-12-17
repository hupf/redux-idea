import { ADD_IDEA, RATE_UP_IDEA } from '../actions/ideas'

const initialState = []

export default function ideas(state = initialState, action) {
  switch (action.type) {
    case ADD_IDEA:
      return [
        {
          title: action.title,
          text: action.text,
          ratings: 0
        },
        ...state
      ]

    case RATE_UP_IDEA:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          ratings: state[action.index].ratings + 1
        }),
        ...state.slice(action.index + 1)
      ]

    default:
      return state
  }
}
