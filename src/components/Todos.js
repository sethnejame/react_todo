import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return this.props.todos.map((listItem) => (
      <TodoItem todo={listItem}/>
    ));
  }
}

export default Todos;