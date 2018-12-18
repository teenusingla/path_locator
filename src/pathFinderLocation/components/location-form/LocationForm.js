import React, { Component } from "react";
import "./LocationForm.css";

class LocationForm extends Component {
  state = {};
  render() {
    return (
      <div className="location-form">
        <div className="input-control">
          <label>Starting Location</label>
          <input type="text" className="input-control" />
        </div>
        <div className="input-control">
          <label>Drop-off point</label>
          <input type="text" className="input-control" />
        </div>
        <div className="btn-control">
          <button>Submit</button>
          <button>Reset</button>
        </div>
      </div>
    );
  }
}

export default LocationForm;
