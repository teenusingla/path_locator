import React from "react";
import renderer from "react-test-renderer";
import DirectionsForm from "../DirectionsForm";

describe("<DirectionsForm /> component", () => {
  it("should match the snapshot", () => {
    const tree = renderer.create(<DirectionsForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
