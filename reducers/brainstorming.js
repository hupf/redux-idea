import { ADD_IDEA } from '../actions/brainstorming'

const initialState = []

export default function brainstorming(state = initialState, action) {
  switch (action.type) {
    case ADD_IDEA:
      console.log('add idea', action);
      return [
        {
          title: action.title,
          text: action.text
        },
        ...state
      ]

    default:
      return state
  }
}
