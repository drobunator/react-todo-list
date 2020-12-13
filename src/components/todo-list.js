import React from 'react';
import TodoListItem from './todo-list-item';
import './todo-list.css';


const TodoList = ({ items }) => {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className="list-group-item" key={item.id}>
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
