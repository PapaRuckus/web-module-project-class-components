import React from 'react'

export default class Form extends React.Component {
  state = {
    name: '',
  }

  onSubmit = evt => {
    evt.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state.name)
    this.setState({
      ...this.state,
      name: ''
    })
  }

  onChange = evt => {
    this.setState({
      ...this.state,
      name: evt.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.name} placeholder='Add todo' onChange={this.onChange}/>
        <input type="submit" />
      </form>
    )
  }
}
