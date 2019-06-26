import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';


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

  // Toggle Complete
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
        console.log(todo.completed)
      }
      return todo;
    })});
  }

  // Delete List Item
  deleteListItem = (id) => {
    this.setState({ todos: [...this.state.todos.filter(listItem => listItem.id
       !== id)] });
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteListItem={this.deleteListItem} />
      </div>
    );
  }
}

export default App;