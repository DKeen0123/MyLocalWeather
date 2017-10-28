import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class Geolocator extends Component {
  getLocation() {
    if (!navigator.geolocation) {
      alert(
        'Browser doesnt support geolocation. Use the text field to enter location'
      );
      return;
    }
    function success(position) {
      this.uponObtGeoloc(position);
    }

    function error() {
      alert(
        'Could not obtain your location. Please manually enter your location'
      );
    }

    navigator.geolocation.getCurrentPosition(success, error, {
      maximumAge: 60000,
      timeout: 5000,
      enableHighAccuracy: true
    });
  }

  uponObtGeoloc(position) {
    this.props.fetchWeather(
      position.coords.latitude,
      position.coords.longitude
    );
  }

  render() {
    return (
      <div>
        <p>The weather in</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(Geolocator);
