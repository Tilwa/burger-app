import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        {name: 'Qasim', age: 28},
        {name: 'Hamza', age: 26},
        {name: 'Haider', age: 25}
      ],
      username: 'Pakistani Boy'
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


  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 82},
        {name: event.target.value, age: 62},
        {name: event.target.value, age: 52}
      ]
    });
  }

  eventHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit', 
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi i am a React app</h1>
        
        <button 
        onClick={this.switchNameHandler.bind(this, "oye hoayy")}
        style={style}
        >Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        change={this.nameChangeHandler}></Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, "oye hoayy")}
        change={this.nameChangeHandler}></Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        change={this.nameChangeHandler}></Person>




        <hr />
        <UserInput 
        changed={this.eventHandler}
        username={this.state.username}/>
        <UserOutput username={this.state.username}
        />
        <UserOutput username='Pindi Boy'/>
      </div>
    );
  }
}

export default App;
