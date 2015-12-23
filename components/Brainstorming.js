import React, { Component, PropTypes } from 'react'
import IdeaForm from './IdeaForm'
import Idea from './Idea'

class Brainstorming extends Component {
  render() {
    const { loading, error, ideas, actions } = this.props
    let loader, errorMessage, form;

    if (loading) {
      loader = <div>Loading...</div>
    }

    if (error) {
      errorMessage = <div style={{color: 'red'}}>{error}</div>
    }

    if (!loading && !error) {
      form = <IdeaForm actions={actions} />
    }

    actions.fetchIdeasIfNeeded()

    return (
      <div>
        <h1>Brainstorming</h1>
        {loader}
        {errorMessage}
        {form}
        {ideas.items.map((idea, index) =>
          <Idea key={idea.id} idea={idea} actions={actions} />
        )}
      </div>
    )
  }
}

Brainstorming.propTypes = {
  loading: PropTypes.bool.isRequired,
  ideas: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Brainstorming
