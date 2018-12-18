import React from "react";
import renderer from "react-test-renderer";
import InputMap from "../InputMap";

describe("<InputMap /> component", () => {
  it("should match the snapshot", () => {
    const tree = renderer.create(<InputMap />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
