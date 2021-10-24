import React, { Component } from 'react';

class NinjaForm extends Component {
    state = {
      name: '',
      age: '',
      belt: ''
    }

    handleChange(field) {
      return e => this.setState({
        [field]: e.target.value
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addNinja(this.state);
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Name:
                <input type="text" onChange={this.handleChange('name')} />
            </label>

            <label>Age:
                <input type="text" onChange={this.handleChange('age')} />
            </label>

            <label>Belt:
                <input type="text" onChange={this.handleChange('belt')} />
            </label>

            <button>Submit</button>
          </form>
        </div>
      )
    }
}

export default NinjaForm;