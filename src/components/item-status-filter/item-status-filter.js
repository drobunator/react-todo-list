import React, { Component } from 'react';
import './item-status-filter.css';

class ItemStatusFilter extends Component {
  state = {};
  buttons = [
    {
      id: 'all',
      name: 'All',
    },
    {
      id: 'active',
      name: 'Active',
    },
    {
      id: 'done',
      name: 'Done',
    },
  ];

  selectedFilter() {}

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ id, name }) => {
      const isActive = filter === id;
      const isActiveClass = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          type="button"
          className={`btn ${isActiveClass}`}
          key={id}
          onClick={() => onFilterChange(id)}
        >
          {name}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}

export default ItemStatusFilter;
