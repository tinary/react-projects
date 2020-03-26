import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

const ErrorDisplay = () => {

  return (

    <Container id="search-form" className="text-center p-5">
      <div className="search">
        <h1 className="m-3">Find Places</h1>
        <Row className="m-5 mx-auto">
          <div className="mx-auto">
            <p>Sorry for the inconvenience! The site is currently unavailable.</p>
          </div>
        </Row>
      </div>
    </Container>
  )
}

export default ErrorDisplay