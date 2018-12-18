import React, { Component } from "react";
import { maps } from "../../../common/services";
import InputControl from "../input-map";
import "./DirectionsForm.scss";

/**
 * @name DirectionsForm
 * @type {Component}
 * @extends Component React component
 * @description This component contins the auto complete form
 */
class DirectionsForm extends Component {
  constructor() {
    super();

    this.state = {
      formData: {
        startLocation: null,
        dropLocation: null
      }
    };
  }

  mapValueChange = e => {
    const { name, value } = e;

    this.setState(prev => ({
      formData: { ...prev.formData, [name]: value }
    }));
  };

  /**
   * @name getRoute
   * @description call the parent 'getDirections' method and supply current Starting and drop-off points
   */
  getRoute = () => {
    const { formData } = this.state;
    this.props.getDirections(formData);
  };

  //clear form values
  onReset = () => {
    this.setState(() => ({
      formData: {
        startLocation: null,
        dropLocation: null
      }
    }));
  };

  /**
   * Component render method
   */
  render() {
    const { formData } = this.state;
    return (
      <div className="directions-form">
        <InputControl
          name="startLocation"
          label="Start Location"
          value={formData.startLocation}
          mapValueChange={this.mapValueChange}
        />
        <InputControl
          name="dropLocation"
          label="Drop off Location"
          value={formData.dropLocation}
          mapValueChange={this.mapValueChange}
        />
        <div className="form-control">
          <button className="btn" onClick={this.getRoute}>
            Submit
          </button>
          <button className="btn" onClick={this.onReset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

DirectionsForm.defaultProps = {
  maps
};
export default DirectionsForm;
