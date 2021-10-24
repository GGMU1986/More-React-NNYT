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

    render() {
      return (
        <div>
          <form>
            <label>Name:
                <input type="text" onChange={this.handleChange('name')} />
            </label>

            <br /><br />

            <label>Age:
                <input type="text" onChange={this.handleChange('age')} />
            </label>

            <br /><br />

            <label>Belt:
                <input type="text" onChange={this.handleChange('belt')} />
            </label>
            <br />
            
            <button>Submit</button>
          </form>
        </div>
      )
    }
}