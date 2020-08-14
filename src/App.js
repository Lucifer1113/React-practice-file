import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Manish', age: 25 },
      { name: 'Sudha', age: 29 },
      { name: 'Ravi', age: 22 },
      { name: 'Gudiya', age: 21 }
    ],
    showPersons: false

  }
  deletePersonHandler =  ()=>{}

  nameChangedHandler = (event) => {
    this.setState({

      persons: [
        { name: 'Manish Chaurasiya', age: 25 },
        { name: 'Sudha Barui', age: 29 },
        { name: event.target.value, age: 22 },
        { name: 'Gudiya', age: 21 }
      ]
    })
  }

  togglePersonsHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })

  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '1px',
      padding: '8px'
    }
    let persons = null;

    if (this.state.showPersons === true) {

      persons =
        <div>

          {this.state.persons.map((person,index) => <Person name={person.name} age={person.age} />  )}

          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}>My Hobbie is Codding..</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler("Manish Chaurasiya")} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age} /> */}

        </div>
    }
    else {
      persons = null
    }
    return (
      <div className='App'>
        <h1>Hello, I Love you!!</h1>
        <p>This is Working fine...</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
           </button>
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hello, I Love you!!'))
  }
}
export default App;
