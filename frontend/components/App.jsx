import React from "react";
import Ninjas from "./Ninjas";

class App extends React.Component {

    state = {
        ninjas: [
            { name: 'Ryu', age: 30, belt: 'Black', id: 1 },
            { name: 'Yoshi', age: 20, belt: 'Green', id: 2 },
            { name: 'Ariel', age: 25, belt: 'Orange', id: 3 }
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Welcome!</h1>
                <Ninjas ninjas={this.state.ninjas}/> 
            </div>
        )
    }
};

export default App;