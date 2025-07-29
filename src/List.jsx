import React, { Component } from 'react';

class List extends Component {
  renderList() {
    const { items } = this.props;

    if (!items || items.length === 0) {
      return <li>No items to display.</li>;
    }

    return items.map(item => (
      <li key={item.name}>{item.name}</li>
    ));
  }

  render() {
    return <ul>{this.renderList()}</ul>;
  }
}

export default List;
