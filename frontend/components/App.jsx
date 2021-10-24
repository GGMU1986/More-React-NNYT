import React from "react";
// import Ninjas from "./Ninjas";
// import NinjaForm from './NinjaForm';
import Todos from './todos/todos';
import TodoForm from "./todos/todoForm";
import Navbar from "./routesApp/NavBar";
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './routesApp/Home'
import About from "./routesApp/About";
import Contact from "./routesApp/Contact";

class App extends React.Component {
  

    render() {
      return (
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </div>
        </BrowserRouter>
      )
    }
};

export default App;