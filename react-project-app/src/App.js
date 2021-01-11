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
    otherState: "some other value",
  });

  const [togglePersons, setTogglePersons] = useState(false);

  // const [otherState, setOtherState] = useState('some other value');

  // console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //DON'T DO THIS: this.state.persons[0].name = "Maximilian";
  
    setPersonsState( {
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Julia", age: 27 }
      ],
    });
  };
  
  const nameChangeHandler = (Event) => {
    setPersonsState( {
      persons: [
        { name: "Max", age: 28 },
        { name: Event.target.value, age: 29 },
        { name: "Julia", age: 23 }
      ],
    });
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  const togglePersonsHandler = () => {
    setTogglePersons(prevToggle => !prevToggle);
  };

  let persons = null;

  if(togglePersons) {
    persons = (
      <div>
        {personsState.persons.map(person => {
          return <Person 
            name={person.name} 
            age={person.age} />
        })} 
      </div>

    );
  };

  return(
    <div className="App"> 
      <h1>Hi I am React App</h1>
      <p>This is really working</p>
      <button 
        style={style}
        onClick={togglePersonsHandler}>Toggle Persons
      </button> 
      {/* in class Component: onClick={this.switchNameHandler.bind(this, "Maxymillian!!")} */}
      {persons}
    </div>
  );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React App'));
};
export default App;



