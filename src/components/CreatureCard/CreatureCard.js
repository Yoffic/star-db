import React, { Component } from 'react';

import './CreatureCard.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';

export default class CreatureCard extends Component {
  swapiService = new SwapiService();

  state = {
    creature: null,
    loading: false,
  };

  componentDidMount() {
    this.updateCreature();
  }

  componentDidUpdate(prevProps) {
    if (this.props.creatureId !== prevProps.creatureId) {
      this.setState({
        loading: true
      });
      this.updateCreature();
    }
  }

  updateCreature() {
    const { creatureId } = this.props;
    if (!creatureId) return;

    this.swapiService
      .getPerson(creatureId)
      .then((creature) => {
        this.setState({
          creature,
          loading: false,
        });
      });
  }

  render () {
    if (!this.state.creature) {
      return <span>Select a person from a list</span>
    }

    const { creature, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const creatureData = !loading ? <CreatureView creature={creature}/> : null;

    return (
      <div className="creature-card card d-flex bg-dark">
        {spinner}
        {creatureData}
      </div>
    );
  }
}

const CreatureView = ({ creature }) => {
  const { id, name, gender, birthYear, eyeColor } = creature;
  const imgApi = `https://starwars-visualguide.com/assets/img/characters/`;
  return (
    <React.Fragment>
      <img className="creature-image"
          src={`${imgApi}${id}.jpg`} alt="" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender: </span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year: </span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color: </span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  );
};
