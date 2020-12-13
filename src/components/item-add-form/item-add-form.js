import React, { Component } from 'react';
import './item-add-form.css';

class ItemAddForm extends Component {
  state = {
    name: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name.trim()) return;
    this.createNewItem(this.state.name);
  }

  onNameChange = ({ target }) => {
    this.setState({
      name: target.value
    })
  }

  createNewItem = (name) => {
    const newItem = {
      name,
      important: true,
      done: false,
      id: this.generateId(),
    };

    this.props.onAddItem(newItem);
    this.setState({
      name: ''
    })
  };

  generateId() {
    return `${parseInt(Math.random() * 1000000, 10)}`;
  }

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={ this.onSubmit }>
        <input
          type="text"
          value={this.state.name}
          className="form-control"
          onChange={this.onNameChange}
          placeholder="What needs to be done"
        />
        <button
          className="btn btn-outline-secondary"
        >
          Add Item
        </button>
      </form>
    );
  }
}

export default ItemAddForm;
