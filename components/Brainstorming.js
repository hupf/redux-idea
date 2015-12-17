import React, { Component, PropTypes } from 'react'
import IdeaForm from './IdeaForm'
import Idea from './Idea'

class Brainstorming extends Component {
  handleSubmit(data) {
    this.props.addIdea(data.title, data.text)
  }

  render() {
    const { brainstorming } = this.props
    return (
      <div>
        <h1>Brainstorming</h1>
        <IdeaForm onSubmit={this.handleSubmit.bind(this)} />
        {brainstorming.map(idea =>
          <Idea idea={idea} />
        )}
      </div>
    )
  }
}

Brainstorming.propTypes = {
  addIdea: PropTypes.func.isRequired,
}

export default Brainstorming
