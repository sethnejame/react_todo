import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';



class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Feed the obese bastard, Fat Bob',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Cook meals for the week (Sunday)',
        completed: false
      },
      {
        id: uuid.v4(),
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

// Add Todo
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title: title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo]});
}

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete}
          deleteListItem={this.deleteListItem} />
        </div>
      </div>
    );
  }
}

export default App;