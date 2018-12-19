import React from "react";
import renderer from "react-test-renderer";
import DisplayTemplate from "../DisplayTemplate";

describe("<DisplayTemplate /> component", () => {
  it("should match the snapshot", () => {
    const tree = renderer.create(<DisplayTemplate />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
