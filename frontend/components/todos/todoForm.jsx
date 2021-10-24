import React from 'react';

class TodoForm extends React.Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      content:''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>         
          <label>Content
            <input 
              type="text" 
              onChange={this.handleChange} 
              value={this.state.content}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default TodoForm
