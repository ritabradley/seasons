import React, { Component } from 'react';
import SeasonDisplay from '../components/SeasonDisplay';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message }),
    );
  }

  render() {
    return (
      <div>
        {!this.state.errorMessage ? (
          <h1>Latitude: {!this.state.lat ? 'Loading...' : this.state.lat}</h1>
        ) : (
          <h1>Error: {this.state.errorMessage}</h1>
        )}
      </div>
    );
  }
}
