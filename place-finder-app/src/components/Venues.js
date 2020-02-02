import React, { Component } from 'react';


export default (props) => (
  <div>
    <li className="venue-list">
      {props.name}, Address: {props.location}
    </li>
  </div>
);
