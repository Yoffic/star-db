import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';

import './ItemsList.css';

export default class ItemsList extends Component {
  swapiService = new SwapiService();
  state = {
    peopleList: null,
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        });
      });
  }

  renderItems(items) {
    return items.map(({ id, name }) => {
      return (
        <li className="list-group-item" 
            key={id}
            onClick={ () => this.props.onItemSelected(id) }>
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Spinner />;
    }

    const list = this.renderItems(peopleList);

    return (
      <ul className="items-list list-group bg-dark">
        { list }
      </ul>
    );
  }
}