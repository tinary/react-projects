import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

const ExploreForm = () => {

  return (

    <Container id="search-form" className="text-center p-5">
      <div className="search">
      <h1 className="m-3">Find Places</h1>
      <Row className="m-5 mx-auto">
        <div className="mx-auto">
          <form method='POST' action='/search-location' className="input-group">
            <Col md="auto p-2">
              <input name="query" type="text" className="form-control" placeholder="I'm Looking for"></input>
            </Col>
            <Col md="auto p-2">
              <input name="location" type="text" className="form-control" placeholder="City"></input>
            </Col>
            <Col md="auto p-2">
              <button className="btn btn-primary btn-outline">Search</button>
            </Col>
          </form>
        </div>
      </Row>
      </div>
    </Container>
  )
}

export default ExploreForm