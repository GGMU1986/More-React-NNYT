import React from "react";
// import Ninjas from "./Ninjas";
// import NinjaForm from './NinjaForm';
import Todos from './todos/todos';

class App extends React.Component {
  
  // state = {
  //   ninjas: [
  //     { name: 'Ryu', age: 30, belt: 'Black', id: 1 },
  //     { name: 'Yoshi', age: 20, belt: 'Green', id: 2 },
  //     { name: 'Ariel', age: 25, belt: 'Orange', id: 3 }
  //   ]
  // };

  // addNinja = ninja => {
  //   ninja.id = Math.ceil(Math.random() * 10) + 3
  //   let newNinjas = [...this.state.ninjas, ninja];
  //   this.setState({
  //     ninjas: newNinjas
  //   })
  // };

  // deleteNinja = (id) => {
  //   let newNinjas = this.state.ninjas.filter(el => el.id !== id)
  //   this.setState({
  //     ninjas: newNinjas
  //   })
  // };
  state = {
    todos: [
      { id: 1, content: "Buy some milk", done: false},
      { id: 2, content: "Clean the house", done: false},
      { id: 3, content: "Cooke delicious dinner", done: false}
    ]
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(el => el.id !== id)
    this.setState({ todos })
  };

    render() {
      return (
        <div>
          <h1>Todos</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </div>
      //   <div className="App">
      //       <h1>Welcome!</h1>
      //       <Ninjas 
      //         ninjas={this.state.ninjas} 
      //         deleteNinja={this.deleteNinja}
      //       /> 
      //       <br />
      //       <NinjaForm addNinja={this.addNinja}/>
      //   </div>
      )
    }
};

export default App;