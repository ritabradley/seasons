import React, { Component } from 'react';
import SeasonDisplay from '../components/SeasonDisplay';
import Spinner from '../components/Spinner';

export default class App extends Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message }),
    );
  }

  render() {
    const { lat, errorMessage } = this.state;
    return (
      <div>
        {!errorMessage ? (
          <div>{!lat ? <Spinner /> : <SeasonDisplay lat={lat} />}</div>
        ) : (
          <div>Error: {errorMessage}</div>
        )}
      </div>
    );
  }
}
