import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Julia", age: 23 }
    ]
  }

  render() {
    return(
      <div className="App">
        <h1>Hi I am React App</h1>
        <p>This is really working</p>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: sport</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React App'));
  }
}

export default App;
