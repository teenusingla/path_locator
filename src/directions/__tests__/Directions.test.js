import React from "react";
import renderer from "react-test-renderer";
import Directions from "../Directions";

describe("<Directions /> component", () => {
  it("should match the snapshot", () => {
    const tree = renderer.create(<Directions />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
