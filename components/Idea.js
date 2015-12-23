import React, { Component, PropTypes } from 'react'

class Idea extends Component {
  render() {
    const { idea, index } = this.props
    const { rateUpIdea } = this.props.actions
    return (
      <div>
        <h2>Idea {idea.id}: {idea.title}</h2>
        <div>{idea.text}</div>
        <div>
          Ratings: {idea.ratings}
          <button onClick={() => rateUpIdea(index)}>Rate up</button>
        </div>
      </div>
    )
  }
}

Idea.propTypes = {
  idea: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Idea
