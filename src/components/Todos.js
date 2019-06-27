import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((listItem) => (
      <TodoItem key={listItem.id} todo={listItem} toggleComplete=
        {this.props.toggleComplete} deleteListItem={this.props.deleteListItem} />
    ));
  }
}


// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired
}

export default Todos;