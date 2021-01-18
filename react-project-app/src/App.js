import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
  };
`;

const App = props => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { id:'asfa1', name: "Max", age: 28 },
      { id:'vas23da', name: "Manu", age: 29 },
      { id:'xfsd3', name: "Julia", age: 23 }
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
    setPersonsState({persons: persons});
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
    
    setPersonsState( {persons: persons});
  };

  // const style = {
  //   backgroundColor: 'green',
  //   color: 'white',
  //   font: 'inherit',
  //   border: '1px solid blue',
  //   padding: '8px',
  //   cursor: 'pointer',
  //   ':hover': {
  //     backgroundColor: 'lightgreen',
  //     color: 'black'
  //   }
  // };

  const togglePersonsHandler = () => {
    setTogglePersons(prevToggle => !prevToggle);
  };

  let persons = null;

  if(togglePersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <Person
            click={() => deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(Event) => nameChangeHandler(Event, person.id)} />
        })} 
      </div>
    );


    // style.backgroundColor = 'red';
    // style[':hover']={
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }
  };

  const classes = [];
  
  if(personsState.persons.length <= 2) {
    classes.push('red'); //classes = ['red']
  }
  if(personsState.persons.length <= 1) {
    classes.push('bold'); //classes = ['red', 'bold']
  }


  return(
    <div className="App"> 
      <h1>Hi I am React App</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <StyledButton alt={togglePersons} onClick={togglePersonsHandler}>
        Toggle Persons
      </StyledButton> 
      {/* in class Component: onClick={this.switchNameHandler.bind(this, "Maxymillian!!")} */}
      {persons}
    </div>
  );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React App'));
};
export default App;



