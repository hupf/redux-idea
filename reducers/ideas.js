import {
  ADD_IDEA_REQUEST, ADD_IDEA_SUCCESS, ADD_IDEA_ERROR,
  RATE_UP_IDEA_REQUEST, RATE_UP_IDEA_SUCCESS, RATE_UP_IDEA_ERROR,
  FETCH_IDEAS_REQUEST, FETCH_IDEAS_SUCCESS, FETCH_IDEAS_ERROR
} from '../actions/ideas'

const initialState = {
  loading: false,
  error: null,
  items: []
}

export default function ideas(state = initialState, action) {
  switch (action.type) {
    case ADD_IDEA_REQUEST:
    case RATE_UP_IDEA_REQUEST:
    case FETCH_IDEAS_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        error: false
      })
    }

    case ADD_IDEA_ERROR:
    case RATE_UP_IDEA_ERROR:
    case FETCH_IDEAS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      })

    case ADD_IDEA_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        items: [
          action.idea,
          ...state.items
        ]
      })

    case RATE_UP_IDEA_SUCCESS:
      let index;
      for (let i = 0; i < state.items.length; i += 1) {
        if (state.items[i].id === action.idea.id) {
          index = i;
          break;
        }
      }

      return Object.assign({}, state, {
        loading: false,
        error: false,
        items: [
          ...state.items.slice(0, index),
          action.idea,
          ...state.items.slice(index + 1)
        ]
      })

    case FETCH_IDEAS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        items: action.ideas
      })

    default:
      return state
  }
}
