import fetch from 'isomorphic-fetch'

export const ADD_IDEA_REQUEST = 'ADD_IDEA_REQUEST'
export const ADD_IDEA_SUCCESS = 'ADD_IDEA_SUCCESS'
export const ADD_IDEA_ERROR = 'ADD_IDEA_ERROR'

export const RATE_UP_IDEA_REQUEST = 'RATE_UP_IDEA_REQUEST'
export const RATE_UP_IDEA_SUCCESS = 'RATE_UP_IDEA_SUCCESS'
export const RATE_UP_IDEA_ERROR = 'RATE_UP_IDEA_ERROR'

export const FETCH_IDEAS_REQUEST = 'FETCH_IDEAS_REQUEST'
export const FETCH_IDEAS_SUCCESS = 'FETCH_IDEAS_SUCCESS'
export const FETCH_IDEAS_ERROR = 'FETCH_IDEAS_ERROR'

export function addIdea(title, text) {
  return dispatch => {
    dispatch(addIdeaRequest())

    let params = {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({title, text})
    }
    return fetch('http://localhost:8080/ideas', params)
      .then(response => response.json())
      .then(json => dispatch(addIdeaSuccess(json)))
      .then(error => dispatch(addIdeaError(error.message)))
  }
}

export function addIdeaRequest(title, text) {
  return {
    type: ADD_IDEA_REQUEST,
    title, text
  }
}

export function addIdeaSuccess(idea) {
  return {
    type: ADD_IDEA_SUCCESS,
    idea
  }
}

export function addIdeaError(error) {
  return {
    type: ADD_IDEA_ERROR,
    error
  }
}

export function rateUpIdea(id) {
  return dispatch => {
    dispatch(rateUpIdeaRequest())

    let params = {
      method: 'POST'
    }
    return fetch('http://localhost:8080/ideas/' + id + '/rate-up', params)
      .then(response => response.json())
      .then(json => dispatch(rateUpIdeaSuccess(json)))
      .then(error => dispatch(rateUpIdeaError(error.message)))
  }
}

export function rateUpIdeaRequest(id) {
  return {
    type: RATE_UP_IDEA_REQUEST,
    id
  }
}

export function rateUpIdeaSuccess(idea) {
  return {
    type: RATE_UP_IDEA_SUCCESS,
    idea
  }
}

export function rateUpIdeaError(error) {
  return {
    type: RATE_UP_IDEA_ERROR,
    error
  }
}

export function fetchIdeas() {
  return dispatch => {
    dispatch(fetchIdeasRequest())

    return fetch('http://localhost:8080/ideas?_sort=id&_order=DESC')
      .then(response => response.json())
      .then(json => dispatch(fetchIdeasSuccess(json)))
      .catch(error => dispatch(fetchIdeasError(error.message)))
  }
}

export function fetchIdeasIfNeeded() {
  return (dispatch, getState) => {
    let state = getState()
    if (!state.ideas.loading && state.ideas.items.length === 0) {
      if (!state.ideas.error) {
        return dispatch(fetchIdeas())
      } else {
        // On error, retry after 3 seconds
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(dispatch(fetchIdeas())), 3000)
        })
      }
    } else {
      return Promise.resolve()
    }
  }
}

export function fetchIdeasRequest() {
  return {
    type: FETCH_IDEAS_REQUEST
  }
}

export function fetchIdeasSuccess(ideas) {
  return {
    type: FETCH_IDEAS_SUCCESS,
    ideas
  }
}

export function fetchIdeasError(error) {
  return {
    type: FETCH_IDEAS_ERROR,
    error
  }
}
