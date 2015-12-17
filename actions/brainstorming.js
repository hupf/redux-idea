export const ADD_IDEA = 'ADD_IDEA'

export function addIdea(title, text) {
  return {
    type: ADD_IDEA,
    title, text
  }
}
