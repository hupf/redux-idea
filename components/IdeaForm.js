import React, { Component, PropTypes } from 'react'

class IdeaForm extends Component {
  handleSubmit(event) {
    event.preventDefault();

    let form = event.target
    this.props.actions.addIdea(form.title.value, form.text.value)
    this.resetForm(form)
  }

  resetForm(form) {
    form.title.value = '';
    form.text.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <input type="text" name="title" placeholder="Idea title" /><br />
          <textarea name="text" placeholder="Idea text" /><br />
          <button type="submit">Add</button>
        </fieldset>
      </form>
    )
  }
}

IdeaForm.propTypes = {
  actions: PropTypes.object.isRequired
}

export default IdeaForm
