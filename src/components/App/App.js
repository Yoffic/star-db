import React, { Component } from 'react';

import Header from '../Header';
import Hero from '../Hero';
import ItemsList from '../ItemsList';
import PersonCard from '../PersonCard';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Hero />
        <div className="row mb-2">
          <div className="col-md-6">
            <ItemsList />
          </div>
          <div className="col-md-6">
            <PersonCard />
          </div>
        </div>
      </div>
    );
  }
}
