import React, { Component } from 'react';

import './Hero.css';

export default class Hero extends Component {
  render() {
    return (
      <div className="jumbotron d-flex hero">
        <img className="random-img" src={`https://starwars-visualguide.com/assets/img/planets/12.jpg`} alt="" />
        <div>
          <h2>Random Item</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Some description</span>
              <span>text</span>
            </li>
            <li className="list-group-item">
              <span className="term">Some description</span>
              <span>text</span>
            </li>
            <li className="list-group-item">
              <span className="term">Some description</span>
              <span>text</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};