import React from "react";
import Ninjas from "./Ninjas";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Welcome!</h1>
                <Ninjas name="Ryu" age="25" belt="black"/>
            </div>
        )
    }
};

export default App;