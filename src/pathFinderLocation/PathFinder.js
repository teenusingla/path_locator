import React, { Component } from "react";
import { LocationForm, LocationMap } from "./components";
import "./PathFinder.css";

class PathFinder extends Component {
  render() {
    return (
      <div className="path-finder-container">
        <div className="location-form-container">
          <LocationForm />
        </div>
        <div className="map-form-container">
          <LocationMap />
        </div>
      </div>
    );
  }
}

export default PathFinder;
