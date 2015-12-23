import React, { Component, PropTypes } from 'react'
import IdeaForm from './IdeaForm'
import Idea from './Idea'

class Brainstorming extends Component {
  render() {
    const { loading, ideas, actions } = this.props

    actions.fetchIdeasIfNeeded()

    if (loading) {
      return (
        <div>
          <h1>Brainstorming</h1>
          <div>Loading...</div>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Brainstorming</h1>
          <IdeaForm actions={actions} />
          {ideas.items.map((idea, index) =>
            <Idea key={idea.id} idea={idea} index={index} actions={actions} />
          )}
        </div>
      )
    }
  }
}

Brainstorming.propTypes = {
  loading: PropTypes.bool.isRequired,
  ideas: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Brainstorming
