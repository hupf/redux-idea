export const ADD_IDEA = 'ADD_IDEA'
export const RATE_UP_IDEA = 'RATE_UP_IDEA'

export function addIdea(title, text) {
  return {
    type: ADD_IDEA,
    title, text
  }
}

export function rateUpIdea(index) {
  return {
    type: RATE_UP_IDEA,
    index
  }
}
