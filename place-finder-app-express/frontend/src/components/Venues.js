import React from 'react';
import { Container } from 'reactstrap';


export default ({name, location}) => (
  <Container id="venue-list" className="text-center">
    <h5>
      {name}
    </h5>
    <p className="lead">
      {location}
    </p>
  </Container>
);