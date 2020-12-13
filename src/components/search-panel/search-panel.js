import React, { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  state = {
    term: ''
  };

  onSearch = ({ target }) => {
    this.setState({
      term: target.value,
    });

    this.props.onSearch(target.value);
  }
  render() {
    const searchText = 'Type to search';
    return (
      <input
        className="form-control search-input"
        placeholder={searchText}
        onInput={this.onSearch}
        value={this.state.term}
      />
    );
  }
}

export default SearchPanel;
