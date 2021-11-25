import React from "react";
import './App.css';
import Counter from "./Components/Counter";
import StatelessComponent from "./Components/StatelessComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      counter:0
    }
  }

  handleButtonClick=()=>this.setState(prevState=>{
    console.log(prevState.counter)
    return {...prevState, counter:prevState.counter+1}
  })

  render() {
    return (
        <div className="App">
          {this.state.counter < 5 &&
            <Counter handleButtonClick={this.handleButtonClick} counter={this.state.counter}/>
          }
          <StatelessComponent/>
        </div>
    );
  }
}

export default App;
