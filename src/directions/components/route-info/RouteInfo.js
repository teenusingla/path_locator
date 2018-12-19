import React from "react";
import DisplayTemplate from "../display-template/DisplayTemplate";

import "./RouteInfo.scss";

/**
 * @name RouteInfo
 * @type {Component}
 * @description Route info component. Display the route params like distance and time
 * @param {{total_distance,total_time}} Object Props to stateless component
 * @returns {JSX}
 */
const RouteInfo = ({ total_distance, total_time }) => (
  <div className="route-info">
    <DisplayTemplate label="Distance" value={total_distance} />
    <DisplayTemplate label="Time" value={total_time} />
  </div>
);

export default RouteInfo;
