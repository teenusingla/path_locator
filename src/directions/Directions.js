import React, { Component } from "react";
import { DirectionsForm, DirectionsMap, RouteInfo } from "./components";
import { fetchDirections } from "./services";
import { Loader } from "../common/loader";

import "./Directions.scss";

/**
 * @type {Component}
 * @name Directions
 */
class Directions extends Component {
  /**
   * @constructor
   */
  constructor() {
    super();

    // initial state
    this.state = {
      directionsResponse: null,
      isLoading: false
    };
  }

  /**
   * @description Fetch the directions
   * This method call the Directions serive to fetch the data
   * @param from Starting Location
   * @param to Drop-off point
   */
  getDirections = async (from, to) => {
    this.toggleLoader(true);
    // directions result, if error then show error messgae
    const response = await fetchDirections(from, to).catch(e => {
      this.showErrorMessage("Internal server error");
    });

    this.toggleLoader(false);

    // error handler
    if (response && response.error) {
      this.showErrorMessage(response.error);
      return;
    }

    // check for directions data, if available then set the data to state
    if (response && response.path) {
      this.setState(() => ({
        directionsResponse: response
      }));
    }
  };

  /**
   * @description Hide and show loader
   * @param isLoading Boolean
   */
  toggleLoader = isLoading => {
    this.setState(() => ({
      isLoading
    }));
  };

  /**
   * @name showErrorMessage
   * @description error handler
   * @param message
   */
  showErrorMessage = message => {
    this.toggleLoader(false);
    this.setState(() => ({
      directionsResponse: null
    }));
    alert(message);
  };

  /**
   * @description It contains loader, search form and map
   */
  render() {
    const { directionsResponse, isLoading } = this.state;
    return (
      <div className="directions-container">
        <Loader isLoading={isLoading} />
        <div className="direction-form-container">
          <DirectionsForm getDirections={this.getDirections} />
          <div className="directions-route-info">
            {directionsResponse && <RouteInfo {...directionsResponse} />}
          </div>
        </div>
        <div className="direction-map-container">
          <DirectionsMap directions={directionsResponse} />
        </div>
      </div>
    );
  }
}

export default Directions;
