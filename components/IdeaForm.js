import React, { Component, PropTypes } from 'react'

class IdeaForm extends Component {
  handleSubmit(event) {
    event.preventDefault();

    let form = event.target
    this.props.onSubmit({
      title: form.title.value,
      text: form.text.value
    })
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
  onSubmit: PropTypes.func.isRequired
}

export default IdeaForm
