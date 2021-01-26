import React, { useState } from 'react';

import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'asfa1', name: "Max", age: 28 },
      { id: 'vas23da', name: "Manu", age: 29 },
      { id: 'xfsd3', name: "Julia", age: 23 }
    ],
    otherState: "some other value",
  });

  const [togglePersons, setTogglePersons] = useState(false);

  // const [otherState, setOtherState] = useState('some other value');

  // console.log(personsState, otherState);

  const deletePersonHandler = (personIndex) => {
    //const persons = personsState.persons.slice();
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons });
  };

  const nameChangeHandler = (Event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personsState.persons[personIndex]
    };

    // const person = Object.assign({}, personsState.persons[personIndex]);

    person.name = Event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({ persons: persons });
  };

  const togglePersonsHandler = () => {
    setTogglePersons(prevToggle => !prevToggle);
  };

  let persons = null;

  let btnClass = '';

  if (togglePersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <ErrorBoundary key={person.id}>
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(Event) => nameChangeHandler(Event, person.id)} />
          </ErrorBoundary>
        })}
      </div>
    );
    btnClass = classes.Red;

  };

  const assignedClasses = [];

  if (personsState.persons.length <= 2) {
    assignedClasses.push(classes.red); //classes = ['red']
  }
  if (personsState.persons.length <= 1) {
    assignedClasses.push(classes.bold); //classes = ['red', 'bold']
  }


  return (
    <div className={classes.App}>
      <h1>Hi I am React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={btnClass} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
      {/* in class Component: onClick={this.switchNameHandler.bind(this, "Maxymillian!!")} */}
      {persons}
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React App'));
};
export default App;



