import React from "react";
import "./DisplayTemplate.scss";

/**
 * @name DisplayTemplate
 * @type {Component}
 * @description Display one way data
 * @param {{label,value}} Object Props to stateless component
 * @returns {JSX}
 */

const DisplayTemplate = ({ label, value }) => (
  <div className="display-info">
    <div className="label">{label}: </div>
    <div className="value"> {value}</div>
  </div>
);

export { DisplayTemplate };
