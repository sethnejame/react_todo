import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((listItem) => (
      <TodoItem key={listItem.id} todo={listItem} markComplete=
        {this.props.markComplete} />
    ));
  }
}


// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;