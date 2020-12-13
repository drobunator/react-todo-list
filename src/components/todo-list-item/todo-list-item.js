import React, { Component } from 'react';
import './todo-list-item.css';

class TodoListItem extends Component {
  render() {
    const {
      name,
      important,
      done,
      onDeleted,
      onToggleDone,
      onToggleImportant,
    } = this.props;

    let className = 'todo-list-item';
    if (done) className += ' done';
    if (important) className += ' important';

    return (
      <span className={className}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {name}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </span>
    );
  }
}

export default TodoListItem;
