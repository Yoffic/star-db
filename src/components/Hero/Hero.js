import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';
import './Hero.css';
import ErrorIndicator from '../ErrorIndicator';

export default class Hero extends Component {
  static defaultProps = {
    updateInterval: 10000,
  };

  static propTypes = {
    updateInterval: PropTypes.number,
  };

  swapiService = new SwapiService();
  
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ 
      planet,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    })
  };

  updatePlanet = () => {
    const maxIdPlanet = 18;
    const minIdPlanet = 3;
    const id = Math.floor(Math.random() * maxIdPlanet) + minIdPlanet;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);

    const errMsg = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;
    return (
      <div className="jumbotron d-flex hero bg-light list-group-flush">
        { spinner }
        { content }
        { errMsg }
      </div>
    );
  }
};

const PlanetView = ({ planet }) => {
  const {
      id, name, population, rotationPeriod, diameter
    } = planet;
  return (
    <>
      <img className="random-img" crossOrigin="anonymous" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
      <div>
        <h2>{name}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="term">Population: </span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period: </span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter: </span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
}