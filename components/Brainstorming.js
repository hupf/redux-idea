import React, { Component, PropTypes } from 'react'
import IdeaForm from './IdeaForm'
import Idea from './Idea'

class Brainstorming extends Component {
  render() {
    const { ideas, actions } = this.props
    return (
      <div>
        <h1>Brainstorming</h1>
        <IdeaForm actions={actions} />
        {ideas.map((idea, index) =>
          <Idea idea={idea} index={index} actions={actions} />
        )}
      </div>
    )
  }
}

Brainstorming.propTypes = {
  ideas: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Brainstorming
