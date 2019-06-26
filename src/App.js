import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Feed the obese bastard, Fat Bob',
        completed: false
      },
      {
        id: 2,
        title: 'Cook meals for the week (Sunday)',
        completed: false
      },
      {
        id: 3,
        title: 'Get a junior developer job',
        completed: false
      }
    ]
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;