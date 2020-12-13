import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ name, important = false }) => {
  let classNames = 'todo-list-item';

  return (
    <span className={classNames}>
      <span className="todo-list-item-label">
        {name}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </span>
  );
};

export default TodoListItem;
