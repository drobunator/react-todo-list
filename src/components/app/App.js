import React, { Component } from 'react';
import './App.css';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form.js';
class App extends Component {
  state = {
    items: [
      {
        name: 'Learn React',
        important: true,
        id: '3434',
        done: false,
      },
      {
        name: 'Create Awesome App',
        important: true,
        id: '567567',
        done: false,
      },
      {
        name: 'Drink Coffee',
        important: false,
        id: '78665',
        done: false,
      },
      {
        name: 'Learn React Native',
        important: false,
        id: '456764',
        done: false,
      },
      {
        name: 'Create Budget App',
        important: false,
        id: '75676',
        done: false,
      },
      {
        name: 'Call To Friends',
        important: false,
        id: '3453455',
        done: false,
      },
    ],
    term: '',
    filter: 'all',
  };

  onDeleteItem = (id) => {
    this.setState(({ items }) => {
      return {
        items: this.deleteItemInState(items, id),
      };
    });
  };

  deleteItemInState(items, id) {
    return items.filter((item) => item.id !== id);
  }

  addItem = (item) => {
    this.setState(({ items }) => {
      return {
        items: this.addItemInState(items, item),
      };
    });
  };

  addItemInState(items, item) {
    const itemsArr = [...items, item];
    return itemsArr;
  }

  onToggleImportant = (id) => {
    this.setState(({ items }) => {
      return {
        items: this.changeToggleInState(id, 'important', items),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ items }) => {
      return {
        items: this.changeToggleInState(id, 'done', items),
      };
    });
  };

  changeToggleInState(id, key, items) {
    const oldItem = items.find((item) => item.id === id);
    const newItem = { ...oldItem, [key]: !oldItem[key] };
    return items.reduce((acc, item) => {
      if (item.id === id) {
        acc.push(newItem);
        return acc;
      }
      acc.push(item);
      return acc;
    }, []);
  }

  onSearch = (term) => {
    this.setState({ term });
  };

  serchByTerm = (term, items) => {
    if (!term.trim()) return items;
    return items.filter((item) =>
      item.name.toUpperCase().match(term.toUpperCase())
    );
  };

  filterByStatus = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { items, term, filter } = this.state;
    const stateDone = items.filter((item) => item.done).length;
    const stateTodo = items.filter((item) => !item.done).length;
    const searchItems = this.filterByStatus(
      this.serchByTerm(term, items),
      filter
    );

    return (
      <div className="todo-app">
        <AppHeader toDo={stateTodo} done={stateDone} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          items={searchItems}
          onDeleted={this.onDeleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onAddItem={this.addItem} />
      </div>
    );
  }
}

export default App;
