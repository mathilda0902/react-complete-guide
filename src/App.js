import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }   

  switchNameHandler = ( newName ) => {
    // this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 36 }
    ]})
  }

  nameChangedHandler = ( event ) => {
    this.setState({
      persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 26 }
      ]})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'pink',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          { this.state.persons.map() }
          <Person 
            name={ this.state.persons[0].name } 
            age={ this.state.persons[0].age }/>
          <Person 
            name={ this.state.persons[1].name } 
            age={ this.state.persons[1].age }
            click={ this.switchNameHandler.bind(this, 'Manu') } 
            changed={ this.nameChangedHandler } >My Hobbies: Racing</Person>
          <Person 
            name={ this.state.persons[2].name } 
            age={ this.state.persons[2].age }/>
        </div> 
      );
    }

    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
