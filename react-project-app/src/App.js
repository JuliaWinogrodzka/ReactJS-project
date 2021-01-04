import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import userInput from './UserInput/UserInput';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

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

  const [ usersState, setUserState ] = useState({
    users: [
      {username: "superUser Max"},
      {username: "superUser Manu"},
      {username: "superUser Julia"}
    ],
  });

  const switchUserNameHandler = () =>{
    setUserState({
      users: [
        {username: "CHANGE HANDLER: MAX"},
        {username: "CHANGE HANDLER: MANU"},
        {username: "CHANGE HANDLER: JULIA"}
      ],
    });
  };
  
  const userNameChangeHandler = (Event) =>{
    setUserState({
      users: [
        {username: Event.target.value},
        {username: Event.target.value},
        {username: Event.target.value}
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

  return(
    <div className="App"> 
      <h1>Hi I am React App</h1>
      <p>This is really working</p>
      <button 
        style={style}
        onClick={() => switchNameHandler('Maxymilian!!')}>Switch name
      </button> 
      {/* in class Component: onClick={this.switchNameHandler.bind(this, "Maxymillian!!")} */}
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={() => switchNameHandler("Max!!")}
        changed={nameChangeHandler}>
          My hobbies: sport
      </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>
      <button
        style={style}
        onClick={() => switchUserNameHandler()}>
        user switch
      </button>
      <UserInput 
        changed={userNameChangeHandler}
        userName={usersState.users[0].username}/>
      <UserOutput userName={usersState.users[0].username} />
      <UserOutput userName={usersState.users[1].username} />
      <UserOutput userName="Julia"/>
    </div>
  );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React App'));
};
export default App;



