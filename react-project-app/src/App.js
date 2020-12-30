import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Julia", age: 23 }
    ],
  otherState: "some other value"
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    //DON'T DO THIS: this.state.persons[0].name = "Maximilian";
  
    setPersonsState( {
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Julia", age: 27 }
      ],
    });
  };
  
  return(
    <div className="App">
      <h1>Hi I am React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: sport</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React App'));
};
export default App;



