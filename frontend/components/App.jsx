import React from "react";
import Ninjas from "./Ninjas";
import NinjaForm from './NinjaForm';

class App extends React.Component {

  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'Black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'Green', id: 2 },
      { name: 'Ariel', age: 25, belt: 'Orange', id: 3 }
    ]
  };

  addNinja = ninja => {
    ninja.id = Math.ceil(Math.random() * 10) + 3
    let newNinjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: newNinjas
    })
  };

  deleteNinja = (id) => {
    let newNinjas = this.state.ninjas.filter(el => el.id !== id)
    this.setState({
      ninjas: newNinjas
    })
  };

    render() {
      return (
        <div className="App">
            <h1>Welcome!</h1>
            <Ninjas 
              ninjas={this.state.ninjas} 
              deleteNinja={this.deleteNinja}
            /> 
            <br />
            <NinjaForm addNinja={this.addNinja}/>
        </div>
      )
    }
};

export default App;