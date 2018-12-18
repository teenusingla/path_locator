import React from "react";
import renderer from "react-test-renderer";
import RouteInfo from "../RouteInfo";

describe("<RouteInfo /> component", () => {
  it("should match the snapshot", () => {
    const tree = renderer.create(<RouteInfo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
