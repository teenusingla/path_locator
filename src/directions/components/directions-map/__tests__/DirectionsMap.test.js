import React from "react";
import renderer from "react-test-renderer";
import DirectionsMap from "../DirectionsMap";

describe("<DirectionsMap /> component", () => {
  it("should match the snapshot", () => {
    const tree = renderer.create(<DirectionsMap />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
