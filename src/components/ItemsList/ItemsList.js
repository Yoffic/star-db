import React, { Component } from 'react';

import Spinner from '../Spinner';

import './ItemsList.css';

export default class ItemsList extends Component {

  state = {
    itemsList: null,
  }

  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then((itemsList) => {
        this.setState({
          itemsList
        });
      });
  }

  renderItems(items) {
    return items.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <li className="list-group-item" 
            key={id}
            onClick={ () => this.props.onItemSelected(id) }>
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemsList } = this.state;
    const spinner = !itemsList ? <Spinner /> : null;
    const list = itemsList ? this.renderItems(itemsList) : null;

    return (
      <ul className="items-list list-group bg-dark">
        { list }
        { spinner }
      </ul>
    );
  }
}