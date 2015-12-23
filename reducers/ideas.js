import { ADD_IDEA, RATE_UP_IDEA, REQUEST_IDEAS, RECEIVE_IDEAS } from '../actions/ideas'

const initialState = {
  loading: false,
  items: []
}

export default function ideas(state = initialState, action) {
  switch (action.type) {
    case ADD_IDEA:
      return Object.assign({}, state, {
        items: [
          {
            title: action.title,
            text: action.text,
            ratings: 0
          },
          ...state.items
        ]
      })

    case RATE_UP_IDEA:
      return Object.assign({}, state, {
        items: [
          ...state.items.slice(0, action.index),
          Object.assign({}, state.items[action.index], {
            ratings: state.items[action.index].ratings + 1
          }),
          ...state.items.slice(action.index + 1)
        ]
      })

    case REQUEST_IDEAS:
      return Object.assign({}, state, {
        loading: true
      })

    case RECEIVE_IDEAS:
      return Object.assign({}, state, {
        loading: false,
        items: action.ideas
      })

    default:
      return state
  }
}
