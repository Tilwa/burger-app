import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        {id: '123', name: 'Qasim', age: 28},
        {id: '456', name: 'Hamza', age: 26},
        {id: '789', name: 'Haider', age: 25}
      ],
      showPersons: false,
      inputShowBelow: ''
    };
  }
  
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 82},
        {name: 'Hamza', age: 62},
        {name: 'Shahrukh', age: 52}
      ]
    });
  }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonsHandler = (delPerson) => {
    const person = [...this.state.persons];
    person.splice(delPerson, 1);
    this.setState({persons: person});
  }



  ////////////////////////////////Render Here/////////////////////////////////////
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit', 
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() => this.deletePersonsHandler(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangeHandler(event, person.id)}/>
        })}
        </div>
      );


      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }
    



////////////////////////////////Return Here/////////////////////////////////////
    return (
   
        <div className="App">
          <h1 >Hi i am a React app</h1>
          <p className={classes.join(' ')}>It is working :)</p>
          <button 
          className="button"
          onClick={this.togglePersonsHandler}
          >Toggle Persons</button>

          {persons}
        </div>
  
    );
  }
}

export default App;
