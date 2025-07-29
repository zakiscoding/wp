import React, { Component } from 'react';
import List from './List';
import { DropdownButton, Dropdown } from 'react-bootstrap';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  onFilterChange = (type) => {
    this.setState({ type });
  };

  filterItem = (item) => {
    return (
      (this.state.type === "All" || item.type === this.state.type) &&
      item.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <DropdownButton id="dropdown-basic-button" title={`Filter: ${this.state.type}`}>
          <Dropdown.Item onClick={() => this.onFilterChange("All")}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => this.onFilterChange("Fruit")}>Fruit</Dropdown.Item>
          <Dropdown.Item onClick={() => this.onFilterChange("Vegetable")}>Vegetable</Dropdown.Item>
        </DropdownButton>
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
