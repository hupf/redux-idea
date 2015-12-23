import fetch from 'isomorphic-fetch'

export const ADD_IDEA = 'ADD_IDEA'
export const RATE_UP_IDEA = 'RATE_UP_IDEA'
export const REQUEST_IDEAS = 'REQUEST_IDEAS'
export const RECEIVE_IDEAS = 'RECEIVE_IDEAS'

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

export function requestIdeas() {
  return {
    type: REQUEST_IDEAS
  }
}

export function receiveIdeas(ideas) {
  return {
    type: RECEIVE_IDEAS,
    ideas
  }
}

export function fetchIdeas() {
  return dispatch => {
    dispatch(requestIdeas())

    return fetch('http://localhost:8080/ideas')
      .then(response => response.json())
      .then(json => dispatch(receiveIdeas(json)))
  }
}

export function fetchIdeasIfNeeded() {
  return (dispatch, getState) => {
    let state = getState()
    if (!state.ideas.loading && state.ideas.items.length === 0) {
      return dispatch(fetchIdeas())
    } else {
      return Promise.resolve()
    }
  }
}
