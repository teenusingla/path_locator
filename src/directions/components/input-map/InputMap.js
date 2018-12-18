import React, { Component } from "react";
import { maps } from "../../../common/services";
import "./InputMap.scss";

class InputMap extends Component {
  //Autocomplete, After rendering the google autocomplete, reference will be saved in this
  inputMapCtrl;

  constructor(props) {
    super(props);
    this.inputMapRef = React.createRef();
  }

  /**
   * @name renderAutoComplete
   * @description Attach the google places autocomplete to the inputs
   */
  renderAutoComplete = async () => {
    const maps = await this.props.maps();

    this.inputMapCtrl = new maps.places.Autocomplete(this.inputMapRef.current);

    // Adding the eventlistener for place_change to google Autocomplete
    this.inputMapCtrl.addListener("place_changed", e => {
      const places = this.inputMapCtrl.getPlace();
      if (places) {
        this.props.mapValueChange({ name: this.props.name, value: places });
      }
    });
  };

  /**
   * Component lifecycle hook
   */
  componentDidMount() {
    this.renderAutoComplete();
  }

  componentDidUpdate() {
    if (!this.props.value) {
      this.inputMapRef.current.value = "";
    }
  }

  // Method for detecting empty values and updating the props onChange event
  onChange = e => {
    if (e.target.value.trim() === "") {
      this.props.mapValueChange({ name: this.props.name, value: null });
    }
  };

  render() {
    return (
      <div className="rows">
        <p>{this.props.label}</p>
        <input
          className="input-map"
          type="text"
          ref={this.inputMapRef}
          name={this.props.name}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

InputMap.defaultProps = {
  maps
};

export default InputMap;
