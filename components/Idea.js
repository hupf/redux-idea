import React, { Component, PropTypes } from 'react'

class Idea extends Component {
  render() {
    const { idea } = this.props
    return (
      <div>
        <h2>{idea.title}</h2>
        <div>{idea.text}</div>
      </div>
    )
  }
}

Idea.propTypes = {
  idea: PropTypes.func.isRequired
}

export default Idea
