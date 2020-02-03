import React from 'react';
import { Container } from 'reactstrap';

export default (props) => (
  <Container id="venue-list" className="text-center">
    <h5>
      {props.name}
    </h5>
    <p className="lead">
      {props.location}
    </p>
  </Container>
);
